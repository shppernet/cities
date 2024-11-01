import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/[locale]/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import { policyContent } from "@/content/privacyContent";
import PolicyContent from "@/components/paragraph/policyContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";
import { useLocale } from "next-intl";
import { policyContentArabic } from "@/content/privacyContentArabic";

export const runtime = "edge";

export default function PrivacyPolicyPagePage() {
  const localActive = useLocale();
  const content =
    localActive === "ar" ? policyContentArabic.ar : policyContent.en;
  return (
    <main className="overflow-hidden">
      <SecondaryNavbar title={content.title} />

      <div
        className="p-5 md:p-12 max-w-[1350px] mx-auto  leading-10"
        dir={localActive === "ar" ? "rtl" : "ltr"}
      >
        <GeneralTermsSection terms={content.generalInfo} />
        <GeneralTermsSection terms={content.GDPRInfo} />

        <PolicyContent
          title={content.personalDataInfo.title}
          description={content.personalDataInfo.description}
          conclusion={content.personalDataInfo.conclusion}
          lists={content.personalDataInfo.lists}
          listStyle="dash"
        />
        <PolicyContent
          title={content.GDPRImportantInfo.title}
          description={content.GDPRImportantInfo.description}
          conclusion={content.GDPRImportantInfo.conclusion}
          lists={content.GDPRImportantInfo.lists}
          listStyle="dash"
        />
        <PolicyContent
          description={content.processNCollectInfo.description}
          conclusion={content.processNCollectInfo.conclusion}
          lists={content.processNCollectInfo.lists}
          listStyle="dash"
        />

        <GeneralTermsSection terms={content.PaymentProcessingInfo} />
        <GeneralTermsSection terms={content.MannagingInfo} />
        <PolicyContent
          description={content.DiscloseInfo.description}
          conclusion={content.DiscloseInfo.conclusion}
          lists={content.DiscloseInfo.lists}
          listStyle="dash"
        />
        <GeneralTermsSection terms={content.retentionInfo} />

        <PolicyContent lists={content.AusRegionList.lists} listStyle="alpha" />
        {/* brasil */}
        <PolicyContent
          lists={content.BraRegionInfo.lists}
          conclusion={content.BraRegionInfo.conclusion}
          listStyle="dash"
        />
        <PolicyContent lists={content.BraRegionList.lists} listStyle="alpha" />
        <PolicyContent
          lists={content.CanRegionInfo.lists}
          conclusion={content.CanRegionInfo.conclusion}
          listStyle="dash"
        />
        <PolicyContent lists={content.CanRegionList.lists} listStyle="alpha" />
        <PolicyContent
          lists={content.EURegionInfo.lists}
          conclusion={content.EURegionInfo.conclusion}
          listStyle="dash"
        />
        <PolicyContent lists={content.EURegionList.lists} listStyle="alpha" />
        <PolicyContent
          lists={content.NeaRegionInfo.lists}
          conclusion={content.NeaRegionInfo.conclusion}
          listStyle="dash"
        />
        <PolicyContent lists={content.NeaRegionList.lists} listStyle="alpha" />
        <PolicyContent
          lists={content.USARegionInfo.lists}
          conclusion={content.USARegionInfo.conclusion}
          listStyle="dash"
        />
        <PolicyContent lists={content.USARegionList.lists} listStyle="alpha" />
        <GeneralTermsSection terms={content.usaClonslusion} />

        <GeneralTermsSection terms={content.exerciseRightInfo} />
        <GeneralTermsSection terms={content.CookiesInfo} />
        <GeneralTermsSection terms={content.DataAnalyticsInfo} />
        <GeneralTermsSection terms={content.childrenPrivacyInfo} />
        <GeneralTermsSection terms={content.PersonalInfo} />
        <GeneralTermsSection terms={content.trackSignalInfo} />
        <GeneralTermsSection terms={content.AdvertisementsInfo} />
        <GeneralTermsSection terms={content.SocialMediaInfo} />
        <GeneralTermsSection terms={content.EmailMarketing} />
        <GeneralTermsSection terms={content.PushNotifications} />
        <GeneralTermsSection terms={content.AffiliateLinks} />
        <GeneralTermsSection terms={content.ResourcesLinks} />
        <GeneralTermsSection terms={content.SecurityInfo} />
        <GeneralTermsSection terms={content.DataBreachInfo} />
        <GeneralTermsSection terms={content.ChangesInfo} />
        <GeneralTermsSection terms={content.AcceptancePolicy} />
        {/* contact section */}
        <ContactUsSection
          title={content.contactUs.title}
          description={content.contactUs.description}
          conclution={content.contactUs.conclution}
        />
        <p className="text-[#777777] ">{content.updateTime}</p>
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
