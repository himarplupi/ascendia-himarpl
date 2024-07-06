import { interpolate } from "flubber";
import { type MotionValue, useTransform } from "framer-motion";

export const getIndex = (_: unknown, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    // eslint-disable-next-line
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
