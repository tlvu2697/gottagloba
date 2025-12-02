import React from 'react';

import MetafiCta from '@/components/sections/matafi-cta';
import MetafiFaq from '@/components/sections/metafi-faq';
import MetafiFeaturesIncluded from '@/components/sections/metafi-features-included';
import MetafiPricingHero from '@/components/sections/metafi-pricing-hero';

const page = () => {
  return (
    <>
      <MetafiPricingHero />
      <MetafiFeaturesIncluded />
      <MetafiFaq />
      <MetafiCta />
    </>
  );
};

export default page;
