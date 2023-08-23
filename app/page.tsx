'use client';
import Image from 'next/image';
import { ProductOverview } from './components/ProductOverview';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='bg-main-100 shadow-xl w-[320px] h-[320px] flex justify-center items-center'>
        <h2 className='font-bold'>Welcome to WedgeWood</h2>
      </div>
    </main>
  );
}
