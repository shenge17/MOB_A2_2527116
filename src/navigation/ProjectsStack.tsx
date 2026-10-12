import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import ProjectsListScreen from '../screens/ProjectsListScreen';
import { colors } from '../theme';
import { ProjectsStackParamList } from './types';

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

export default function ProjectsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.skyDark },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="ProjectsList"
        component={ProjectsListScreen}
        options={{ title: 'Projects' }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetailsScreen}
        options={{ title: 'Project details' }}
      />
    </Stack.Navigator>
  );
}
