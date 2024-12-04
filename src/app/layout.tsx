import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Emerald Books - Empowering Education with Quality Publishing",
  description: "Discover educational resources that shape the future of learners in Cameroon and Central Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Emerald Books" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body className={outfit.className}>{children}</body>
    </html>
  );
}
