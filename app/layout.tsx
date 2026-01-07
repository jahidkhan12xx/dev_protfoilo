import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Importing Outfit for headings
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Zahid Hassan Khan - Full Stack Developer",
  description: "Portfolio of Zahid Hassan Khan, a Full Stack Developer specializing in Modern Web Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable
        )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
