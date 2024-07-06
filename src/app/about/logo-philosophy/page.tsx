import {
  LogoHIMARPLBase,
  LogoHIMARPLConnection,
  LogoHIMARPLDevice,
  LogoHIMARPLHexagon,
} from "@/components/logo-philosophy/logo-himarpl";
import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";

export default function LogoPhilosophyPage() {
  return (
    <main className="container min-h-screen pb-32">
      <section className="mt-32 flex flex-col items-center justify-center gap-y-12 lg:gap-y-24">
        <h2 className="text-center font-serif text-6xl font-bold tracking-wider md:text-8xl">
          <MotionText
            type="word"
            text={"Filosofi Logo HIMARPL"}
            hidden={{
              y: 128,
            }}
          />
        </h2>

        <div className="flex max-w-[1080px] flex-col items-center md:flex-row md:gap-x-6 lg:gap-x-12">
          <FadeIn delay={0.6} className="w-fit">
            <LogoHIMARPLBase />
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="leading-6 tracking-tight md:text-lg">
              Kombinasi ketiga warna ini memiliki makna kehangatan, kecerdasan,
              optimisme, dan semangat serta perjuangan yang dilakukan dengan
              kesungguhan dengan penuh rasa tanggung jawab dalam suatu tindakan.
            </p>
          </FadeIn>
        </div>

        <div className="flex max-w-[1080px] flex-col items-center md:flex-row md:gap-x-6 lg:gap-x-12">
          <FadeIn className="w-fit">
            <LogoHIMARPLHexagon />
          </FadeIn>

          <FadeIn>
            <p className="leading-6 tracking-tight md:text-lg">
              Bentuk hexagon terinspirasi dari bentuk sarang lebah yang
              diciptakan oleh Tuhan dengan teknologi yang sangat tinggi, seperti
              sarang lebah dengan bentuk hexagonalnya yang memberikan
              efektifitas dengan hasil yang maksimal.
            </p>
          </FadeIn>
        </div>
        <div className="flex max-w-[1080px] flex-col items-center md:flex-row md:gap-x-6 lg:gap-x-12">
          <FadeIn className="w-fit">
            <LogoHIMARPLConnection />
          </FadeIn>

          <FadeIn>
            <p className="leading-6 tracking-tight md:text-lg">
              Bentuk Jaringan (Connection) melambangkan hubungan dan relasi yang
              kuat, cepat, kompetitif, dan semangat juara. Tingkatan tersebut
              juga berarti selalu ada pencapaian dan perkembangan yang didapat.
            </p>
          </FadeIn>
        </div>
        <div className="flex max-w-[1080px] flex-col items-center md:flex-row md:gap-x-6 lg:gap-x-12">
          <FadeIn className="w-fit">
            <LogoHIMARPLDevice />
          </FadeIn>

          <FadeIn>
            <p className="leading-6 tracking-tight md:text-lg">
              Bentuk Alat ini melambangkan keteknikan yang mengacu pada 3 bentuk
              landasan, yaitu hubungan, kerja sama, dan keterkaitan. Dimana
              ketiga landasan tersebut menjadi pondasi awal dalam meraih
              keberhasilan.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
