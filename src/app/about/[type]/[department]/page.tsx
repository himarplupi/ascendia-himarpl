import { type Metadata } from "next";
import { notFound } from "next/navigation";

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

  return (
    <main className="mt-24 pb-10 md:container">
      <h1 className="text-3xl font-bold">{department.name}</h1>
      <p className="mt-2 text-lg">{department.description}</p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Pimpinan</h2>
        <div className="flex flex-col md:flex-row"></div>
      </div>
    </main>
  );
}
