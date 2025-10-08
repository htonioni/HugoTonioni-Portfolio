import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, BackToTop, ThemeProvider, ConditionalFooter } from "@/components";

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
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  const resolved = theme === 'system' 
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : theme;
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(resolved);
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
            <Navbar />
            {/* Wrapper com padding que cria o efeito visual */}
            <div className="flex-1 lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-gray-800 overflow-y-auto min-w-0">
              {/* Container principal com borda e radius */}
              <div className="flex-1 bg-white dark:bg-gray-900 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-gray-200 dark:lg:border-gray-700 overflow-y-auto">
                <main className="flex-1 p-4 md:p-6 lg:p-8">
                  {children}
                </main>
                <ConditionalFooter />
              </div>
            </div>
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
