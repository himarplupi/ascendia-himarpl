import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProfileCard } from "@/components/about/profile-card";
import { Proker } from "@/components/about/proker";
import { MotionText } from "@/components/motion/motion-text";
import { api } from "@/trpc/server";

type AboutDepartmentPageProps = {
  params: { department: string; type: string };
};

export async function generateMetadata({
  params,
}: AboutDepartmentPageProps): Promise<Metadata> {
  // read route params
  const TYPE = params.type.toUpperCase() as "BE" | "DP";

  const department = await api.department.byAcronym({
    acronym: params.department,
    type: TYPE,
  });

  return {
    title: `Departemen ${department?.acronym.toUpperCase()} HIMARPL`,
    description: `Mengenal lebih dekat departemen ${department?.acronym.toUpperCase()} HIMARPL, simak selengkapnya di sini!`,
  };
}

export default async function AboutDepartmentPage({
  params,
}: AboutDepartmentPageProps) {
  const TYPE = params.type.toUpperCase() as "BE" | "DP";

  if (TYPE !== "BE" && TYPE !== "DP") return notFound();

  const department = await api.department.byAcronym({
    acronym: params.department,
    type: TYPE,
  });

  if (!department) return notFound();

  const ketua = department.users.find((user) => user.position == "ketua");

  const staffs = department.users
    .filter((user) => user.position !== "ketua")
    .map((user) => ({
      id: user.id,
      github: user.socialMedia.find((sm) => sm.name === "github")?.username,
      instagram: user.socialMedia.find((sm) => sm.name === "instagram")
        ?.username,
      image: user.image,
      name: user.name,
      username: user.username,
    }));

  return (
    <main className="pb-12 md:container">
      <section className="container relative flex h-screen max-h-[1080px] flex-col items-start justify-end overflow-hidden pb-12 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-50 before:bg-dark-transparent-dark-gradient">
        <Image
          src={department.image ?? ""}
          alt={department.name + " picture"}
          fill
          className="object-cover"
        />

        <div className="z-[2]">
          <h2 className="font-serif text-6xl font-bold uppercase italic tracking-wider text-zinc-50 md:text-8xl">
            <MotionText
              type="word"
              text={department.acronym}
              hidden={{
                y: 128,
              }}
              amount={0.5}
            />
          </h2>
        </div>
      </section>

      <div className="mt-12 flex flex-col gap-y-12 md:flex-row">
        <section className="container space-y-2 md:px-0">
          <h5 className="font-serif text-3xl font-semibold tracking-wide md:text-5xl">
            {department.name}
          </h5>

          <p className="leading-6 tracking-tight md:text-lg">
            {department.description}
          </p>
        </section>

        <section className="container space-y-2 md:px-0">
          <h5 className="font-serif text-3xl font-semibold tracking-wide md:text-5xl">
            Program Kerja
          </h5>

          <Proker list={department.programs} />
        </section>
      </div>

      {ketua && (
        <section className="mt-12 space-y-2 md:px-0">
          <h3 className="container font-serif text-4xl font-semibold tracking-wide md:px-0 md:text-6xl">
            <MotionText
              type="word"
              text={"Ketua"}
              hidden={{
                y: 128,
              }}
            />
          </h3>

          <div className="flex w-full flex-col flex-wrap md:w-[512px] md:flex-row">
            <ProfileCard
              name={ketua.name}
              title={department.acronym}
              image={ketua.image}
              username={ketua.username}
              github={
                ketua.socialMedia.find((sm) => sm.name === "github")?.username
              }
              instagram={
                ketua.socialMedia.find((sm) => sm.name === "instagram")
                  ?.username
              }
            />
          </div>
        </section>
      )}

      {staffs.length > 0 && (
        <section className="mt-12 space-y-2 md:px-0">
          <h3 className="container font-serif text-4xl font-semibold tracking-wide md:px-0 md:text-6xl">
            <MotionText
              type="word"
              text={"Staff"}
              hidden={{
                y: 128,
              }}
            />
          </h3>

          <div className="flex w-full flex-col flex-wrap gap-6 md:flex-row md:gap-12">
            {staffs.map((staff) => (
              <div key={staff.id} className="w-full md:w-[512px]">
                <ProfileCard
                  name={staff.name}
                  title={department.acronym}
                  image={staff.image}
                  username={staff.username}
                  github={staff.github}
                  instagram={staff.instagram}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
