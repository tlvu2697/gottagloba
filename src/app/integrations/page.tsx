import AllIntegrations from "@/components/sections/integrations/all-integrations";
import IntegrationsHero from "@/components/sections/integrations/hero";
import Cta from "@/components/sections/shared/cta";

const page = () => {
  return (
    <>
      <IntegrationsHero />
      <AllIntegrations />
      <Cta />
    </>
  );
};

export default page;
