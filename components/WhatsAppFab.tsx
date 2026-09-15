import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE, SCHOOL } from "@/content/school";

/**
 * Persistent WhatsApp action, bottom-right on every page.
 *
 * Sits above the safe-area inset so it clears the iOS home indicator, and
 * carries a text label from `sm` up — a bare green circle is ambiguous.
 */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${SCHOOL.shortName} on WhatsApp`}
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-navy px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_-10px_rgba(8,26,58,0.75)] transition-colors duration-200 hover:bg-navy-soft sm:bottom-6 sm:right-6 sm:px-5"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.38-2-1.23a7.5 7.5 0 01-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29z"
        />
      </svg>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
