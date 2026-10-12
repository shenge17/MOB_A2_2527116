import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

type Props = { uri: string | null; name: string; size?: number };

function initialsOf(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export default function ProfilePhoto({ uri, name, size = 140 }: Props) {
  const [failed, setFailed] = useState(false);

  // If the picture file disappears, fall back to initials instead of crashing.
  useEffect(() => {
    setFailed(false);
  }, [uri]);

  const dims = { width: size, height: size, borderRadius: size / 2 };

  if (uri && !failed) {
    return (
      <Image
        source={{ uri }}
        style={[styles.image, dims]}
        accessibilityLabel={`Profile photo of ${name}`}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <View
      style={[styles.placeholder, dims]}
      accessible
      accessibilityLabel="No profile photo yet. Initials are shown instead."
    >
      <Text style={[styles.initials, { fontSize: size / 3 }]}>{initialsOf(name)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { borderWidth: 4, borderColor: colors.sky, backgroundColor: colors.skyLight },
  placeholder: {
    backgroundColor: colors.skyDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.sky,
  },
  initials: { color: colors.white, fontWeight: '800' },
});
