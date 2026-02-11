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
    default: "Full Circle Function & Fitness | Pittsburgh Personal Training",
    template: "%s | Full Circle Function & Fitness",
  },
  description:
    "Performance-driven personal training and massage therapy in Pittsburgh. Transform your fitness with expert coaching and structured programming.",
  keywords: [
    "Pittsburgh personal trainer",
    "personal training Pittsburgh",
    "fitness coaching",
    "massage therapy",
    "strength training",
  ],
  authors: [{ name: "Full Circle Function & Fitness" }],
  creator: "Full Circle Function & Fitness",
  publisher: "Full Circle Function & Fitness",
  metadataBase: new URL("https://www.fullcirclefunctionandfitness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fullcirclefunctionandfitness.com",
    siteName: "Full Circle Function & Fitness",
    title: "Full Circle Function & Fitness | Pittsburgh Personal Training",
    description:
      "Performance-driven personal training and massage therapy in Pittsburgh.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full Circle Function & Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Circle Function & Fitness | Pittsburgh Personal Training",
    description:
      "Performance-driven personal training and massage therapy in Pittsburgh.",
    images: ["/images/og-image.jpg"],
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
