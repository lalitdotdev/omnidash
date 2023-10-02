import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

// Create a currency formatter for US dollars (USD)
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency", // Format the number as currency
  currency: "USD", // Use US dollars as the currency symbol
});
