import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import SectionCard from '../components/SectionCard';
import SkillChip from '../components/SkillChip';
import TimelineItem from '../components/TimelineItem';
import { EDUCATION, SKILLS } from '../data/portfolio';
import { colors } from '../theme';

export default function SkillsScreen() {
  return (
    <Screen>
      <Text style={styles.heading} accessibilityRole="header">
        Skills and education
      </Text>

      <SectionCard title="Skills">
        <View style={styles.chips}>
          {SKILLS.map((s) => (
            <SkillChip key={s.id} label={s.name} />
          ))}
        </View>
      </SectionCard>

      <SectionCard title="Education and training">
        {EDUCATION.length === 0 ? (
          <Text style={styles.empty}>No education entries added yet.</Text>
        ) : (
          EDUCATION.map((e) => <TimelineItem key={e.id} entry={e} />)
        )}
      </SectionCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 24, fontWeight: '800', color: colors.skyDeep },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  empty: { color: colors.muted, fontSize: 15 },
});
