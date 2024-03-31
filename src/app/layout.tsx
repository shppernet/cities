import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metropolisFont } from "@/fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${metropolisFont.variable} `}>
        {children}
      </body>
    </html>
  );
}
