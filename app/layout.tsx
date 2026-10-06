import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nusrat Jahan Kaifa | Computer Science & Engineering Student Portfolio",
  description:
    "Portfolio of Nusrat Jahan Kaifa - Computer Science & Engineering student passionate about software development, web development, backend APIs, and building practical projects.",
  keywords: [
    "Nusrat Jahan Kaifa",
    "Computer Science and Engineering",
    "Portfolio",
    "Web Developer",
    "FastAPI",
    "Next.js",
    "React",
    "Python",
    "Gausul Azam Maizbhandari Polytechnic Institute",
  ],
  authors: [{ name: "Nusrat Jahan Kaifa" }],
  creator: "Nusrat Jahan Kaifa",
  metadataBase: new URL("https://nusratjahankaifa.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nusratjahankaifa.example.com",
    title: "Nusrat Jahan Kaifa | Computer Science & Engineering Student",
    description:
      "Passionate Computer Science & Engineering student focused on software development, web development, backend APIs, and practical engineering projects.",
    siteName: "Nusrat Jahan Kaifa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusrat Jahan Kaifa | Computer Science & Engineering Student",
    description:
      "Passionate Computer Science & Engineering student focused on software development, web development, and practical projects.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
