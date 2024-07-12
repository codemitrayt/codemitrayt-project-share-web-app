import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Share Project",
  description:
    "This is share project web application to share your project whit others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable)}>{children}</body>
    </html>
  );
}
