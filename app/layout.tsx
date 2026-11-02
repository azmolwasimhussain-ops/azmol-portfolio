import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azmol Wasim Hussain — Frontend Developer & Applied AI",
  description:
    "Azmol Wasim Hussain is a Computer Science and Engineering student building thoughtful web experiences with React, TypeScript, Next.js, and applied AI.",
  applicationName: "Azmol Wasim Hussain — Portfolio",
  openGraph: {
    title: "Azmol Wasim Hussain — Frontend Developer & Applied AI",
    description:
      "Thoughtful interfaces, useful AI, and the projects behind them.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azmol Wasim Hussain — Frontend Developer & Applied AI",
    description:
      "Thoughtful interfaces, useful AI, and the projects behind them.",
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
