import type { Metadata } from "next";
import "./globals.css";
import { metropolisFont } from "@/fonts/fonts";
import Script from "next/script";

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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16827691070"
         />

        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16827691070');

          `}
        </Script>
      </head>
      <body className={`${metropolisFont.variable}`}>
        {children}
      </body>
    </html>
  );
}