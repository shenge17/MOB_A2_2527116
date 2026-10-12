import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';
import { Project } from '../types';

type Props = { project: Project; onPress: () => void };

export default function ProjectCard({ project, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Project: ${project.title}`}
      accessibilityHint="Opens the project details"
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.problem} numberOfLines={3}>
        {project.problem}
      </Text>
      <View style={styles.techRow}>
        {project.technologies.map((t, i) => (
          <View key={`${t}-${i}`} style={styles.tech}>
            <Text style={styles.techText}>{t}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.more}>View details ›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  pressed: { opacity: 0.85 },
  title: { fontSize: 18, fontWeight: '700', color: colors.skyDeep },
  problem: { fontSize: 15, color: colors.text },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  tech: {
    backgroundColor: colors.skyLight,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  techText: { color: colors.skyDeep, fontSize: 13, fontWeight: '600' },
  more: { color: colors.skyDark, fontWeight: '700', fontSize: 14 },
});
