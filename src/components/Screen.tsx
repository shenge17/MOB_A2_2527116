import React from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

type Props = {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  /** Set false on screens that already show a navigation header. */
  topInset?: boolean;
};

export default function Screen({ children, contentStyle, topInset = true }: Props) {
  return (
    <SafeAreaView
      style={styles.safe}
      edges={topInset ? ['top', 'left', 'right'] : ['left', 'right']}
    >
      <ScrollView
        contentContainerStyle={[styles.content, contentStyle]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.skyPale },
  content: { padding: spacing.lg, paddingBottom: spacing.xl * 2, gap: spacing.lg },
});
