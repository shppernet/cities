import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/[locale]/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import { policyContent } from "@/content/privacyContent";
import PolicyContent from "@/components/paragraph/policyContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";

export const runtime = "edge";

export default function PrivacyPolicyPagePage() {
  return (
    <main className="overflow-hidden">
      <SecondaryNavbar title="Privacy Policy" />

      <div className="p-5 md:p-12 max-w-[1350px] mx-auto  leading-10">
        <GeneralTermsSection terms={policyContent.generalInfo} />
        <GeneralTermsSection terms={policyContent.GDPRInfo} />
        <GeneralTermsSection terms={policyContent.AboutGDPRInfo} />

        <PolicyContent
          title={policyContent.personalDataInfo.title}
          description={policyContent.personalDataInfo.description}
          lists={policyContent.personalDataInfo.lists}
        />
        <GeneralTermsSection terms={policyContent.GDPRImportantInfo} />
        <GeneralTermsSection terms={policyContent.IndividualDataInfo} />

        <ContactUsSection />
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
