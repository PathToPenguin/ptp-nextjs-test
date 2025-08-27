import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Path to Penguin - Dein Weg von Windows zu Linux",
  description:
    "Path to Penguin - Dein Weg von Windows zu Linux. Lerne Schritt für Schritt die Welt von Linux kennen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} bg-gray-900 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
