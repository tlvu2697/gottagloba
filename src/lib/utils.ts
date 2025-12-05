import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const strapiUrl = (
  path: string | undefined | null,
): string | undefined => {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;

  return `${env.NEXT_PUBLIC_STRAPI_URL}${path}`;
};
