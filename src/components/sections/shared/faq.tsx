"use client";

import { Minus, Plus } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type QA = { question: string; answer: string };

const FAQS: QA[] = [
  {
    question: "What is Gotta GLOBA and who is it for?",
    answer:
      "Gotta GLOBA is a professional training platform dedicated to busy yet ambitious self-improvers who want to build a global-scale career. We help you speak English confidently in international workplaces and achieve high IELTS scores for higher education. Our structured and effective practice turns your hard work into real progress.",
  },
  {
    question: "How does Gotta GLOBA's learning method work?",
    answer:
      "We focus on Nano-Skills through authentic workplace scenarios, shadowing drills, diverse accent challenges, and workplace advanced vocabulary. Our courses include collections like Upward Management (managing pressure, handling conflict, commanding resources) and Meetings with Confidence (speaking with authority, defending strategically, handling meeting dynamics).",
  },
  {
    question:
      "What makes Gotta GLOBA different from other English learning platforms?",
    answer:
      "Unlike traditional language courses, we focus on career-scenario virtual simulations and real workplace communication skills. You'll learn how to disagree respectfully with superiors, negotiate tasks without looking lazy, and master high-level communication that matters in international professional environments. We combine language learning with career advancement strategies.",
  },
  {
    question: "Do I need to have advanced English skills to start?",
    answer:
      "While we focus on professional English for the workplace, our courses are designed for ambitious learners at various levels. If you're serious about advancing your global career and willing to put in structured practice, our step-by-step approach will help you build from your current level to workplace fluency and IELTS success.",
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
  const [height, setHeight] = useState<string | number>(open ? "auto" : 0);

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
      if (open) setHeight("auto");
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (!contentRef.current) return;
      if (open) {
        const h = contentRef.current.scrollHeight;
        if (height !== "auto") setHeight(h);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, height]);

  return (
    <div
      className={[
        "bg-card rounded-2xl border px-4 py-2 sm:px-6 sm:py-4",
        "border-border shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]",
      ].join(" ")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={() => onToggle(id)}
        className={[
          "group flex w-full items-center justify-between gap-4 text-left",
          "text-foreground text-xl leading-tight font-medium sm:text-2xl",
          "hover:no-underline",
          "py-1 sm:py-2",
        ].join(" ")}
      >
        <span className="pr-2">{qa.question}</span>
        <span
          className={[
            "flex size-6 items-center justify-center rounded-md border",
            open
              ? "border-tagline bg-tagline/10 text-tagline"
              : "border-border text-muted-foreground",
          ].join(" ")}
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
        style={{ height, transition: "height 200ms ease" }}
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

export default function Faq() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleToggle = (id: string) =>
    setValue((curr) => (curr === id ? undefined : id));

  return (
    <section id="faq" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 lg:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          FAQ
        </p>

        <h2 className="text-foreground mx-auto mb-4 max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center text-base font-normal sm:text-lg">
          Learn how Gotta GLOBA helps you master professional English, ace
          IELTS, and build the communication skills for a global career.
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
