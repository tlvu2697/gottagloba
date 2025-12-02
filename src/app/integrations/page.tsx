import React from 'react';

import MetafiCta from '@/components/sections/matafi-cta';
import MetafiAllIntegrations from '@/components/sections/metafi-all-integrations';
import MetafiIntegrationsHero from '@/components/sections/metafi-integrations-hero';

const page = () => {
  return (
    <>
      <MetafiIntegrationsHero />
      <MetafiAllIntegrations />
      <MetafiCta />
    </>
  );
};

export default page;
