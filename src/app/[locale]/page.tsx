import ActionCardSection from "@/app/sections/actionCardSection";
import ContactSection from "@/app/sections/contactSection";
import FooterSection from "@/components/footer/primaryFooter";
import HeaderSection from "@/app/sections/headerSection";
import InfoCardSection from "@/app/sections/infoCardSection";
import LogoCarosalSection from "@/app/sections/logoCarosalSection";
import TrailerSection from "@/app/sections/trailerSection";
import PrimaryFooter from "@/components/footer/primaryFooter";
export const runtime = "edge";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeaderSection />
      <LogoCarosalSection />
      <InfoCardSection />
      <ActionCardSection />
      <TrailerSection />
      <ContactSection />
      <PrimaryFooter />
    </main>
  );
}
