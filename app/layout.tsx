import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = configuredSiteUrl
  ? new URL(configuredSiteUrl)
  : vercelHost
    ? new URL(`https://${vercelHost.replace(/^https?:\/\//, "")}`)
    : undefined;

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: "Azmol Wasim Hussain — Frontend Developer",
    template: "%s | Azmol Wasim Hussain",
  },
  description:
    "Azmol Wasim Hussain is a frontend developer and Computer Science student building modern web experiences with React, Next.js, and TypeScript, with an additional interest in applied AI.",
  applicationName: "Azmol Wasim Hussain — Portfolio",
  openGraph: {
    title: "Azmol Wasim Hussain — Frontend Developer",
    description:
      "Modern web engineering with React, Next.js, and TypeScript, plus an interest in applied AI.",
    siteName: "Azmol Wasim Hussain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azmol Wasim Hussain — Frontend Developer",
    description:
      "Modern web engineering with React, Next.js, and TypeScript, plus an interest in applied AI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111210",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
