'use client';
import Image from 'next/image';
import { ProductCard } from './components/ProductCard';
import { Divider } from './components/Divider';

export default function Home() {
  return (
    <main className=''>
      <section className=''>
        <ProductCard />
      </section>
    </main>
  );
}
