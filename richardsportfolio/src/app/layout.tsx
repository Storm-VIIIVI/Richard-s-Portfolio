import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({subsets: ['latin']})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Wang (Hello!)",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zing-950 text-white`}>
        <Navbar />
        <main className="min-h-screen sm:">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
