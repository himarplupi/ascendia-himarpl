import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  byDepartment: publicProcedure
    .input(
      z.object({
        acronym: z.string(),
        type: z.string().optional(),
        periodYear: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.user.findMany({
        where: {
          departments: {
            some: {
              AND: {
                acronym: input.acronym,
                type: input.type,
                periodYear: input.periodYear,
              },
            },
          },
        },
        select: {
          id: true,
          username: true,
          image: true,
          name: true,
          periods: true,
          positions: true,
          socialMedias: true,
          departments: true,
        },
      });
    }),
});
