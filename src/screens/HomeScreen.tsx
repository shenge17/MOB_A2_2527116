import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePhoto from '../components/ProfilePhoto';
import Screen from '../components/Screen';
import SectionCard from '../components/SectionCard';
import { useProfile } from '../context/ProfileContext';
import { IDENTITY } from '../data/portfolio';
import { colors, spacing } from '../theme';

export default function HomeScreen() {
  const { profile } = useProfile();

  return (
    <Screen>
      {/* The first sentence on Home must be exactly: My name is [full name]. */}
      <Text style={styles.intro} accessibilityRole="header">
        {`My name is ${IDENTITY.fullName}.`}
      </Text>

      <View style={styles.photoWrap}>
        <ProfilePhoto uri={profile.imageUri} name={IDENTITY.fullName} />
      </View>

      <Text style={styles.headline}>{profile.headline}</Text>

      <SectionCard title="About me">
        <Text style={styles.body}>{profile.bio}</Text>
      </SectionCard>

      <SectionCard title="Availability">
        <Text style={styles.body}>{profile.availability}</Text>
      </SectionCard>

      <SectionCard title="Quick facts">
        <Text style={styles.body}>Primary skill: {profile.primarySkill}</Text>
        <Text style={styles.body}>Verification code: {IDENTITY.verificationCode}</Text>
        <Text style={styles.body}>This portfolio works fully offline.</Text>
      </SectionCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { fontSize: 26, fontWeight: '800', color: colors.skyDeep },
  photoWrap: { alignItems: 'center', paddingVertical: spacing.sm },
  headline: { fontSize: 17, fontWeight: '600', color: colors.text, textAlign: 'center' },
  body: { fontSize: 16, color: colors.text, lineHeight: 24 },
});
