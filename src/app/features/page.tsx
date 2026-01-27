import FeatureBenefits from "@/components/sections/features/benefits";
import FeaturePricing from "@/components/sections/features/pricing";
import FeaturesHero from "@/components/sections/features/hero";
import Integrations from "@/components/sections/shared/integrations";
import FeaturesTabs from "@/components/sections/features/tabs";
import Cta from "@/components/sections/shared/cta";

const page = () => {
  return (
    <>
      <FeaturesHero />
      <FeatureBenefits />
      <FeaturesTabs />
      <FeaturePricing />
      <Integrations />
      <Cta />
    </>
  );
};

export default page;
