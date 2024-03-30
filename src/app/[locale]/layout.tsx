import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}
export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
