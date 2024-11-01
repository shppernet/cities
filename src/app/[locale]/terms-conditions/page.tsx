import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "./sections/generalTermsSection";
import ContactUsSection from "./sections/contactUsSection";
import { termsContent } from "@/content/termsContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";
import ContentTable from "@/components/table/contentTable";
import { useLocale } from "next-intl";
import PolicyContent from "@/components/paragraph/policyContent";
import OurServiceSection from "./sections/ourServiceSection";
import { termsContentArabic } from "@/content/termsContentArabic";

export const runtime = "edge";

export default function FaqPage() {
  const localActive = useLocale();
  const content =
    localActive === "ar" ? termsContentArabic.ar : termsContent.en;
  return (
    <main className="overflow-hidden">
      <SecondaryNavbar title={content.title} />
      <div
        className="p-5 md:p-12 max-w-[1350px] mx-auto leading-10 my-10"
        dir={localActive === "ar" ? "rtl" : "ltr"}
      >
        <GeneralTermsSection terms={content.aboutusInfo} />
        <GeneralTermsSection terms={content.contactusInfo} />
        <GeneralTermsSection terms={content.tosInfo} />
        <PolicyContent
          title={content.eligibilityInfo.title}
          description={content.eligibilityInfo.description}
          lists={content.eligibilityInfo.lists}
        />
        <PolicyContent
          title={content.restrictionsInfo.title}
          description={content.restrictionsInfo.description}
          lists={content.restrictionsInfo.lists}
        />
        <GeneralTermsSection terms={content.accountRegistrationInfo} />
        <OurServiceSection htmlContent={content.ourService} />

        <GeneralTermsSection terms={content.deliveryInsuranceInfo} />
        <PolicyContent
          title={content.generalTermInfo.title}
          description={content.generalTermInfo.description}
          lists={content.generalTermInfo.lists}
          subListStyle="roman"
        />

        <GeneralTermsSection terms={content.prohibitedItemData} />
        <ContentTable
          titles={content.categoryTableContent.titles}
          tableData={content.categoryTableContent.tableData}
          localActive={localActive}
        />
        {/* <ContactUsSection
          title="Contact Us"
          description="Don’t hesitate to contact us if you have any questions."
        /> */}
        <p className="text-[#777777] space-y-4 pb-10">
          {localActive === "ar"
            ? `خر تحديث بتاريخ: 27 أكتوبر 2024`
            : `Last updated on: 27th October 2024`}
        </p>
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
