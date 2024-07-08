import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Head from "next/head";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Vuda AI",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <Head>
          <title>Vuda AI - AI Image Manipulation</title>
          <meta property="og:title" content="Vuda AI - AI Image Manipulation" />
          <meta property="og:description" content="Transform, remove backgrounds, apply generative refill, and recolor objects in your images with AI." />
          <meta property="og:image" content="https://vuda-ai.vercel.app/assets/images/og-image.png" />
          <meta property="og:url" content="https://vuda-ai.vercel.app" />
          <meta property="og:type" content="website" />
        </Head>
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
