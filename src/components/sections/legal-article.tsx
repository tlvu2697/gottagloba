'use client';

import * as React from 'react';

type LegalArticleProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  updatedAt?: string;
  children: React.ReactNode;
};

export default function LegalArticle({
  overline = 'Legal',
  title,
  subtitle,
  updatedAt,
  children,
}: LegalArticleProps) {
  return (
    <section id="legal-article" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="bg-features-hero px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h1 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-base sm:text-lg">
              {subtitle}
            </p>
          )}
          {updatedAt && (
            <p className="text-muted-foreground/80 mt-3 text-xs">{updatedAt}</p>
          )}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="mx-auto max-w-3xl rounded-[16px] p-6 sm:p-8 md:p-10">
            <article
              className={[
                'prose prose-base sm:prose-lg dark:prose-invert',
                'prose-h1:!text-foreground prose-h2:!text-foreground prose-h3:!text-foreground',
                'prose-p:!text-muted-foreground prose-li:!text-muted-foreground',
                'prose-a:!text-tagline hover:prose-a:underline',
                'prose-strong:!text-foreground',
                'prose-code:!text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md',
                'prose-hr:border-border',
                'prose-th:!text-foreground prose-td:!text-muted-foreground',
              ].join(' ')}
            >
              {children}
            </article>
          </div>
        </div>

        <div className="h-10 sm:h-12 md:h-14" />
      </div>
    </section>
  );
}
