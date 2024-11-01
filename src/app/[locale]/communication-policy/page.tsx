import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/[locale]/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import PolicyContent from "@/components/paragraph/policyContent";
import { communicationContent } from "@/content/communicationContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";
import { useLocale } from "next-intl";

export const runtime = "edge";

export default function CommunicationPolicyPagePage() {
  const localActive = useLocale();
  const content =
    localActive === "ar" ? communicationContent.ar : communicationContent.en;
  return (
    <main className="overflow-hidden">
      <SecondaryNavbar title={content.title} />
      <div
        className="p-5 md:p-12 max-w-[1350px] mx-auto  leading-7 tracking-wide"
        dir={localActive === "ar" ? "rtl" : "ltr"}
      >
        {/*  <h2 className="text-[20px] pb-4 font-semibold mb-5 text-[#777777] mt-10">
          Updated at May 7th,2023
        </h2> */}
        <GeneralTermsSection terms={content.Introduction} />
        <PolicyContent
          title={content.keyTerms.title}
          description={content.keyTerms.description}
          lists={content.keyTerms.lists}
        />

        <GeneralTermsSection terms={content.cookie} />
        <GeneralTermsSection terms={content.cookieType} />
        <GeneralTermsSection terms={content.cookieEssential} />
        <GeneralTermsSection terms={content.cookiePerformace} />
        <GeneralTermsSection terms={content.cookieMarketing} />
        <GeneralTermsSection terms={content.cookieAnalytics} />

        <ContactUsSection
          title={content.contactUs.title}
          description={content.contactUs.description}
          conclution={content.contactUs.conclution}
        />
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
