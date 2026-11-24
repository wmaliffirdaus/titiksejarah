import { useState } from 'react';
import type React from 'react';
import { Image, Linking, Modal, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import Constants from 'expo-constants';
import { brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { BrandSwitch, Button, Card, Divider, List, ListRow, SectionHeader, Segmented, Stat, TextLink } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { overallProgress, quizStats, streakInfo } from '../../store/selectors';
import type { Preferences } from '../../types/state';
import type { Form } from '../../types/content';
import { applyReminder, formatTime, remindersSupported } from '../../utils/reminders';
import { backupSummary, exportBackup, parseBackup } from '../../utils/backup';
import { displayName } from '../../utils/date';
import { RELEASES_URL } from '../../constants/app';

type Dialog = null | 'name' | 'progress' | 'all' | 'restore';

export default function ProfileScreen() {
  const { state, dispatch } = useApp();
  const [dialog, setDialog] = useState<Dialog>(null);
  const [draft, setDraft] = useState(state.profile.name);
  const [restoreText, setRestoreText] = useState('');
  const [restoreMsg, setRestoreMsg] = useState<string | null>(null);
  const [reminderMsg, setReminderMsg] = useState<string | null>(null);
  const [backupMsg, setBackupMsg] = useState<string | null>(null);
  const reminder = state.prefs.reminder;
  const setPrefs = (prefs: Partial<Preferences>) => dispatch({ type: 'setPrefs', prefs });
  const stats = quizStats(state);
  const streak = streakInfo(state);
  const overall = overallProgress(state);
  const version = Constants.expoConfig?.version ?? '';

  const updateReminder = async (next: Preferences['reminder']) => {
    setReminderMsg(null);
    const ok = await applyReminder(next.enabled, next.hour, next.minute);
    if (next.enabled && !ok) {
      setPrefs({ reminder: { ...next, enabled: false } });
      setReminderMsg('Notifikasi tidak dibenarkan. Buka Tetapan telefon, pilih Titik Sejarah, kemudian benarkan notifikasi.');
      return;
    }
    setPrefs({ reminder: next });
    if (next.enabled) setReminderMsg(`Peringatan dihantar setiap hari pada ${formatTime(next.hour, next.minute)}.`);
  };

  async function shareBackup() {
    setBackupMsg(null);
    try {
      const res = await Share.share({ title: 'Salinan data Titik Sejarah', message: exportBackup(state) });
      if (res.action === Share.sharedAction) setBackupMsg('Salinan dihantar. Simpan teks itu di tempat yang selamat.');
    } catch {
      setBackupMsg('Salinan tidak dapat dikongsi pada peranti ini.');
    }
  }

  function restore() {
    const r = parseBackup(restoreText);
    if (!r.ok) {
      setRestoreMsg(r.reason);
      return;
    }
    dispatch({ type: 'hydrate', state: r.state });
    setRestoreText('');
    setRestoreMsg(null);
    setDialog(null);
    setBackupMsg(`Data dipulihkan: ${backupSummary(r.state)}.`);
  }

  return (
    <Screen>
      <PageTitle eyebrow="Disimpan dalam telefon ini" title="Profil" />

      <View style={styles.profile}>
        <Image source={require('../../../assets/images/brand-dp.jpg')} style={styles.avatar} accessibilityLabel="Logo Titik Sejarah" />
        <View style={{ flex: 1 }}>
          <Text style={type.heading} numberOfLines={1}>
            {displayName(state.profile.name) || 'Pelajar'}
          </Text>
          <Text style={type.small}>Tingkatan {state.profile.form}, calon SPM</Text>
        </View>
        <TextLink
          label="Tukar nama"
          onPress={() => {
            setDraft(state.profile.name);
            setDialog('name');
          }}
        />
      </View>

      <View style={styles.ledger}>
        <Stat value={`${Math.round(overall * 100)}%`} label="silibus" />
        <Stat value={stats.total} label="kuiz" />
        <Stat value={state.paperAttempts.length} label="kertas" />
        <Stat value={streak.current} label="hari berturut" />
      </View>

      <SectionHeader title="Belajar" style={styles.section} />
      <Card style={{ gap: spacing.lg }}>
        <Setting title="Tingkatan saya" hint="Menentukan cadangan dan cabaran harian.">
          <Segmented<Form>
            value={state.profile.form}
            onChange={(form) => dispatch({ type: 'setForm', form })}
            options={[
              { value: 4, label: 'Tingkatan 4' },
              { value: 5, label: 'Tingkatan 5' },
            ]}
          />
        </Setting>
        <Divider />
        <Setting title="Sasaran harian" hint="Bilangan aktiviti setiap hari.">
          <Segmented
            value={state.prefs.dailyGoal}
            onChange={(dailyGoal) => setPrefs({ dailyGoal })}
            options={[1, 2, 3, 5].map((n) => ({ value: n as Preferences['dailyGoal'], label: String(n) }))}
          />
        </Setting>
        <Divider />
        <Setting title="Soalan setiap kuiz" hint="Untuk kuiz bab dan kuiz tingkatan.">
          <Segmented
            value={state.prefs.perQuiz}
            onChange={(perQuiz) => setPrefs({ perQuiz })}
            options={[5, 10, 15].map((n) => ({ value: n as Preferences['perQuiz'], label: String(n) }))}
          />
        </Setting>
        <Divider />
        <Setting title="Saiz teks nota">
          <Segmented
            value={state.prefs.fontScale}
            onChange={(fontScale) => setPrefs({ fontScale })}
            options={[
              { value: 'kecil', label: 'Kecil' },
              { value: 'sederhana', label: 'Sederhana' },
              { value: 'besar', label: 'Besar' },
            ]}
          />
        </Setting>
        <Divider />
        <ToggleRow
          title="Kocok pilihan jawapan"
          hint="Susunan pilihan A hingga D berubah dalam kuiz."
          value={state.prefs.shuffleOptions}
          onChange={(shuffleOptions) => setPrefs({ shuffleOptions })}
        />
        {remindersSupported ? (
          <>
            <Divider />
            <ToggleRow
              title="Peringatan harian"
              hint="Notifikasi untuk mengulang kaji."
              value={reminder.enabled}
              onChange={(enabled) => void updateReminder({ ...reminder, enabled })}
            />
            {reminder.enabled ? (
              <Segmented
                value={reminder.hour * 60 + reminder.minute}
                onChange={(v) => void updateReminder({ enabled: true, hour: Math.floor(v / 60), minute: v % 60 })}
                options={[
                  [6, 30],
                  [16, 0],
                  [20, 0],
                  [21, 30],
                ].map(([h, m]) => ({ value: h * 60 + m, label: formatTime(h, m) }))}
              />
            ) : null}
            {reminderMsg ? <Text style={[type.small, { fontSize: 12 }]}>{reminderMsg}</Text> : null}
          </>
        ) : null}
      </Card>

      <SectionHeader
        title="Data anda"
        style={styles.section}
        note="Data hanya disimpan dalam telefon ini. Buat salinan sebelum memadam aplikasi atau bertukar telefon."
      />
      <List>
        <ListRow title="Buat salinan data" subtitle="Kongsi teks salinan ke WhatsApp, Nota atau Google Drive." onPress={() => void shareBackup()} />
        <ListRow
          title="Pulihkan daripada salinan"
          subtitle="Tampal teks salinan yang anda simpan."
          onPress={() => {
            setRestoreMsg(null);
            setDialog('restore');
          }}
        />
        <ListRow title="Simpanan saya" subtitle={`${state.bookmarks.length} nota, soalan dan topik.`} onPress={() => router.push('/simpanan')} />
      </List>
      {backupMsg ? <Text style={[type.small, { marginTop: spacing.sm }]}>{backupMsg}</Text> : null}

      <SectionHeader title="Aplikasi" style={styles.section} />
      <List>
        <ListRow title="Tentang Titik Sejarah" subtitle={`Versi ${version}`} onPress={() => router.push('/tentang')} />
        <ListRow
          title="Muat turun versi terkini"
          subtitle="Buka halaman muat turun APK. Pasang di atas aplikasi ini, data anda kekal."
          onPress={() => void Linking.openURL(RELEASES_URL)}
        />
        <ListRow title="Set semula kemajuan" tone="danger" onPress={() => setDialog('progress')} />
        <ListRow title="Padam semua data" tone="danger" onPress={() => setDialog('all')} />
      </List>

      {/* Dialogs */}
      <Modal visible={dialog !== null} transparent animationType="fade" onRequestClose={() => setDialog(null)}>
        <View style={styles.modalBg}>
          <View style={styles.modal}>
            {dialog === 'name' ? (
              <>
                <Text style={type.heading}>Nama anda</Text>
                <TextInput
                  value={draft}
                  onChangeText={setDraft}
                  autoFocus
                  maxLength={40}
                  placeholder="Contoh: Aisyah"
                  placeholderTextColor={colors.textSubtle}
                  style={styles.input}
                  accessibilityLabel="Nama"
                />
                <View style={styles.modalBtns}>
                  <Button label="Batal" variant="secondary" small style={{ flex: 1 }} onPress={() => setDialog(null)} />
                  <Button
                    label="Simpan"
                    small
                    style={{ flex: 1 }}
                    onPress={() => {
                      dispatch({ type: 'setName', name: draft.trim() });
                      setDialog(null);
                    }}
                  />
                </View>
              </>
            ) : dialog === 'restore' ? (
              <>
                <Text style={type.heading}>Pulihkan data</Text>
                <Text style={[type.small, { marginTop: spacing.sm }]}>
                  Tampal teks salinan yang bermula dengan TITIKSEJARAH-SALINAN. Data dalam telefon ini akan diganti.
                </Text>
                <TextInput
                  value={restoreText}
                  onChangeText={setRestoreText}
                  multiline
                  placeholder="Tampal di sini"
                  placeholderTextColor={colors.textSubtle}
                  style={[styles.input, { height: 120, paddingTop: spacing.md, textAlignVertical: 'top' }]}
                  accessibilityLabel="Teks salinan"
                />
                {restoreMsg ? <Text style={[type.small, { color: brand.red, marginTop: spacing.sm }]}>{restoreMsg}</Text> : null}
                <View style={styles.modalBtns}>
                  <Button label="Batal" variant="secondary" small style={{ flex: 1 }} onPress={() => setDialog(null)} />
                  <Button label="Pulihkan" small style={{ flex: 1 }} onPress={restore} disabled={!restoreText.trim()} />
                </View>
              </>
            ) : (
              <>
                <Text style={type.heading}>{dialog === 'all' ? 'Padam semua data?' : 'Set semula kemajuan?'}</Text>
                <Text style={[type.small, { marginTop: spacing.sm }]}>
                  {dialog === 'all'
                    ? 'Nama, tetapan, simpanan, kemajuan dan skor akan dipadam. Tindakan ini tidak boleh dibatalkan.'
                    : 'Nota dibaca, bab selesai, skor kuiz, kertas dan rentak belajar akan dikosongkan. Simpanan dan tetapan kekal.'}
                </Text>
                <View style={styles.modalBtns}>
                  <Button label="Batal" variant="secondary" small style={{ flex: 1 }} onPress={() => setDialog(null)} />
                  <Button
                    label={dialog === 'all' ? 'Padam' : 'Set semula'}
                    variant="danger"
                    small
                    style={{ flex: 1 }}
                    onPress={() => {
                      if (dialog === 'all') void applyReminder(false, 0, 0);
                      dispatch({ type: dialog === 'all' ? 'resetAll' : 'resetProgress' });
                      setDialog(null);
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

function Setting({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: spacing.sm }}>
      <View>
        <Text style={type.subheading}>{title}</Text>
        {hint ? <Text style={[type.small, { fontSize: 12 }]}>{hint}</Text> : null}
      </View>
      {children}
    </View>
  );
}

function ToggleRow({ title, hint, value, onChange }: { title: string; hint?: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
      <View style={{ flex: 1 }}>
        <Text style={type.subheading}>{title}</Text>
        {hint ? <Text style={[type.small, { fontSize: 12 }]}>{hint}</Text> : null}
      </View>
      <BrandSwitch value={value} onValueChange={onChange} label={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  profile: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatar: { width: 52, height: 52, borderRadius: 26, borderWidth: 1.5, borderColor: brand.gold, backgroundColor: brand.white },
  ledger: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderStrong,
  },
  section: { marginTop: spacing.xxl },
  modalBg: { flex: 1, backgroundColor: colors.overlay, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  modal: { width: '100%', maxWidth: 400, backgroundColor: brand.cream, borderRadius: radius.lg, padding: spacing.xl },
  modalBtns: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xl },
  input: {
    marginTop: spacing.md,
    height: 50,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    fontFamily: fonts.sans,
    color: brand.navy,
  },
});
