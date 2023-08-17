'use client';
import Image from 'next/image';
import { ProductCard } from './components/ProductCard';
import { Divider } from './components/Divider';

export default function Home() {
  return (
    <main className=''>
      <section className='grid'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 500'
          width='100%'
          height='100%'
          className='row-start-1 col-start-1'
        >
          <rect width='100%' height='100%' fill='#3498db' />

          <path
            fill='#ffffff'
            d='M0 300 Q250 400, 500 300 Q750 200, 1000 300 V500 H0 Z'
          />
        </svg>
        <ProductCard />
      </section>
    </main>
  );
}
