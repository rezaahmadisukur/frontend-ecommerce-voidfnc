import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "~/components/ui/sonner";
import Navbar from "~/components/layout/Navbar";
import Providers from "./providers";

const inter = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ecommerce Void Frontend",
  description: "Ecommerce Void Frontend"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body
          className={`${inter.variable} antialiased font-sans pb-20`}
          suppressHydrationWarning
        >
          <Navbar />
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
