import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Font configurations - Single font family (Roboto) for industrial minimalist aesthetic
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Full Circle Function & Fitness | Personal Training, Massage Therapy & Yoga in Allison Park, PA",
    template: "%s | Full Circle Function & Fitness",
  },
  description:
    "Top-rated personal training, massage therapy, and private yoga in Allison Park & Pittsburgh's North Hills. 4.9 stars on Google with 75+ reviews. Get strong. Move well. Live better. Call 412-295-7058.",
  keywords: [
    "personal trainer Allison Park",
    "personal trainer Pittsburgh",
    "massage therapy Pittsburgh",
    "massage therapy North Hills",
    "private yoga Allison Park",
    "personal trainer near me",
    "massage therapy near me",
    "yoga classes Pittsburgh",
    "strength training Allison Park",
    "fitness North Hills PA",
    "personal trainer Shaler",
    "personal trainer Hampton PA",
    "massage therapist Allison Park PA",
  ],
  authors: [{ name: "Full Circle Function & Fitness" }],
  creator: "Full Circle Function & Fitness",
  publisher: "Full Circle Function & Fitness",
  metadataBase: new URL("https://www.fullcirclefunctionandfitness.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fullcirclefunctionandfitness.com",
    siteName: "Full Circle Function & Fitness",
    title:
      "Full Circle Function & Fitness | Personal Training, Massage Therapy & Yoga in Allison Park, PA",
    description:
      "Top-rated personal training, massage therapy, and private yoga in Allison Park & Pittsburgh's North Hills. 4.9 stars on Google with 75+ reviews. Get strong. Move well. Live better. Call 412-295-7058.",
    images: [
      {
        url: "https://www.fullcirclefunctionandfitness.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full Circle Function & Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Full Circle Function & Fitness | Personal Training, Massage Therapy & Yoga in Allison Park, PA",
    description:
      "Top-rated personal training, massage therapy, and private yoga in Allison Park & Pittsburgh's North Hills. 4.9 stars on Google with 75+ reviews. Get strong. Move well. Live better. Call 412-295-7058.",
    images: ["https://www.fullcirclefunctionandfitness.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Allison Park",
    "geo.position": "40.5794;-79.9531",
    ICBM: "40.5794, -79.9531",
  },
  verification: {
    // Add Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
