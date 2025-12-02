'use client';

import { Minus, Plus } from 'lucide-react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

type QA = { question: string; answer: string };

const FAQS: QA[] = [
  {
    question: 'How can I send one-time or recurring invoices to customers?',
    answer:
      'Metafi Billing lets you create both one-time and recurring invoices. You can generate payment links or embed checkout forms directly on your site, making it easy for customers to pay securely without extra setup.',
  },
  {
    question: 'How do I create and send an invoice using Metafi Billing?',
    answer: `To create an invoice:\n1. Log in to your Metafi Billing dashboard.\n2. Open the “Invoices” section and select **Create New Invoice**.\n3. Add client details, invoice date, and line items.\n4. Review everything, then click **Send** to email the invoice directly to your customer.`,
  },
  {
    question: 'How do I mark an invoice as paid outside of Metafi?',
    answer:
      'If you receive payment through another channel—such as a bank transfer or cash—you can mark the invoice as paid manually. Open the invoice, choose **Mark as Paid**, select “Out of band,” and record any payment reference or note for accurate reconciliation.',
  },
  {
    question: 'How can I calculate my trial conversion rate in Billing?',
    answer:
      'In your Billing dashboard, open **Analytics**, then select the **Funnels** tab and choose **Trials**. The report shows how many customers started a trial and how many converted to paid plans. You can filter results by date range and export them for further analysis.',
  },
];

function FaqItem({
  id,
  qa,
  open,
  onToggle,
}: {
  id: string;
  qa: QA;
  open: boolean;
  onToggle: (id: string) => void;
}) {
  const regionId = `${id}-region`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>(open ? 'auto' : 0);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      const h = contentRef.current.scrollHeight;
      setHeight(h);
    } else {
      const current = wrapperRef.current?.offsetHeight ?? 0;
      setHeight(current);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [open, qa.answer]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onEnd = () => {
      if (open) setHeight('auto');
    };
    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (!contentRef.current) return;
      if (open) {
        const h = contentRef.current.scrollHeight;
        if (height !== 'auto') setHeight(h);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open, height]);

  return (
    <div
      className={[
        'bg-card rounded-[16px] border px-4 py-2 sm:px-6 sm:py-4',
        'border-border shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]',
      ].join(' ')}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => onToggle(id)}
        className={[
          'group flex w-full items-center justify-between gap-4 text-left',
          'text-foreground text-xl leading-tight font-medium sm:text-2xl',
          'hover:no-underline',
          'py-1 sm:py-2',
        ].join(' ')}
      >
        <span className="pr-2">{qa.question}</span>
        <span
          className={[
            'flex size-6 items-center justify-center rounded-[6px] border',
            open
              ? 'border-tagline bg-tagline/10 text-tagline'
              : 'border-border text-muted-foreground',
          ].join(' ')}
          aria-hidden
        >
          {open ? (
            <Minus className="size-3" strokeWidth={2} />
          ) : (
            <Plus className="size-3" strokeWidth={2} />
          )}
        </span>
      </button>

      <div
        id={regionId}
        role="region"
        aria-hidden={!open}
        ref={wrapperRef}
        style={{ height, transition: 'height 200ms ease' }}
        className="overflow-hidden"
      >
        <div
          ref={contentRef}
          className="text-muted-foreground mt-2 text-sm font-normal whitespace-pre-wrap sm:text-base"
        >
          {qa.answer}
        </div>
      </div>
    </div>
  );
}

export default function MetafiFaq() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleToggle = (id: string) =>
    setValue((curr) => (curr === id ? undefined : id));

  return (
    <section id="metafi-faq" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 lg:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          FAQ
        </p>

        <h2 className="text-foreground mx-auto mb-4 max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center text-base font-normal sm:text-lg">
          Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas
          montes mauris. Auctor vitae neque urna nam nunc pellentesque.
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:mt-14">
          {FAQS.map((qa, i) => {
            const id = `item-${i + 1}`;
            const open = value === id;
            return (
              <FaqItem
                key={id}
                id={id}
                qa={qa}
                open={open}
                onToggle={handleToggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
