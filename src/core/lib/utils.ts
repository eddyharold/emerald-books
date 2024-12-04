import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScroll = (id: string) => {
  const element = document.querySelector(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
