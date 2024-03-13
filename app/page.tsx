import Image from 'next/image';
import Shop from './shop/page';
import CarouselShowcase from './_components/carousel';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <CarouselShowcase />
    </main>
  );
}
