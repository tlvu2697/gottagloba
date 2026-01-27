"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DEFAULT_CONTACT_EMAIL } from "@/constants";
import { strapiUrl } from "@/lib/utils";
import type { Metadata } from "@/types/metadata";
import type { StrapiResponse } from "@/types/strapi-response";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import qs from "qs";
import { useState } from "react";

const USE_MAIL_APP = true;

const generateMailUrl = ({
  contactEmail,
  subject,
  message,
}: {
  contactEmail: string;
  subject: string;
  message: string;
}): string => {
  const mailContent = qs.stringify({
    subject: subject,
    body: message,
  });

  return `mailto:${contactEmail}?${mailContent}`;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { data: metadata } = useQuery<Metadata>({
    queryKey: ["metadata"],
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: async () => {
      const res = await fetch(strapiUrl("/api/metadata?populate=*")!);
      const json_req = (await res.json()) as StrapiResponse<Metadata>;

      return json_req.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = generateMailUrl({
      contactEmail: metadata?.contactEmail ?? DEFAULT_CONTACT_EMAIL,
      subject: formData.subject,
      message: formData.message,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <section id="contact" className="bg-background relative px-6 lg:px-0">
      <div className="bg-features-hero pointer-events-none absolute inset-x-0 top-0 z-0 container h-[600px]" />

      <div className="relative z-10 container px-0">
        <div className="pt-20 text-center sm:pt-24 md:pt-28">
          <h2 className="text-foreground text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm sm:text-base">
            Join us as we explore tailored solutions, discuss industry insights,
            and collaborate to find the best strategies for your success.
          </p>
        </div>

        <div className="relative z-10 mt-10 sm:mt-12 md:mt-16">
          <div className="bg-card border-border-light shadow-light mx-auto max-w-3xl rounded-xl border p-6 sm:p-8 md:p-10">
            <h3 className="text-foreground mb-6 text-center text-2xl font-medium">
              Speak to us
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {!USE_MAIL_APP && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    Full name
                  </label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-11 rounded-lg"
                    required
                  />
                </div>
              )}

              {!USE_MAIL_APP && (
                <div>
                  <label
                    htmlFor="email"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@mail.com"
                    className="h-11 rounded-lg"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="subject"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Create a subject..."
                  className="h-11 rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  className="min-h-[150px] resize-y rounded-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-foreground text-primary-foreground hover:bg-foreground/90 mt-2 h-12 w-full rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="h-10 sm:h-12 md:h-14" />
      </div>
    </section>
  );
}
