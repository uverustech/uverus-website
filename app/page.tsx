import { Hero } from "@/app/components/hero";
import { LevelUp } from "@/app/components/level-up";
import { DeveloperAPI } from "@/app/components/developer-api";
import { TrustedBy } from "@/app/components/trusted-by";
import { Categories } from "@/app/components/categories";
import { Newsletter } from "@/app/components/newsletter";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
    <header>
      <nav></nav>
    </header>
    <main>
      <Hero />
      <LevelUp />
      <DeveloperAPI />
      <TrustedBy />
      <Categories />
      <Newsletter/>
    </main>
    <Footer />
    </>
  );
}
