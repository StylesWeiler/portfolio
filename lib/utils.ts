import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// helper function to make everything work harmonously with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
