import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringifyCompleteDate(date: Date | string | number ) {
  const validDate = new Date(date);
  const year = validDate.getFullYear(),
    month = ("0" + (validDate.getMonth() + 1)).slice(-2),
    day = ("0" + validDate.getDate()).slice(-2);
  return `${year}/${month}/${day} `;
}
