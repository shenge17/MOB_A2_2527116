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
// TODO(student): replace EVERY placeholder below with your REAL details.
// The assignment requires genuine education and genuine projects.
// ---------------------------------------------------------------------------
export const EDUCATION: EducationEntry[] = [
  {
    id: 'e1',
    period: '[ADD YEARS, e.g. 2025 – present]',
    title: 'Computer Science (Bachelor)',
    place: "Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)",
    note: '[ADD one line: current year or focus]',
  },
  {
    id: 'e2',
    period: '[ADD YEARS]',
    title: '[ADD your previous school, course or certificate]',
    place: '[ADD institution]',
    note: '[ADD one line]',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '[ADD PROJECT 1 TITLE]',
    problem: '[ADD the problem this project solved]',
    contribution: '[ADD what YOU personally did]',
    technologies: ['[ADD technology]', '[ADD technology]'],
  },
  {
    id: 'p2',
    title: '[ADD PROJECT 2 TITLE]',
    problem: '[ADD the problem this project solved]',
    contribution: '[ADD what YOU personally did]',
    technologies: ['[ADD technology]', '[ADD technology]'],
  },
];
