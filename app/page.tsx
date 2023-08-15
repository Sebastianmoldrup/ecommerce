'use client';
import Image from 'next/image';
import { ProductCard } from './components/ProductCard';
import { Divider } from './components/Divider';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Divider />
      <ProductCard />
    </main>
  );
}
