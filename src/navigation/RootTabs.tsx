import React from 'react';
import { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileEditorScreen from '../screens/ProfileEditorScreen';
import SkillsScreen from '../screens/SkillsScreen';
import { colors } from '../theme';
import ProjectsStack from './ProjectsStack';
import { RootTabParamList } from './types';

type IconName = ComponentProps<typeof Ionicons>['name'];

const ICONS: Record<keyof RootTabParamList, IconName> = {
  Home: 'home-outline',
  Skills: 'bulb-outline',
  Projects: 'folder-open-outline',
  Edit: 'create-outline',
  About: 'information-circle-outline',
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabs() {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.skyDark,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={ICONS[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen name="Edit" component={ProfileEditorScreen} options={{ title: 'Edit' }} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
