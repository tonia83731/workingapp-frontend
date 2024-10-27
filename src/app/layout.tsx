import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EFFINITI",
  description: "Merging 'efficiency' and 'infinity' for endless productivity.",
};

export type DefaultLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: DefaultLayoutProps) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
