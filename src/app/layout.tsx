import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, BackToTop, ThemeProvider } from "@/components";

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
    <html lang="en" className="">
      <body className={`${montserrat.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen`}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <div className="flex-1 flex flex-col ml-0 md:ml-0 pt-16 md:pt-6 bg-white dark:bg-gray-900">
              <main className="flex-1 p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-900">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
