import { EducationEntry, Profile, Project } from '../types';

// ---------------------------------------------------------------------------
// Identity (fixed by the assignment brief)
// ---------------------------------------------------------------------------
export const IDENTITY = {
  fullName: 'UMURERWA Shenge Appoline',
  registrationNumber: '25/27116',
  appName: 'USAPortfolio',
  verificationCode: 'MOB-A2-7116',
  version: '1.0.0',
  institution: "Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)",
  course: 'Mobile Application Development (SWE 3409)',
} as const;

// ---------------------------------------------------------------------------
// Skills (the five skills supplied by the student)
// ---------------------------------------------------------------------------
export const SKILLS: { id: string; name: string }[] = [
  { id: 's1', name: 'Graphic design' },
  { id: 's2', name: 'Problem solving' },
  { id: 's3', name: 'Java programming' },
  { id: 's4', name: 'Mobile app development' },
  { id: 's5', name: 'Communication skills' },
];

// ---------------------------------------------------------------------------
// Default (editable) profile. These values are restored by "Reset profile".
// TODO(student): read the bio and edit it so it sounds like you.
// ---------------------------------------------------------------------------
export const DEFAULT_PROFILE: Profile = {
  headline:
    'Computer science student • Aspiring software developer • Python, Java & React Native',
  bio:
    'I am a computer science student who likes turning ideas into working software. ' +
    'I program in Python and Java, build mobile apps with React Native, and use graphic ' +
    'design to keep my work clear and attractive. I want to learn from real projects and teams.',
  primarySkill: 'Mobile app development',
  availability:
    'Open to learning opportunities, internships, collaborative projects and entry-level tech experience',
  imageUri: null,
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
export const EDUCATION: EducationEntry[] = [
  {
    id: 'e1',
    period: '2025 – present',
    title: 'Bachelor in Computer Science (Year 3)',
    place: "Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)",
    note: 'Studying software development, including mobile application development.',
  },
  {
    id: 'e2',
    period: '2020 – 2023',
    title: 'Advanced Level, PCB (Physics, Chemistry, Biology)',
    place: 'École des Sciences',
    note: 'Science combination; completed a system design project.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Desktop application project',
    problem:
      'A desktop application built to manage school information in a more organised way than paper records.',
    contribution:
      'I worked on this desktop application as a student project and learned how to turn a school need into a working program.',
    technologies: ['Desktop application', 'School management'],
  },
  {
    id: 'p2',
    title: 'School management system design',
    problem:
      'A system design for a school management system, completed at École des Sciences, to plan how school data and processes should be organised.',
    contribution:
      'I completed the system design for this school management system, planning how its parts fit together before building.',
    technologies: ['System design', 'School management'],
  },
];
