import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  byDepartment: publicProcedure
    .input(
      z.object({
        acronym: z.string(),
        type: z.enum(["BE", "DP"]).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.user.findMany({
        where: {
          department: {
            acronym: input.acronym,
            type: input.type,
          },
        },
        select: {
          id: true,
          username: true,
          image: true,
          name: true,
          position: true,
          socialMedia: true,
        },
      });
    }),
});
