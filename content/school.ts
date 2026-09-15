/**
 * Single source of truth for the school's identity and contact details.
 * Sourced from BOBAES_Profile.docx. Every component reads from here —
 * never hard-code a phone number or address in JSX.
 */

const RAW_PHONE = "09024959076";

/** 0902… -> +234902… for tel: and wa.me links. */
function toInternational(local: string): string {
  const digits = local.replace(/\D/g, "");
  if (digits.startsWith("234")) return `+${digits}`;
  if (digits.startsWith("0")) return `+234${digits.slice(1)}`;
  return `+234${digits}`;
}

const INTERNATIONAL_PHONE = toInternational(RAW_PHONE);

export const SCHOOL = {
  name: "BOBAES Edu-Excellence Schools",
  shortName: "BOBAES",
  abbreviation: "BEES",
  motto: "Connecting Goodness, Integrity and Knowledge",
  tagline: "Exclusive education based on Nigerian and International standards.",

  address: {
    street: "20, Faith Avenue, off Cornerstone Road",
    city: "Port Harcourt",
    state: "Rivers State",
    country: "Nigeria",
    get full() {
      return `${this.street}, ${this.city}, ${this.state}, ${this.country}`;
    },
  },

  phone: {
    display: RAW_PHONE,
    international: INTERNATIONAL_PHONE,
    href: `tel:${INTERNATIONAL_PHONE}`,
  },

  // From the school's own pull-up banner (public/bobaes-img/14.jpg). Confirm with the office.
  email: "bobaeseduexcellence@gmail.com",

  social: {
    // ⚠️ DRAFT — replace with the school's real page URL before launch.
    facebook: "https://www.facebook.com/",
  },
} as const;

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  const number = INTERNATIONAL_PHONE.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WHATSAPP_DEFAULT_MESSAGE = `Hello ${SCHOOL.shortName}, I would like to ask about admission for my child.`;
export const WHATSAPP_TOUR_MESSAGE = `Hello ${SCHOOL.shortName}, I would like to book a tour of the school.`;
