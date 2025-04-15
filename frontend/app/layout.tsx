import { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'
import { ThemeProvider } from '@/lib/theme';
import { iranSans } from '@/public/fonts/font';

export const metadata: Metadata = {
  title: 'انصارالقرآن | مرکز آموزش و تفسیر قرآن کریم',
  description: 'مرکز آموزش، تفسیر و مطالعات قرآنی انصارالقرآن',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-iranSans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="mx-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}