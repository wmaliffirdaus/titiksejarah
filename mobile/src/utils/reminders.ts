import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

/**
 * Daily study reminder using a local (on-device) notification. No server or account needed.
 * Returns false when permission is refused or the platform has no notification support.
 */
const CHANNEL_ID = 'peringatan-harian';

const MESSAGES = [
  'Masa untuk ulang kaji Sejarah. Sepuluh minit pun cukup hari ini.',
  'Cabaran harian hari ini sudah sedia, lima soalan sahaja.',
  'Kenali sejarah, fahami masa kini. Baca satu subtopik hari ini.',
  'Buka kad imbas dan uji ingatan anda tentang tarikh penting.',
];

export const remindersSupported = Platform.OS === 'android' || Platform.OS === 'ios';

// Show reminders even when the app is open.
if (remindersSupported) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

async function ensurePermission(): Promise<boolean> {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  if (!current.canAskAgain) return false;
  const asked = await Notifications.requestPermissionsAsync();
  return asked.granted;
}

/** Cancel any existing reminder and, if enabled, schedule a new daily one. */
export async function applyReminder(enabled: boolean, hour: number, minute: number): Promise<boolean> {
  if (!remindersSupported) return false;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    if (!enabled) return true;
    if (!(await ensurePermission())) return false;
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
        name: 'Peringatan ulang kaji',
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Titik Sejarah',
        body: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour, minute, channelId: CHANNEL_ID },
    });
    return true;
  } catch (e) {
    console.warn('[TitikSejarah] Gagal menetapkan peringatan.', e);
    return false;
  }
}

export function formatTime(hour: number, minute: number): string {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}
