import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "./sections/generalTermsSection";

import DeliveryPolicySection from "./sections/deliveryPolicySection";
import ContactUsSection from "./sections/contactUsSection";
import CancelationPolicySection from "./sections/cancelationPolicySection";
import RefundPolicySection from "./sections/refundPolicySection";
import { termsContent } from "@/content/termsContent";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";

export const runtime = "edge";

export default function FaqPage() {
  return (
    <main className="overflow-hidden">
      {/* <PrimaryNavbar
        title="Terms & Conditions"
        page1="HOME"
        page2="Terms & Conditions"
      /> */}
      <SecondaryNavbar title="Terms & Conditions" />
      <div className="p-5 md:p-12 max-w-[1350px] mx-auto leading-10">
        <GeneralTermsSection terms={termsContent} />
        <DeliveryPolicySection />
        <RefundPolicySection />
        <CancelationPolicySection />
        <ContactUsSection />
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
