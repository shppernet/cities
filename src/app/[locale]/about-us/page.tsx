import PrimaryNavbar from "@/components/Navbar/primaryNavbar";
import PrimaryFooter from "@/components/footer/primaryFooter";
import AboutCardSection from "./sections/aboutCardSection";
import OurJourneySection from "./sections/ourJourneySection";
import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";

export const runtime = "edge";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* <PrimaryNavbar title="About" page1="HOME" page2="FAQS" /> */}
      <SecondaryNavbar title="About Us" />
      <AboutCardSection />
      <OurJourneySection />
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
