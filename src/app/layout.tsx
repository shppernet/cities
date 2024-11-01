import type { Metadata } from "next";

import "./globals.css";
import { metropolisFont } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Shpper",
  description: "A Shopping Site",
};
export const runtime = "edge";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${metropolisFont.variable} `}>{children}</body>
    </html>
  );
}
