import FeatureBenefits from "@/components/sections/features/benefits";
import FeaturesHero from "@/components/sections/features/hero";
import FeaturesTabs from "@/components/sections/features/tabs";
import Cta from "@/components/sections/shared/cta";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <FeatureBenefits />
      <FeaturesTabs />
      <Cta />
    </>
  );
};

export default page;
