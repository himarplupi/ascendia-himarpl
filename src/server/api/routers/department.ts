import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const departmentRouter = createTRPCRouter({
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
