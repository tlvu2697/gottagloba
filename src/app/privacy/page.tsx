'use client';

import LegalArticle from '@/components/sections/legal-article';

import Privacy from './privacy.mdx';

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when you use Metafi."
      updatedAt="Updated Oct 2025"
    >
      <Privacy />
    </LegalArticle>
  );
}
