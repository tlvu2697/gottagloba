import MetafiCta from '@/components/sections/matafi-cta';
import MetafiCareersHero from '@/components/sections/metafi-careers-hero';
import MetafiJobOpenings from '@/components/sections/metafi-job-openings';
import MetafiMission from '@/components/sections/metafi-mission';
import MetafiPerks from '@/components/sections/metafi-perks';

export default function AboutPage() {
  return (
    <>
      <MetafiCareersHero />
      <MetafiMission />
      <MetafiPerks />
      <MetafiJobOpenings />
      <MetafiCta />
    </>
  );
}
