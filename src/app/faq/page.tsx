import FaqItems from "@/app/faq/sections/faqItems";
import PrimaryNavbar from "@/components/Navbar/primaryNavbar";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import PrimaryFooter from "@/components/footer/primaryFooter";
import ContactSection from "../sections/contactSection";

export default function FaqPage() {
  return (
    <main className="overflow-hidden">
      {/* <PrimaryNavbar title="FAQS" page1="HOME" page2="FAQS" /> */}
      <SecondaryNavbar title="FAQS" />

      <FaqItems />
      <div className="mt-20">
        <ContactSection />
        <PrimaryFooter />
      </div>
    </main>
  );
}
