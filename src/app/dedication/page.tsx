import { ChevronDownIcon } from "lucide-react";

import { HorizontalScrollText } from "@/components/common/horizontal-scroll-text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DedicationPage() {
  return (
    <main className="min-h-screen pb-10 pt-20">
      <section className="container">
        <h2 className="mt-4 flex flex-col font-serif text-2xl font-bold italic tracking-wide">
          <span>Penangguhan dan Cicilan</span>
          <span className="text-blue-ribbon-600 text-7xl tracking-wider">
            UKT
          </span>
        </h2>
        <p className="mt-4 leading-6 tracking-tight">
          Mahasiswa dapat mengajukan permohonan dengan melampirkan dokumen
          pendukung. Program ini diharapkan membantu mahasiswa menyelesaikan
          studi tanpa tekanan finansial yang berlebihan.
        </p>
      </section>

      <div className="bg-dedication-1 mt-8 h-64 w-full bg-cover bg-no-repeat">
        <div className="bg-dark-transparent-dark-gradient flex h-full w-full items-center justify-center">
          <div className="bg-white-paper w-full bg-opacity-50 bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity">
            <section className="container flex w-full flex-col gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    Lampiran <ChevronDownIcon className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    Berkas Penangguhan dan Cicilan UKT
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline">Hubungi Advokastra</Button>
            </section>
          </div>
        </div>
      </div>

      <HorizontalScrollText textClassName="text-4xl">
        KEEP STRUGGLE ● STAY TOGETHER ● KEEP STRUGGLE ● STAY TOGETHER ● KEEP
        STRUGGLE ● STAY TOGETHER ●
      </HorizontalScrollText>

      <div className="bg-dedication-2 h-64 w-full bg-cover bg-no-repeat">
        <div className="bg-white-transparent-white-gradient flex h-full w-full items-center justify-center">
          <section className="container w-full">
            <h2 className="text-bright-sun-500 mt-4 font-serif text-7xl font-bold italic tracking-wide">
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="mt-4 w-full">
              Lampiran <ChevronDownIcon className="ml-2 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Berkas Cuti Kuliah</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section className="container my-8">
        <div className="flex gap-x-2">
          <h2 className="text-blue-ribbon-600 flex flex-col font-serif text-7xl font-bold italic  tracking-wider">
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

      <div className="bg-dedication-advo h-64 w-full bg-[length:450px] bg-bottom bg-no-repeat">
        <div className="flex h-full w-full items-end justify-center">
          <div className="bg-white-paper w-full bg-opacity-50 bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity">
            <section className="container flex w-full flex-col gap-2">
              <Button variant="outline">Hubungi Advokastra</Button>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-dedication-burta h-64 w-full bg-cover bg-no-repeat">
        <div className="bg-dark-transparent-dark-gradient flex h-full w-full items-end justify-center pb-6">
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
