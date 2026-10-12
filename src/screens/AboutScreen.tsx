import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import SectionCard from '../components/SectionCard';
import { IDENTITY } from '../data/portfolio';
import { colors } from '../theme';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row} accessible accessibilityLabel={`${label}: ${value}`}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function AboutScreen() {
  return (
    <Screen>
      <Text style={styles.heading} accessibilityRole="header">
        About and release
      </Text>

      <SectionCard title="Application">
        <Row label="App name" value={IDENTITY.appName} />
        <Row label="Version" value={IDENTITY.version} />
        <Row label="Course" value={IDENTITY.course} />
      </SectionCard>

      <SectionCard title="Student">
        <Row label="Student name" value={IDENTITY.fullName} />
        <Row label="Registration number" value={IDENTITY.registrationNumber} />
        <Row label="Verification code" value={IDENTITY.verificationCode} />
        <Row label="Institution" value={IDENTITY.institution} />
      </SectionCard>

      <SectionCard title="Data use">
        <Text style={styles.body}>
          This app stores only the editable profile fields and the local path of the chosen
          profile photo, on this device, using AsyncStorage. Nothing is sent over the internet,
          and no passwords, tokens or sensitive personal records are stored. The whole portfolio
          works offline, and no feature in this app needs a connection.
        </Text>
      </SectionCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 24, fontWeight: '800', color: colors.skyDeep },
  row: { gap: 2, paddingVertical: 4 },
  label: { fontSize: 13, fontWeight: '700', color: colors.muted },
  value: { fontSize: 16, color: colors.text },
  body: { fontSize: 15, color: colors.text, lineHeight: 22 },
});
