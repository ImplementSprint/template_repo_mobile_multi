import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getAppConfig } from '@config/appConfig';
import { buildDefaultDummySystem } from '@system/dummySystem';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';

const dummySystem = buildDefaultDummySystem();
const records = dummySystem.list();

export function HomeScreen() {
  const { appName, environment } = getAppConfig();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{appName}</Text>
      <Text style={styles.subtitle}>Single-root Expo boilerplate with dummy system records</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Environment: {environment}</Text>
      </View>

      {records.map((record) => (
        <View key={record.id} style={styles.card}>
          <Text style={styles.cardTitle}>{record.title}</Text>
          <Text style={styles.cardMeta}>
            ID: {record.id} | STATUS: {record.status}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    textAlign: 'center',
  },
  badge: {
    borderRadius: 999,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  badgeText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    maxWidth: 560,
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.xs,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  cardMeta: {
    fontSize: 12,
    color: colors.muted,
  },
});
