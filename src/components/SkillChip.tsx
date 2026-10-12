import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

type Props = {
  label: string;
  /** When provided the chip becomes a selectable option (used in the editor). */
  selected?: boolean;
  onPress?: () => void;
};

export default function SkillChip({ label, selected = false, onPress }: Props) {
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="radio"
        accessibilityLabel={label}
        accessibilityState={{ selected }}
        style={[styles.chip, selected && styles.chipSelected]}
      >
        <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
      </Pressable>
    );
  }
  return (
    <View style={styles.chip} accessible accessibilityLabel={`Skill: ${label}`}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: 40,
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: colors.skyLight,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipSelected: { backgroundColor: colors.skyDark, borderColor: colors.skyDark },
  text: { color: colors.skyDeep, fontSize: 15, fontWeight: '600' },
  textSelected: { color: colors.white },
});
