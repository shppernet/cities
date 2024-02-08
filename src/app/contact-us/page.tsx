import PrimaryNavbar from "@/components/Navbar/primaryNavbar";
import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/terms-conditions/sections/contactUsSection";

import { policyContent } from "@/content/privacyContent";
import PolicyContent from "@/components/paragraph/policyContent";
import ContactForm from "./sections/contactForm";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "../sections/contactSection";
import ContactInfoSection from "./sections/ContactInfoSection";
export default function ContactUsPagePage() {
  return (
    <main className="overflow-hidden min-h-screen h-full flex flex-col">
      <SecondaryNavbar title="Contact Us" />
      <ContactInfoSection />
      {/* <ContactForm /> */}
      <div className="mt-auto">
        <ContactSection />

        <PrimaryFooter />
      </div>
    </main>
  );
}
