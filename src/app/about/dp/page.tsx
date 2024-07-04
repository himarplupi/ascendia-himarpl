import { notFound } from "next/navigation";

import { DepartmentCard } from "@/components/about/department-card";
import { ProfileCard } from "@/components/about/profile-card";
import { Proker } from "@/components/about/proker";
import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";
import { api } from "@/trpc/server";

export default async function AboutDPPage() {
  const departments = await api.department.byType("DP");

  const pimpinanDepartment = departments.find(
    (department) =>
      department.acronym === "pimpinan" && department.type === "DP",
  );

  if (!pimpinanDepartment) {
    return notFound();
  }

  const sekretarisDepartment = departments.find(
    (department) =>
      department.acronym === "sekretaris" && department.type === "DP",
  );

  const bendaharaDepartment = departments.find(
    (department) =>
      department.acronym === "bendahara" && department.type === "DP",
  );

  const pimpinanUsers = await api.user.byDepartment({
    acronym: pimpinanDepartment.acronym,
    type: pimpinanDepartment.type,
  });

  const mappedPimpinanUsers = pimpinanUsers.map((user) => ({
    id: user.id,
    github: user.socialMedia.find(
      (socialMedia) => socialMedia.name === "github",
    )?.username,
    image: user.image,
    instagram: user.socialMedia.find(
      (socialMedia) => socialMedia.name === "instagram",
    )?.username,
    name: user.name,
    position: user.position,
    username: user.username,
  }));

  // remove pimpinan, sekretaris, bendahara department from departments
  const mappedDepartments = departments.filter(
    (department) =>
      department.acronym !== "pimpinan" &&
      department.acronym !== "sekretaris" &&
      department.acronym !== "bendahara",
  );

  return (
    <main className="pb-10 md:container">
      <section className="container flex h-screen max-h-[1080px] flex-col items-center justify-center md:px-0">
        <h2 className="font-serif text-6xl font-bold italic tracking-wider md:text-center md:text-8xl">
          <MotionText
            type="word"
            text={"Dewan Perwakilan"}
            hidden={{
              y: 128,
            }}
            amount={0.5}
          />
        </h2>

        <FadeIn amount={0.5} delay={0.6}>
          <p className="mt-4 leading-6 tracking-tight md:text-center md:text-lg">
            Dewan Perwakilan bertanggung jawab dalam memastikan bahwa kebijakan
            dan keputusan yang diambil oleh Badan Eksekutif sesuai dengan visi
            dan misi Himpunan Mahasiswa Rekayasa Perangkat Lunak. Dimana dewan
            perwakilan melakukan pengawasan yang mencakup evaluasi terhadap
            pelaksanaan program, keuangan, dan kegiatan lainnya yang
            dilaksanakan oleh Badan Eksekutif. Dengan demikian, dewan perwakilan
            berperan sebagai mekanisme kontrol internal yang membantu menjaga
            akuntabilitas dan transparansi dalam pengelolaan organisasi
          </p>
        </FadeIn>
      </section>

      <section className="flex flex-col gap-x-12 md:flex-row ">
        {mappedPimpinanUsers.map((user) => (
          <ProfileCard
            key={user.id}
            github={user.github}
            image={user.image}
            instagram={user.instagram}
            name={user.name}
            title={user.position}
            username={user.username}
          />
        ))}
      </section>

      <section className="container mt-12 flex flex-col gap-x-12 gap-y-6 md:flex-row md:px-0">
        <FadeIn amount={0.5} className="space-y-2 md:w-1/2">
          <h5 className="font-serif text-3xl font-semibold tracking-wide md:text-5xl">
            Deskripsi
          </h5>

          <p className="leading-6 tracking-tight md:text-lg">
            {pimpinanDepartment.description}
          </p>
        </FadeIn>

        <FadeIn amount={0.5} className="space-y-2 md:w-1/2">
          <h5 className="font-serif text-3xl font-semibold tracking-wide md:text-5xl">
            Program Kerja
          </h5>

          <Proker list={pimpinanDepartment.programs} />
        </FadeIn>
      </section>

      <section className="mt-24 flex flex-col items-center justify-center gap-y-12">
        <h3 className="container font-serif text-4xl font-semibold tracking-wide md:px-0 md:text-6xl">
          <MotionText
            type="word"
            text={"Departemen Dewan Perwakilan"}
            hidden={{
              y: 128,
            }}
            amount={0.5}
          />
        </h3>

        <div className="flex w-full flex-col items-center justify-center gap-y-12 md:gap-x-12 lg:flex-row">
          {bendaharaDepartment && (
            <DepartmentCard
              name={bendaharaDepartment.name}
              acronym={bendaharaDepartment.acronym}
              image={bendaharaDepartment.image}
              type={bendaharaDepartment.type}
            />
          )}
          {sekretarisDepartment && (
            <DepartmentCard
              name={sekretarisDepartment.name}
              acronym={sekretarisDepartment.acronym}
              image={sekretarisDepartment.image}
              type={sekretarisDepartment.type}
            />
          )}
        </div>

        {mappedDepartments.map((department) => (
          <DepartmentCard
            key={department.id}
            name={department.name}
            acronym={department.acronym}
            image={department.image}
            type={department.type}
          />
        ))}
      </section>
    </main>
  );
}
