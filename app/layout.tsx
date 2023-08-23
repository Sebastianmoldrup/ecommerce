import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WedgeWood',
  description: 'Ecommerce website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Banner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
