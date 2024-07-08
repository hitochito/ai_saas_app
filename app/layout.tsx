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
  title: 'Vuda AI - AI Image Manipulation',
  description: 'Transform, enhance, and redefine your images with AI',
  openGraph: {
    title: 'Vuda AI - AI Image Manipulation',
    description: 'Transform, enhance, and redefine your images with AI',
    url: 'https://vuda-ai.vercel.app',
    siteName: 'Vuda AI',
    images: [
      {
        url: 'https://vuda-ai.vercel.app/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vuda AI - Transform, Enhance, Redefine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vuda AI - AI Image Manipulation',
    description: 'Transform, enhance, and redefine your images with AI',
    images: ['https://vuda-ai.vercel.app/assets/images/og-image.png'],
  },
}

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
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
