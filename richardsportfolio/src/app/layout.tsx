import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
// import { Provider } from '@/components/ThemeProvider'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import { ThemeProvider } from "next-themes";

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
        {/* <ThemeProvider> */}
        <Navbar />
        <main className="min-h-screen px-4 sm: px-8 bg-white text-black dark: bg-zinc-950 dark: text-white transition-colors">{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
