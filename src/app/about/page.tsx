import AboutHero from "@/components/sections/about/hero";
import PartnerLogos from "@/components/sections/about/partner-logos";
import Team from "@/components/sections/about/team";
import ThroughYears from "@/components/sections/about/through-years";
import Cta from "@/components/sections/shared/cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ThroughYears />
      <Team />
      <PartnerLogos />
      <Cta />
    </>
  );
}
