import CareersHero from "@/components/sections/careers/careers-hero";
import JobOpenings from "@/components/sections/careers/job-openings";
import Mission from "@/components/sections/careers/mission";
import Perks from "@/components/sections/careers/perks";
import Cta from "@/components/sections/shared/cta";

export default function AboutPage() {
  return (
    <>
      <CareersHero />
      <Mission />
      <Perks />
      <JobOpenings />
      <Cta />
    </>
  );
}
