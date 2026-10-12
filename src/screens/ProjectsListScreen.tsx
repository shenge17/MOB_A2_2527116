import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProjectCard from '../components/ProjectCard';
import Screen from '../components/Screen';
import { PROJECTS } from '../data/portfolio';
import { ProjectsStackParamList } from '../navigation/types';
import { colors } from '../theme';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ProjectsList'>;

export default function ProjectsListScreen({ navigation }: Props) {
  return (
    <Screen topInset={false}>
      {PROJECTS.length === 0 ? (
        <Text style={styles.empty}>No projects added yet.</Text>
      ) : (
        PROJECTS.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onPress={() => navigation.navigate('ProjectDetails', { projectId: p.id })}
          />
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { color: colors.muted, fontSize: 16 },
});
