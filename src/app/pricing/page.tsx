import FeaturesIncluded from "@/components/sections/pricing/features-included";
import PricingHero from "@/components/sections/pricing/hero";
import Cta from "@/components/sections/shared/cta";
import Faq from "@/components/sections/shared/faq";

const page = () => {
  return (
    <>
      <PricingHero />
      <FeaturesIncluded />
      <Faq />
      <Cta />
    </>
  );
};

export default page;
