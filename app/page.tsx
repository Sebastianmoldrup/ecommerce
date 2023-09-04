'use client';
import Image from 'next/image';
import { ProductOverview } from './components/ProductOverview';

export default function Home() {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <div className='flex h-[320px] w-[320px] items-center justify-center rounded-md bg-main-100 shadow-2xl'>
        <h2 className='font-bold'>Welcome to WedgeWood</h2>
      </div>
    </main>
  );
}
