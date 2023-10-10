import Image from 'next/image';
import { IconBusiness } from './Icons';

export default function Hero() {
  return (
    <div className='mb-20 mt-10 flex w-full items-start justify-center gap-14 px-4 md:mt-20'>
      {/* Desktop image section */}
      <div className='group flex flex-col items-center justify-center gap-14 md:flex-row'>
        <div className='hidden max-h-[200px] max-w-[200px] grid-cols-1 grid-rows-1 place-items-center md:grid'>
          <Image
            alt='ecommerce'
            src='/walletclose.png'
            width={200}
            height={200}
            className='z-10 col-start-1 row-start-1 max-h-[150px] max-w-[150px] bg-transparent duration-200 group-hover:-rotate-3'
            objectFit='contain'
          />
          <Image
            alt='ecommerce'
            src='/card.png'
            width={200}
            height={200}
            className='col-start-1 row-start-1 max-h-[150px] max-w-[150px] bg-transparent delay-100 duration-200 ease-in-out group-hover:-translate-y-24 group-hover:-rotate-45'
            objectFit='contain'
          />
        </div>
        {/* Mobile svg */}
        <IconBusiness />
        {/* Text section */}
        <div className='grid grid-cols-1 grid-rows-1 place-items-center'>
          <div className='z-10 col-start-1 row-start-1 flex w-[300px] flex-col gap-y-4 text-justify md:w-[350px]'>
            Ecommerce is your dedicated destination for accessing the most
            exquisite range of products sourced from across the globe. Whether
            youre in search of state-of-the-art electronics, fashionable attire,
            or distinctive home decor, rest assured, we have your needs fully
            catered to. Check out our shop for more!
            <a
              href='/shop'
              className='bg-paragraph px-4 py-2 text-center text-background shadow-xl hover:bg-green-400 hover:text-paragraph'
            >
              Take me there!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
