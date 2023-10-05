import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from './Navigation/Navbar';
import { Banner } from './Components/Banner';
import News from './Components/News';

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
    <html lang='en' className='font-body'>
      <body className={inter.className + 'bg-[#fffffe]'}>
        <Banner />
        <Navbar />
        <News />
        {children}
      </body>
    </html>
  );
}
