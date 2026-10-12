import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_PROFILE } from '../data/portfolio';
import {
  clearProfileStorage,
  loadProfile,
  saveProfileToStorage,
} from '../storage/profileStorage';
import { Profile } from '../types';

type ProfileContextValue = {
  profile: Profile;
  loading: boolean;
  saveProfile: (next: Profile) => Promise<void>;
  resetProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);

  // Restore the saved profile when the app starts.
  useEffect(() => {
    let active = true;
    loadProfile().then((saved) => {
      if (!active) return;
      if (saved) setProfile(saved);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const saveProfile = useCallback(async (next: Profile) => {
    await saveProfileToStorage(next);
    setProfile(next);
  }, []);

  const resetProfile = useCallback(async () => {
    await clearProfileStorage();
    setProfile(DEFAULT_PROFILE);
  }, []);

  const value = useMemo(
    () => ({ profile, loading, saveProfile, resetProfile }),
    [profile, loading, saveProfile, resetProfile],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used inside ProfileProvider');
  return ctx;
}
