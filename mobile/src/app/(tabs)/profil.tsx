import { useState } from 'react';
import type React from 'react';
import { Image, Modal, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { alpha, brand, colors, fonts, radius, spacing, type } from '../../constants/theme';
import { PageTitle, Screen } from '../../components/layout';
import { Button, Card, Divider, ProgressBar, SectionHeader, Segmented, Touchable, type IconName } from '../../components/ui';
import { useApp } from '../../store/AppProvider';
import { overallProgress, quizStats, streakInfo } from '../../store/selectors';
import type { Preferences } from '../../types/state';
import type { Form } from '../../types/content';

type Confirm = null | 'progress' | 'all';

export default function ProfileScreen() {
  const { state, dispatch } = useApp();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(state.profile.name);
  const [confirm, setConfirm] = useState<Confirm>(null);
  const stats = quizStats(state);
  const streak = streakInfo(state);
  const overall = overallProgress(state);
  const setPrefs = (prefs: Partial<Preferences>) => dispatch({ type: 'setPrefs', prefs });

  return (
    <Screen>
      <PageTitle eyebrow="Akaun tempatan" title="Profil" />

      <Card style={styles.profile}>
        <Image source={require('../../../assets/images/brand-dp.jpg')} style={styles.avatar} accessibilityLabel="Logo Titik Sejarah" />
        <View style={{ flex: 1 }}>
          <Text style={type.title} numberOfLines={1}>
            {state.profile.name || 'Pelajar'}
          </Text>
          <Text style={type.small}>Tingkatan {state.profile.form} · calon SPM</Text>
        </View>
        <Touchable
          onPress={() => {
            setDraft(state.profile.name);
            setEditing(true);
          }}
          style={styles.editBtn}
          accessibilityLabel="Tukar nama"
        >
          <Ionicons name="pencil" size={16} color={brand.navy} />
        </Touchable>
      </Card>

      <Card tone="navy" style={{ marginTop: spacing.md, gap: spacing.md }} onPress={() => router.push('/kemajuan')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[type.caption, { color: brand.gold }]}>KEMAJUAN PEMBELAJARAN</Text>
          <Ionicons name="chevron-forward" size={18} color={brand.gold} />
        </View>
        <View style={styles.summaryRow}>
          <Summary value={`${Math.round(overall * 100)}%`} label="Silibus" />
          <Summary value={String(stats.total)} label="Kuiz" />
          <Summary value={stats.total ? `${stats.average}%` : '–'} label="Purata" />
          <Summary value={String(streak.current)} label="Streak" />
        </View>
        <ProgressBar value={overall} track={alpha(brand.white, 0.18)} height={6} />
      </Card>

      <SectionHeader title="Tetapan pembelajaran" style={styles.section} />
      <Card style={{ gap: spacing.lg }}>
        <Setting icon="school-outline" title="Tingkatan saya" hint="Menentukan cadangan harian dan cabaran harian">
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
        <Setting icon="flag-outline" title="Sasaran harian" hint="Bilangan aktiviti (nota dibaca atau kuiz) setiap hari">
          <Segmented
            value={state.prefs.dailyGoal}
            onChange={(dailyGoal) => setPrefs({ dailyGoal })}
            options={[1, 2, 3, 5].map((n) => ({ value: n as Preferences['dailyGoal'], label: String(n) }))}
          />
        </Setting>
        <Divider />
        <Setting icon="list-outline" title="Soalan setiap kuiz" hint="Untuk kuiz bab dan tingkatan">
          <Segmented
            value={state.prefs.perQuiz}
            onChange={(perQuiz) => setPrefs({ perQuiz })}
            options={[5, 10, 15].map((n) => ({ value: n as Preferences['perQuiz'], label: String(n) }))}
          />
        </Setting>
      </Card>

      <SectionHeader title="Keutamaan aplikasi" style={styles.section} />
      <Card style={{ gap: spacing.lg }}>
        <Setting icon="text-outline" title="Saiz teks nota">
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
        <View style={styles.switchRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="shuffle-outline" size={18} color={brand.navy} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={type.subheading}>Kocok pilihan jawapan</Text>
            <Text style={[type.small, { fontSize: 12 }]}>Susunan A–D berubah setiap kuiz</Text>
          </View>
          <Switch
            value={state.prefs.shuffleOptions}
            onValueChange={(shuffleOptions) => setPrefs({ shuffleOptions })}
            trackColor={{ false: colors.track, true: alpha(brand.navy, 0.55) }}
            thumbColor={state.prefs.shuffleOptions ? brand.navy : brand.white}
            accessibilityLabel="Kocok pilihan jawapan"
          />
        </View>
      </Card>

      <SectionHeader title="Lain-lain" style={styles.section} />
      <Card style={{ paddingVertical: spacing.xs }}>
        <LinkRow icon="bookmark-outline" label="Simpanan saya" onPress={() => router.push('/simpanan')} />
        <Divider />
        <LinkRow icon="information-circle-outline" label="Tentang Titik Sejarah" onPress={() => router.push('/tentang')} />
        <Divider />
        <LinkRow icon="refresh-outline" label="Set semula kemajuan" onPress={() => setConfirm('progress')} danger />
        <Divider />
        <LinkRow icon="trash-outline" label="Padam semua data" onPress={() => setConfirm('all')} danger />
      </Card>
      <Text style={styles.footnote}>Tiada akaun diperlukan. Semua data disimpan dalam peranti ini sahaja.</Text>

      {/* Edit name */}
      <Modal visible={editing} transparent animationType="fade" onRequestClose={() => setEditing(false)}>
        <View style={styles.modalBg}>
          <View style={styles.modal}>
            <Text style={type.heading}>Nama panggilan</Text>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              autoFocus
              maxLength={24}
              placeholder="Nama anda"
              placeholderTextColor={colors.textSubtle}
              style={styles.input}
              accessibilityLabel="Nama panggilan"
            />
            <View style={styles.modalBtns}>
              <Button label="Batal" variant="secondary" small style={{ flex: 1 }} onPress={() => setEditing(false)} />
              <Button
                label="Simpan"
                small
                style={{ flex: 1 }}
                onPress={() => {
                  dispatch({ type: 'setName', name: draft });
                  setEditing(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Confirm reset */}
      <Modal visible={confirm !== null} transparent animationType="fade" onRequestClose={() => setConfirm(null)}>
        <View style={styles.modalBg}>
          <View style={styles.modal}>
            <Text style={type.heading}>{confirm === 'all' ? 'Padam semua data?' : 'Set semula kemajuan?'}</Text>
            <Text style={[type.small, { marginTop: spacing.sm }]}>
              {confirm === 'all'
                ? 'Nama, tetapan, simpanan, kemajuan dan skor kuiz akan dipadam. Tindakan ini tidak boleh dibatalkan.'
                : 'Nota dibaca, bab selesai, skor kuiz dan streak akan dikosongkan. Simpanan dan tetapan dikekalkan.'}
            </Text>
            <View style={styles.modalBtns}>
              <Button label="Batal" variant="secondary" small style={{ flex: 1 }} onPress={() => setConfirm(null)} />
              <Button
                label={confirm === 'all' ? 'Padam' : 'Set semula'}
                variant="danger"
                small
                style={{ flex: 1 }}
                onPress={() => {
                  dispatch({ type: confirm === 'all' ? 'resetAll' : 'resetProgress' });
                  setConfirm(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

function Summary({ value, label }: { value: string; label: string }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.summaryValue}>{value}</Text>
      <Text style={[type.small, { fontSize: 11, color: alpha(brand.white, 0.7) }]}>{label}</Text>
    </View>
  );
}

function Setting({ icon, title, hint, children }: { icon: IconName; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: spacing.md }}>
      <View style={styles.switchRow}>
        <View style={styles.settingIcon}>
          <Ionicons name={icon} size={18} color={brand.navy} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={type.subheading}>{title}</Text>
          {hint ? <Text style={[type.small, { fontSize: 12 }]}>{hint}</Text> : null}
        </View>
      </View>
      {children}
    </View>
  );
}

function LinkRow({ icon, label, onPress, danger }: { icon: IconName; label: string; onPress: () => void; danger?: boolean }) {
  return (
    <Touchable onPress={onPress} style={styles.linkRow} scaleTo={0.99} accessibilityLabel={label}>
      <Ionicons name={icon} size={20} color={danger ? brand.red : brand.navy} />
      <Text style={[type.subheading, { flex: 1, fontWeight: '500' }, danger && { color: brand.red }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color={colors.textSubtle} />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  profile: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatar: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: brand.gold, backgroundColor: brand.white },
  editBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center' },
  summaryRow: { flexDirection: 'row' },
  summaryValue: { fontFamily: fonts.serif, fontSize: 20, fontWeight: '700', color: brand.white },
  section: { marginTop: spacing.xxl },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  settingIcon: { width: 36, height: 36, borderRadius: 10, backgroundColor: colors.goldSoft, alignItems: 'center', justifyContent: 'center' },
  linkRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md },
  footnote: { ...type.small, fontSize: 12, textAlign: 'center', marginTop: spacing.xl },
  modalBg: { flex: 1, backgroundColor: colors.overlay, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  modal: { width: '100%', maxWidth: 380, backgroundColor: brand.cream, borderRadius: radius.xl, padding: spacing.xl },
  modalBtns: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xl },
  input: {
    marginTop: spacing.md,
    height: 50,
    borderRadius: radius.md,
    backgroundColor: brand.white,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: brand.navy,
  },
});
