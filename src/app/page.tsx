import { LogoAscendia } from "@/components/brand/logo-ascendia";
import { ThemeModeToggle } from "@/components/common/theme-mode-toggle";
import { ComingSoon } from "@/components/home/coming-soon";

export default function Home() {
  return (
    <>
      <nav className="container space-x-2 bg-secondary/50 py-2 text-center">
        <ThemeModeToggle />
      </nav>
      <main className="container flex min-h-screen flex-col items-center justify-center py-8">
        <LogoAscendia />
        <ComingSoon />
      </main>
    </>
  );
}
