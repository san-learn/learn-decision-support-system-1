import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Simple Additive Weighting",
    template: "%s | Simple Additive Weighting",
  },
  description:
    "Website Sistem Penunjang Keputusan dengan menggunakan metode Simple Additive Weighting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
