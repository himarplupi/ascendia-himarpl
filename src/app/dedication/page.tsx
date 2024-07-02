import { HorizontalScrollText } from "@/components/common/horizontal-scroll-text";
import { Lampiran } from "@/components/dedication/lampiran";
import { Button } from "@/components/ui/button";

export default function DedicationPage() {
  return (
    <main className="min-h-screen pb-10 pt-20">
      <section className="container">
        <h2 className="mt-4 flex flex-col font-serif text-2xl font-bold italic tracking-wide">
          <span>Penangguhan dan Cicilan</span>
          <span className="text-7xl tracking-wider text-blue-ribbon-600">
            UKT
          </span>
        </h2>
        <p className="mt-4 leading-6 tracking-tight">
          Mahasiswa dapat mengajukan permohonan dengan melampirkan dokumen
          pendukung. Program ini diharapkan membantu mahasiswa menyelesaikan
          studi tanpa tekanan finansial yang berlebihan.
        </p>
      </section>

      <div className="mt-8 h-64 w-full bg-dedication-1 bg-cover bg-no-repeat">
        <div className="flex h-full w-full items-center justify-center bg-dark-transparent-dark-gradient">
          <div className="w-full bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity">
            <section className="container flex w-full flex-col gap-2">
              <Lampiran type="dedication-1" />
              <Button variant="outline">Hubungi Advokastra</Button>
            </section>
          </div>
        </div>
      </div>

      <HorizontalScrollText textClassName="text-4xl">
        KEEP STRUGGLE ● STAY TOGETHER ● KEEP STRUGGLE ● STAY TOGETHER ● KEEP
        STRUGGLE ● STAY TOGETHER ●
      </HorizontalScrollText>

      <div className="h-64 w-full bg-dedication-2 bg-cover bg-no-repeat">
        <div className="flex h-full w-full items-center justify-center bg-white-transparent-white-gradient">
          <section className="container w-full">
            <h2 className="mt-4 font-serif text-7xl font-bold italic tracking-wide text-bright-sun-500">
              Cuti Kuliah
            </h2>
          </section>
        </div>
      </div>

      <section className="container">
        <p className="mt-4 leading-6 tracking-tight">
          Membantu mahasiswa yang akan mengambil cuti dengan menyediakan panduan
          dan dukungan administratif. Mahasiswa dapat mengajukan cuti melalui
          formulir dan dokumen pendukung yang akan dibantu oleh Staff Advokastra
          HIMARPL.
        </p>

        <Lampiran type="dedication-2" className="mt-4 w-full" />
      </section>

      <section className="container my-8">
        <div className="flex gap-x-2">
          <h2 className="flex flex-col font-serif text-7xl font-bold italic tracking-wider  text-blue-ribbon-600">
            <span>Ad</span>
            <span>For</span>
            <span>You</span>
          </h2>

          <aside className="space-y-4 pt-9">
            <h4 className="flex flex-col text-2xl font-semibold italic tracking-wide">
              vo-kastra
            </h4>

            <p className="mt-4 leading-6 tracking-tight">
              merupakan proker advokastra untuk menyebarkan poster dan
              pemberitahuan dalam penyaluran bantuan kepada mahasiswa yang
              membutuhkan bantuan atau sedang tertimpa musibah.
            </p>
          </aside>
        </div>
      </section>

      <div className="h-64 w-full bg-dedication-advo bg-[length:450px] bg-bottom bg-no-repeat">
        <div className="flex h-full w-full items-end justify-center">
          <div className="w-full bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity">
            <section className="container flex w-full flex-col gap-2">
              <Button variant="outline">Hubungi Advokastra</Button>
            </section>
          </div>
        </div>
      </div>

      <div className="h-64 w-full bg-dedication-burta bg-cover bg-no-repeat">
        <div className="flex h-full w-full items-end justify-center bg-dark-transparent-dark-gradient pb-6">
          <section className="container w-full">
            <h2 className="mt-4 text-center font-serif text-5xl font-bold italic tracking-wide text-background">
              Respiration
            </h2>
          </section>
        </div>
      </div>
      <section className="container my-8 space-y-4">
        <p className="mt-4 leading-6 tracking-tight">
          {`Reservoir of Resources' Aspiration, Program ini bertujuan untuk
          mengumpulkan masukan dan saran aspirasi perihal akademik maupun
          organisasi HIMARPL. Mari suarakan aspirasi Anda untuk kemajuan kita
          semua!`}
        </p>
        <Button className="w-full">Formulir Respiration</Button>
      </section>
    </main>
  );
}
