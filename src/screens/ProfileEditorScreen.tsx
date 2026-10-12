import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../components/FormField';
import PrimaryButton from '../components/PrimaryButton';
import ProfilePhoto from '../components/ProfilePhoto';
import Screen from '../components/Screen';
import SectionCard from '../components/SectionCard';
import SkillChip from '../components/SkillChip';
import { useProfile } from '../context/ProfileContext';
import { DEFAULT_PROFILE, IDENTITY, SKILLS } from '../data/portfolio';
import { colors, radius, spacing } from '../theme';
import { LIMITS, ProfileFields, validateProfile } from '../utils/validation';

type Status = { kind: 'success' | 'error' | 'info'; text: string } | null;

function toDraft(p: ProfileFields): ProfileFields {
  return {
    headline: p.headline,
    bio: p.bio,
    primarySkill: p.primarySkill,
    availability: p.availability,
  };
}

export default function ProfileEditorScreen() {
  const { profile, loading, saveProfile, resetProfile } = useProfile();
  const skillNames = useMemo(() => SKILLS.map((s) => s.name), []);

  const [draft, setDraft] = useState<ProfileFields>(toDraft(profile));
  const [touched, setTouched] = useState<Partial<Record<keyof ProfileFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [photoMessage, setPhotoMessage] = useState<Status>(null);

  // Fill the form once the saved profile has been restored from storage.
  useEffect(() => {
    if (!loading) setDraft(toDraft(profile));
    // Only when loading finishes: later photo saves must not overwrite typed text.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const errors = validateProfile(draft, skillNames);
  const visibleError = (field: keyof ProfileFields) =>
    touched[field] || submitted ? errors[field] : undefined;

  function update(field: keyof ProfileFields, value: string) {
    setDraft((d) => ({ ...d, [field]: value }));
    setStatus(null);
  }

  function markTouched(field: keyof ProfileFields) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  async function handleSave() {
    setSubmitted(true);
    if (Object.keys(errors).length > 0) {
      setStatus({ kind: 'error', text: 'Not saved. Please fix the highlighted fields.' });
      return;
    }
    const cleaned: ProfileFields = {
      headline: draft.headline.trim(),
      bio: draft.bio.trim(),
      primarySkill: draft.primarySkill,
      availability: draft.availability.trim(),
    };
    try {
      await saveProfile({ ...profile, ...cleaned });
      setDraft(cleaned);
      setStatus({ kind: 'success', text: 'Profile saved on this device.' });
    } catch {
      setStatus({ kind: 'error', text: 'Could not save. Please try again.' });
    }
  }

  function handleReset() {
    Alert.alert(
      'Reset profile?',
      'This removes your saved changes and your profile photo, and restores the default profile.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await resetProfile();
            setDraft(toDraft(DEFAULT_PROFILE));
            setTouched({});
            setSubmitted(false);
            setPhotoMessage(null);
            setStatus({ kind: 'info', text: 'Profile reset to the default values.' });
          },
        },
      ],
    );
  }

  // ----- Profile photo -----------------------------------------------------

  async function storePhoto(result: ImagePicker.ImagePickerResult) {
    if (result.canceled || !result.assets || result.assets.length === 0) {
      setPhotoMessage({
        kind: 'info',
        text: 'No photo was selected. Your current photo was kept.',
      });
      return;
    }
    try {
      await saveProfile({ ...profile, imageUri: result.assets[0].uri });
      setPhotoMessage({ kind: 'success', text: 'Profile photo saved.' });
    } catch {
      setPhotoMessage({ kind: 'error', text: 'Could not save the photo. Please try again.' });
    }
  }

  async function takePhoto() {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) {
        setPhotoMessage({
          kind: 'error',
          text: 'Camera permission was denied. You can still choose a photo from the gallery, or allow the camera in Settings.',
        });
        Alert.alert(
          'Camera permission needed',
          'Allow camera access in Settings to take a photo, or choose one from the gallery instead.',
          [
            { text: 'Not now', style: 'cancel' },
            { text: 'Open Settings', onPress: () => Linking.openSettings() },
          ],
        );
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });
      await storePhoto(result);
    } catch {
      setPhotoMessage({ kind: 'error', text: 'The camera could not be opened on this device.' });
    }
  }

  async function chooseFromGallery() {
    try {
      // The system photo picker used here does not need a storage permission.
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });
      await storePhoto(result);
    } catch {
      setPhotoMessage({ kind: 'error', text: 'The gallery could not be opened.' });
    }
  }

  async function removePhoto() {
    try {
      await saveProfile({ ...profile, imageUri: null });
      setPhotoMessage({ kind: 'info', text: 'Profile photo removed.' });
    } catch {
      setPhotoMessage({ kind: 'error', text: 'Could not remove the photo.' });
    }
  }

  const hasPhoto = profile.imageUri !== null;

  return (
    <Screen>
      <Text style={styles.heading} accessibilityRole="header">
        Edit profile
      </Text>

      <SectionCard title="Profile photo">
        <View style={styles.photoWrap}>
          <ProfilePhoto uri={profile.imageUri} name={IDENTITY.fullName} size={120} />
        </View>
        <View style={styles.buttons}>
          <PrimaryButton label="Take photo with camera" onPress={takePhoto} />
          <PrimaryButton
            label={hasPhoto ? 'Replace from gallery' : 'Choose from gallery'}
            variant="secondary"
            onPress={chooseFromGallery}
          />
          {hasPhoto ? (
            <PrimaryButton label="Remove photo" variant="danger" onPress={removePhoto} />
          ) : null}
        </View>
        {photoMessage ? <Banner status={photoMessage} /> : null}
      </SectionCard>

      <SectionCard title="Profile details">
        <FormField
          label="Headline"
          value={draft.headline}
          onChangeText={(t) => update('headline', t)}
          onBlur={() => markTouched('headline')}
          error={visibleError('headline')}
          hint={`${LIMITS.headlineMin} to ${LIMITS.headlineMax} characters`}
          maxLength={LIMITS.headlineMax + 40}
        />
        <FormField
          label="Short biography"
          value={draft.bio}
          onChangeText={(t) => update('bio', t)}
          onBlur={() => markTouched('bio')}
          error={visibleError('bio')}
          multiline
          showCounter
          maxLength={LIMITS.bioMax + 100}
        />

        <View style={styles.skillBlock}>
          <Text style={styles.fieldLabel}>Primary skill</Text>
          <View style={styles.chips} accessibilityRole="radiogroup">
            {SKILLS.map((s) => (
              <SkillChip
                key={s.id}
                label={s.name}
                selected={draft.primarySkill === s.name}
                onPress={() => {
                  markTouched('primarySkill');
                  update('primarySkill', s.name);
                }}
              />
            ))}
          </View>
          {visibleError('primarySkill') ? (
            <Text style={styles.error} accessibilityLiveRegion="polite">
              {visibleError('primarySkill')}
            </Text>
          ) : null}
        </View>

        <FormField
          label="Availability status"
          value={draft.availability}
          onChangeText={(t) => update('availability', t)}
          onBlur={() => markTouched('availability')}
          error={visibleError('availability')}
          multiline
          hint={`${LIMITS.availabilityMin} to ${LIMITS.availabilityMax} characters`}
          maxLength={LIMITS.availabilityMax + 40}
        />

        {status ? <Banner status={status} /> : null}

        <PrimaryButton label="Save profile" onPress={handleSave} />
        <PrimaryButton label="Reset profile" variant="danger" onPress={handleReset} />
      </SectionCard>
    </Screen>
  );
}

function Banner({ status }: { status: NonNullable<Status> }) {
  return (
    <View
      style={[
        styles.banner,
        status.kind === 'success' && styles.bannerSuccess,
        status.kind === 'error' && styles.bannerError,
        status.kind === 'info' && styles.bannerInfo,
      ]}
      accessibilityLiveRegion="polite"
    >
      <Text
        style={[
          styles.bannerText,
          status.kind === 'success' && { color: colors.success },
          status.kind === 'error' && { color: colors.error },
          status.kind === 'info' && { color: colors.skyDeep },
        ]}
      >
        {status.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 24, fontWeight: '800', color: colors.skyDeep },
  photoWrap: { alignItems: 'center', paddingVertical: spacing.sm },
  buttons: { gap: spacing.sm },
  skillBlock: { gap: spacing.sm },
  fieldLabel: { fontSize: 15, fontWeight: '700', color: colors.skyDeep },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  error: { color: colors.error, fontSize: 13, fontWeight: '600' },
  banner: { borderRadius: radius.md, padding: spacing.md },
  bannerSuccess: { backgroundColor: colors.successBg },
  bannerError: { backgroundColor: colors.errorBg },
  bannerInfo: { backgroundColor: colors.skyLight },
  bannerText: { fontSize: 14, fontWeight: '700' },
});
