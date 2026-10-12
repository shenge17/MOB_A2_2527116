import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';
import { EducationEntry } from '../types';

export default function TimelineItem({ entry }: { entry: EducationEntry }) {
  return (
    <View
      style={styles.row}
      accessible
      accessibilityLabel={`${entry.period}. ${entry.title}, ${entry.place}. ${entry.note}`}
    >
      <View style={styles.rail}>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>
      <View style={styles.body}>
        <Text style={styles.period}>{entry.period}</Text>
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.place}>{entry.place}</Text>
        <Text style={styles.note}>{entry.note}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: spacing.md },
  rail: { alignItems: 'center', width: 16 },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: colors.skyDark, marginTop: 4 },
  line: { flex: 1, width: 2, backgroundColor: colors.border, marginTop: 4 },
  body: { flex: 1, paddingBottom: spacing.lg, gap: 2 },
  period: { color: colors.skyDark, fontWeight: '700', fontSize: 13 },
  title: { color: colors.text, fontWeight: '700', fontSize: 16 },
  place: { color: colors.muted, fontSize: 14 },
  note: { color: colors.muted, fontSize: 14 },
});
