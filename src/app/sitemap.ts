import type { MetadataRoute } from "next";

import { env } from "@/env";
import { db } from "@/server/db";

// This is the combination of the Application Base URL and Base PATH
const baseUrlAndPath = `${env.BASE_URL}${env.BASE_PATH}`;

const EXTERNAL_LINKS_SITEMAP = [
  "https://blog.himarpl.com/",
  "https://pmb.himarpl.com/",
];

// This allows us to generate a `sitemap.xml` file dynamically based on the needs of the Node.js Website
// Next.js Sitemap Generation doesn't support `alternate` refs yet
// @see https://github.com/vercel/next.js/discussions/55646
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const paths: Array<string> = [];

  paths.push(`${baseUrlAndPath}`);
  paths.push(`${baseUrlAndPath}/dedication`);
  paths.push(`${baseUrlAndPath}/news`);
  paths.push(`${baseUrlAndPath}/about`);
  paths.push(`${baseUrlAndPath}/contact`);
  paths.push(`${baseUrlAndPath}/about/dp`);
  paths.push(`${baseUrlAndPath}/about/be`);
  paths.push(`${baseUrlAndPath}/about/logo-philosophy`);

  const departmentsBE = await db.department.findMany({
    where: {
      AND: [
        {
          type: "BE",
        },
        {
          NOT: {
            name: "pimpinan",
          },
        },
      ],
    },
  });

  if (departmentsBE) {
    departmentsBE.forEach((department) => {
      paths.push(`${baseUrlAndPath}/about/be/${department.acronym}`);
    });
  }

  const departmentsDP = await db.department.findMany({
    where: {
      AND: [
        {
          type: "DP",
        },
        {
          NOT: {
            name: "pimpinan",
          },
        },
      ],
    },
  });

  if (departmentsDP) {
    departmentsDP.forEach((department) => {
      paths.push(`${baseUrlAndPath}/about/dp/${department.acronym}`);
    });
  }

  const currentDate = new Date().toISOString();

  return [...paths, ...EXTERNAL_LINKS_SITEMAP].map((route) => ({
    url: route,
    lastModified: currentDate,
    changeFrequency: "always",
  }));
};

export default sitemap;

// @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = "auto";
