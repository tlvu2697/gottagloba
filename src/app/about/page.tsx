import MetafiCta from '@/components/sections/matafi-cta';
import MetafiAboutHero from '@/components/sections/metafi-about-hero';
import MetafiPartnerLogos from '@/components/sections/metafi-partner-logos';
import MetafiTeam from '@/components/sections/metafi-team';
import MetafiThroughYears from '@/components/sections/metafi-trough-years';

export default function AboutPage() {
  return (
    <>
      <MetafiAboutHero />
      <MetafiThroughYears />
      <MetafiTeam />
      <MetafiPartnerLogos />
      <MetafiCta />
    </>
  );
}
