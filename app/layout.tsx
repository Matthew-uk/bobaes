import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SCHOOL } from "@/content/school";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://bobaeseduexcellenceschools.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SCHOOL.name}`,
    default: `${SCHOOL.name} — Nursery, Primary and JSS in Port Harcourt`,
  },
  description:
    "A Christian-founded private school in Port Harcourt offering Nursery, Primary and JSS 1 to JSS 3 education. Connecting Goodness, Integrity and Knowledge.",
  applicationName: SCHOOL.name,
  keywords: [
    "school in Port Harcourt",
    "private school Port Harcourt",
    "Christian school Nigeria",
    "creche Port Harcourt",
    "nursery and primary school",
    "junior secondary school Port Harcourt",
    "State BECE NECO BECE",
    SCHOOL.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SCHOOL.name,
    locale: "en_NG",
    url: "/",
    title: `${SCHOOL.name} — Nursery, Primary and JSS in Port Harcourt`,
    description:
      "Exclusive education based on Nigerian and International standards. Connecting Goodness, Integrity and Knowledge.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F3A73",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
