import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfileProvider } from './src/context/ProfileContext';
import RootTabs from './src/navigation/RootTabs';
import { colors } from './src/theme';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.skyDark,
    background: colors.skyPale,
    card: colors.white,
    text: colors.text,
    border: colors.border,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="dark" />
          <RootTabs />
        </NavigationContainer>
      </ProfileProvider>
    </SafeAreaProvider>
  );
}
