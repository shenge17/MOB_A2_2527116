import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../types';

// Only low-risk, fictional/class data is stored here (no passwords or tokens).
const STORAGE_KEY = 'usaportfolio.profile.v1';

function isProfile(value: unknown): value is Profile {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.headline === 'string' &&
    typeof v.bio === 'string' &&
    typeof v.primarySkill === 'string' &&
    typeof v.availability === 'string' &&
    (typeof v.imageUri === 'string' || v.imageUri === null)
  );
}

export async function loadProfile(): Promise<Profile | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isProfile(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export async function saveProfileToStorage(profile: Profile): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export async function clearProfileStorage(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
