export type Profile = {
  headline: string;
  bio: string;
  primarySkill: string;
  availability: string;
  imageUri: string | null;
};

export type Project = {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technologies: string[];
};

export type EducationEntry = {
  id: string;
  period: string;
  title: string;
  place: string;
  note: string;
};
