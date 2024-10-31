import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}
const inter = Inter({ subsets: ["latin"] });
export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();
  const localActive = useLocale();
  return (
    <html lang={locale}>
      <body
        className={`${
          localActive == "ar" ? "arial-font" : `${inter.className}`
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
