import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/[locale]/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import PolicyContent from "@/components/paragraph/policyContent";
import { cookieContent } from "@/content/cookieContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";
export default function CookiePolicyPagePage() {
  return (
    <main className="overflow-hidden">
      {/* <PrimaryNavbar title="Cookie Policy" page1="HOME" page2="Cookie Policy" /> */}
      <SecondaryNavbar title="Cookie Policy" />
      <div className="p-5 md:p-12 max-w-[1350px] mx-auto  leading-7 tracking-wide">
        <h2 className="text-[20px] pb-4 font-semibold mb-5 text-[#777777] mt-10">
          Updated at May 7th,2023
        </h2>
        <PolicyContent
          title={cookieContent.keyTerms.title}
          description={cookieContent.keyTerms.description}
          lists={cookieContent.keyTerms.lists}
        />
        <GeneralTermsSection terms={cookieContent.Introduction} />
        <GeneralTermsSection terms={cookieContent.cookie} />
        <PolicyContent
          title={cookieContent.cookieUse.title}
          description={cookieContent.cookieUse.description}
          lists={cookieContent.cookieUse.lists}
        />
        <GeneralTermsSection terms={cookieContent.cookieType} />
        <GeneralTermsSection terms={cookieContent.cookieEssential} />
        <GeneralTermsSection terms={cookieContent.cookiePerformace} />
        <GeneralTermsSection terms={cookieContent.cookieMarketing} />
        <GeneralTermsSection terms={cookieContent.cookieAnalytics} />
        <GeneralTermsSection terms={cookieContent.cookieSocial} />
        <GeneralTermsSection terms={cookieContent.cookieThirdParty} />
        <PolicyContent
          title={cookieContent.cookieManage.title}
          description={cookieContent.cookieManage.description}
          lists={cookieContent.cookieManage.lists}
        />

        <GeneralTermsSection terms={cookieContent.cookieBlocking} />
        <GeneralTermsSection terms={cookieContent.cookieChanges} />
        <GeneralTermsSection terms={cookieContent.Consent} />

        <ContactUsSection />
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
