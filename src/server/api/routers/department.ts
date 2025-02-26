import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const departmentRouter = createTRPCRouter({
  byAcronym: publicProcedure
    .input(z.object({ acronym: z.string(), type: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.department.findUnique({
        where: {
          type_acronym: {
            type: input.type,
            acronym: input.acronym,
          },
          periodYear: 2024,
        },
        include: {
          programs: true,
          users: {
            include: {
              socialMedias: true,
              positions: true,
              periods: true,
            },
          },
        },
      });
    }),
  byType: publicProcedure
    .input(z.enum(["BE", "DP"]))
    .query(async ({ ctx, input }) => {
      return await ctx.db.department.findMany({
        where: {
          AND: {
            type: input,
            periodYear: 2024,
          },
        },
        orderBy: {
          acronym: "asc",
        },
        include: {
          programs: true,
        },
      });
    }),
});
