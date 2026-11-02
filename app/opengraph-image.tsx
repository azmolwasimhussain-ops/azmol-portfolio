import { ImageResponse } from "next/og";
import { ShareCard } from "@/components/share-card";

export const alt = "Azmol Wasim Hussain — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<ShareCard />, { ...size });
}
