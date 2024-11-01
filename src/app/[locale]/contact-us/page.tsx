import PrimaryNavbar from "@/components/Navbar/primaryNavbar";
import PrimaryFooter from "@/components/footer/primaryFooter";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import { policyContent } from "@/content/privacyContent";
import PolicyContent from "@/components/paragraph/policyContent";
import ContactForm from "./sections/contactForm";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";

import ContactInfoSection from "./sections/ContactInfoSection";
import { useLocale, useTranslations } from "next-intl";

export const runtime = "edge";

export default function ContactUsPagePage() {
  const localActive = useLocale();
  const t = useTranslations("About_Us");
  return (
    <main className="overflow-hidden min-h-screen h-full flex flex-col">
      <SecondaryNavbar title={t("page_title")} />
      <div>
        <ContactInfoSection
          title={t("title")}
          subtitle1={t("subtitle1")}
          subtitle2={t("subtitle2")}
          action_description={t("action_description")}
          buttonText={t("buttonText")}
        />
        {/* <ContactForm /> */}
        <div className="mt-auto">
          <ContactSection />

          <PrimaryFooter />
        </div>
      </div>
    </main>
  );
}
