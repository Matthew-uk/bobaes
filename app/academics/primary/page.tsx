import type { Metadata } from "next";
import LevelPage from "@/components/LevelPage";
import { getLevel } from "@/content/academics";

const level = getLevel("primary");

export const metadata: Metadata = {
  title: `${level.name} (${level.ages})`,
  description: level.intro.slice(0, 155),
  alternates: { canonical: "/academics/primary" },
};

export default function Page() {
  return <LevelPage level={level} />;
}
