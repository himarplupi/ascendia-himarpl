import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const departmentRouter = createTRPCRouter({
  byAcronym: publicProcedure
    .input(z.object({ acronym: z.string(), type: z.enum(["BE", "DP"]) }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.department.findUnique({
        where: {
          type_acronym: {
            acronym: input.acronym,
            type: input.type,
          },
        },
        include: {
          users: {
            include: {
              socialMedia: true,
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
          type: input,
        },
        orderBy: {
          acronym: "asc",
        },
      });
    }),
});
