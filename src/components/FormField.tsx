import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, radius, spacing } from '../theme';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
  multiline?: boolean;
  maxLength?: number;
  showCounter?: boolean;
};

export default function FormField({
  label,
  value,
  onChangeText,
  onBlur,
  error,
  hint,
  multiline = false,
  maxLength,
  showCounter = false,
}: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        multiline={multiline}
        maxLength={maxLength}
        textAlignVertical={multiline ? 'top' : 'center'}
        accessibilityLabel={label}
        accessibilityHint={hint}
        style={[styles.input, multiline && styles.multiline, error ? styles.inputError : null]}
        placeholderTextColor={colors.muted}
      />
      <View style={styles.metaRow}>
        {error ? (
          <Text style={styles.error} accessibilityLiveRegion="polite">
            {error}
          </Text>
        ) : hint ? (
          <Text style={styles.hint}>{hint}</Text>
        ) : (
          <View />
        )}
        {showCounter && maxLength ? (
          <Text style={styles.counter}>
            {value.length}/{maxLength}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: spacing.xs },
  label: { fontSize: 15, fontWeight: '700', color: colors.skyDeep },
  input: {
    minHeight: 48,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.white,
  },
  multiline: { minHeight: 110 },
  inputError: { borderColor: colors.error },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm },
  error: { flex: 1, color: colors.error, fontSize: 13, fontWeight: '600' },
  hint: { flex: 1, color: colors.muted, fontSize: 13 },
  counter: { color: colors.muted, fontSize: 13 },
});
