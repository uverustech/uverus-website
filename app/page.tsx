import { Hero } from "@/app/components/hero";
import { LevelUp } from "@/app/components/level-up";
import { DeveloperAPI } from "@/app/components/developer-api";
import { TrustedBy } from "@/app/components/trusted-by";
import { Categories } from "@/app/components/categories";

export default function Home() {
  return (
    <>
      <Hero />
      <LevelUp />
      <DeveloperAPI />
      <TrustedBy />
      <Categories />
    </>
  );
}
