import "@/styles/globals.css";

import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gottagloba.com'),
  title: {
    default: "Gotta GLOBA - Global-scale Career",
    template: "%s | Gotta GLOBA",
  },
  description:
    "A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Template",
    "Shadcn/UI",
    "Web Development",
  ],
  authors: [{ name: "Gotta GLOBA Team" }],
  creator: "Gotta GLOBA Team",
  publisher: "Gotta GLOBA",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Gotta GLOBA - Global-scale Career",
    description:
      "A global-scale career is no longer a distant dream with Gotta GLOBA.",
    siteName: "Gotta GLOBA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gotta GLOBA - Global-scale Career",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gotta GLOBA - Global-scale Career",
    description:
      "A global-scale career is no longer a distant dream with Gotta GLOBA.",
    images: ["/og-image.jpg"],
    creator: "@gottaGLOBA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen ${inter.variable} flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Banner url="https://www.youtube.com/@GottaGLOBA?sub_confirmation=1" /> */}
          <Navbar />
          <main className="flex grow flex-col">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
