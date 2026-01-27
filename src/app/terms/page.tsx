"use client";

import LegalArticle from "@/components/sections/shared/legal-article";
import Terms from "./terms.mdx";

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when you use Gotta GLOBA."
      updatedAt="Updated Oct 2025"
    >
      <Terms />
    </LegalArticle>
  );
}
