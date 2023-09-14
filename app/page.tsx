'use client';
import Image from 'next/image';
import { ProductOverview } from './components/ProductOverview';
import { IconBrand } from './components/Icons';

export default function Home() {
  return (
    <main className='m-0 flex h-screen w-full p-0'>
      <Image
        src='/flat-mountains.png'
        alt='Colored illustration of mountain tops'
        width={1600} // Specify the image's original width
        height={900} // Specify the image's original height
        layout='responsive'
        quality={100}
        className='max-h-[650px] w-full object-cover'
      />

      <IconBrand />
    </main>
  );
}
