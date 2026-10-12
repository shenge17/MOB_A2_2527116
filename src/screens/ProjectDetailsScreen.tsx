import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from '../components/Screen';
import SectionCard from '../components/SectionCard';
import SkillChip from '../components/SkillChip';
import { PROJECTS } from '../data/portfolio';
import { ProjectsStackParamList } from '../navigation/types';
import { colors } from '../theme';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ProjectDetails'>;

export default function ProjectDetailsScreen({ route }: Props) {
  const project = PROJECTS.find((p) => p.id === route.params.projectId);

  if (!project) {
    return (
      <Screen topInset={false}>
        <Text style={styles.empty}>This project could not be found.</Text>
      </Screen>
    );
  }

  return (
    <Screen topInset={false}>
      <Text style={styles.title} accessibilityRole="header">
        {project.title}
      </Text>

      <SectionCard title="Problem">
        <Text style={styles.body}>{project.problem}</Text>
      </SectionCard>

      <SectionCard title="My contribution">
        <Text style={styles.body}>{project.contribution}</Text>
      </SectionCard>

      <SectionCard title="Technologies used">
        <View style={styles.chips}>
          {project.technologies.map((t, i) => (
            <SkillChip key={`${t}-${i}`} label={t} />
          ))}
        </View>
      </SectionCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '800', color: colors.skyDeep },
  body: { fontSize: 16, color: colors.text, lineHeight: 24 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  empty: { color: colors.muted, fontSize: 16 },
});
