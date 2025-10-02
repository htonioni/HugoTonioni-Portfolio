import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hugo Tonioni",
  description: "Welcome to my portfolio!",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Navbar />
          <main className="flex-1 p-6 bg-white dark:bg-zinc-950">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
