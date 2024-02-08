import localFont from "next/font/local";

export const metropolisFont = localFont({
  src: [
    {
      path: "../localFonts/Metropolis-Medium.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../localFonts/Metropolis-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../localFonts/Metropolis-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
  display: "swap",
});
