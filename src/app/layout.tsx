import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "技術ブログ - プログラミングや技術についての記事",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider>
          <header className="border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
              <Link
                href="/"
                className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Tech Blog
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
          <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} Tech Blog. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
