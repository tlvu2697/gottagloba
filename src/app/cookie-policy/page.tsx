"use client";

import LegalArticle from "@/components/sections/shared/legal-article";
import CookiePolicy from "./cookie-policy.mdx";

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Cookie Policy"
      subtitle="What cookies are, the types we use, and how you can control them."
      updatedAt="Updated Oct 2025"
    >
      <CookiePolicy />
    </LegalArticle>
  );
}
