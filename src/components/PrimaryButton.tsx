import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing } from '../theme';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  accessibilityHint?: string;
};

export default function PrimaryButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  accessibilityHint,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'danger' && styles.danger,
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === 'secondary' && styles.labelSecondary,
          variant === 'danger' && styles.labelDanger,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  primary: { backgroundColor: colors.skyDark, borderColor: colors.skyDark },
  secondary: { backgroundColor: colors.white, borderColor: colors.skyDark },
  danger: { backgroundColor: colors.white, borderColor: colors.error },
  disabled: { opacity: 0.5 },
  pressed: { opacity: 0.8 },
  label: { color: colors.white, fontSize: 16, fontWeight: '700', textAlign: 'center' },
  labelSecondary: { color: colors.skyDark },
  labelDanger: { color: colors.error },
});
