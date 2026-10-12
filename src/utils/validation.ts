export type ProfileFields = {
  headline: string;
  bio: string;
  primarySkill: string;
  availability: string;
};

export type ProfileErrors = Partial<Record<keyof ProfileFields, string>>;

export const LIMITS = {
  headlineMin: 10,
  headlineMax: 120,
  bioMin: 40,
  bioMax: 400,
  availabilityMin: 10,
  availabilityMax: 160,
};

/**
 * Validation rules (all produce field-level messages):
 *  1. Headline: required, 10 to 120 characters.
 *  2. Bio: required, 40 to 400 characters.
 *  3. Primary skill: required and must be one of the listed skills.
 *  4. Availability: required, 10 to 160 characters.
 *  5. Headline and bio must contain letters (not only digits or symbols).
 */
export function validateProfile(values: ProfileFields, skillNames: string[]): ProfileErrors {
  const errors: ProfileErrors = {};
  const headline = values.headline.trim();
  const bio = values.bio.trim();
  const availability = values.availability.trim();

  if (headline.length === 0) {
    errors.headline = 'Headline is required.';
  } else if (headline.length < LIMITS.headlineMin) {
    errors.headline = `Headline must be at least ${LIMITS.headlineMin} characters.`;
  } else if (headline.length > LIMITS.headlineMax) {
    errors.headline = `Headline must be at most ${LIMITS.headlineMax} characters.`;
  } else if (!/[A-Za-z]/.test(headline)) {
    errors.headline = 'Headline must contain letters, not only numbers or symbols.';
  }

  if (bio.length === 0) {
    errors.bio = 'Short biography is required.';
  } else if (bio.length < LIMITS.bioMin) {
    errors.bio = `Biography must be at least ${LIMITS.bioMin} characters (now ${bio.length}).`;
  } else if (bio.length > LIMITS.bioMax) {
    errors.bio = `Biography must be at most ${LIMITS.bioMax} characters (now ${bio.length}).`;
  } else if (!/[A-Za-z]/.test(bio)) {
    errors.bio = 'Biography must contain letters, not only numbers or symbols.';
  }

  if (values.primarySkill.trim().length === 0) {
    errors.primarySkill = 'Choose a primary skill.';
  } else if (!skillNames.includes(values.primarySkill)) {
    errors.primarySkill = 'Primary skill must be one of your listed skills.';
  }

  if (availability.length === 0) {
    errors.availability = 'Availability status is required.';
  } else if (availability.length < LIMITS.availabilityMin) {
    errors.availability = `Availability must be at least ${LIMITS.availabilityMin} characters.`;
  } else if (availability.length > LIMITS.availabilityMax) {
    errors.availability = `Availability must be at most ${LIMITS.availabilityMax} characters.`;
  }

  return errors;
}
