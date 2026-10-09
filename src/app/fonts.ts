import { Cormorant_Garamond, Montserrat } from "next/font/google";

// Display serif, after the book cover's titling.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

// The typeface of the logo's wordmark.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const fontVariables = `${cormorant.variable} ${montserrat.variable}`;
