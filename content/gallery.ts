import type { MediaKey } from "@/content/media";

export type GalleryCategory =
  | "Learning"
  | "School Life"
  | "Activities"
  | "Events"
  | "Campus";

export type GalleryPhoto = {
  id: string;
  mediaKey: MediaKey;
  title: string;
  category: GalleryCategory;
  description: string;
  featured?: boolean;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "classroom-writing",
    mediaKey: "galleryClassroom",
    title: "Focused Classroom Work",
    category: "Learning",
    description: "Pupils writing and studying in a bright BOBAES classroom.",
    featured: true,
  },
  {
    id: "teacher-guided-table",
    mediaKey: "galleryTeacherGuided",
    title: "Guided Early Learning",
    category: "Learning",
    description: "Teacher-supported table work in the early-years classroom.",
  },
  {
    id: "early-years-numbers",
    mediaKey: "galleryEarlyYears",
    title: "Early Years Discovery",
    category: "Learning",
    description: "Young learners using colour, numbers and classroom materials.",
  },
  {
    id: "computer-lab",
    mediaKey: "galleryComputerLab",
    title: "Computer Laboratory",
    category: "Campus",
    description: "Pupils building digital literacy with supervised computer use.",
    featured: true,
  },
  {
    id: "playground",
    mediaKey: "galleryPlayground",
    title: "Supervised Play",
    category: "School Life",
    description: "Outdoor play as part of a balanced school day.",
  },
  {
    id: "football",
    mediaKey: "gallerySports",
    title: "Sports and Movement",
    category: "Activities",
    description: "Football and physical activity on the school field.",
  },
  {
    id: "assembly",
    mediaKey: "galleryAssembly",
    title: "Assembly Moments",
    category: "School Life",
    description: "Pupils singing together during an outdoor school gathering.",
  },
  {
    id: "graduation",
    mediaKey: "galleryGraduation",
    title: "Celebration Day",
    category: "Events",
    description: "Graduation and school celebration memories.",
    featured: true,
  },
  {
    id: "outing",
    mediaKey: "galleryExcursion",
    title: "School Outing",
    category: "Events",
    description: "A supervised outing with pupils and staff.",
  },
  {
    id: "science-practical",
    mediaKey: "galleryScience",
    title: "Practical Learning",
    category: "Activities",
    description: "Hands-on science work and observation.",
  },
];

export const GALLERY_CATEGORIES = Array.from(
  new Set(GALLERY_PHOTOS.map((photo) => photo.category)),
);
