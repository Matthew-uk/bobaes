export type StaffMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  mediaKey: string;
  photoAvailable: boolean;
};

export const STAFF: StaffMember[] = [
  {
    id: "principal",
    name: "Mr Kelechi Romanus Ukeje",
    role: "Principal",
    bio: "Provides school leadership, academic direction and oversight for the BOBAES learning community.",
    mediaKey: "staffHead",
    photoAvailable: true,
  },
  {
    id: "lead-teacher",
    name: "Ogochukwu M. Igboanugo.",
    role: "Lead Teacher",
    bio: "Supports teaching quality, classroom rhythm and the day-to-day academic care of pupils.",
    mediaKey: "staffPrimary",
    photoAvailable: true,
  },
  {
    id: "manager",
    name: "Mr Christopher Chilekwe Nnamdi",
    role: "Manager",
    bio: "Coordinates school operations so families, staff and pupils experience an orderly school day.",
    mediaKey: "staffSecondary",
    photoAvailable: true,
  },
  {
    id: "admin-officer",
    name: "Gloria Obinna",
    role: "Admin Officer",
    bio: "Welcomes families, supports school records and helps enquiries reach the right office quickly.",
    mediaKey: "staffEarlyYears",
    photoAvailable: false,
  },
];
