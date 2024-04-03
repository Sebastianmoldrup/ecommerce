import Image from 'next/image';
import data from '@/app/_data/sneakers.json';
import Link from 'next/link';

export default function Shop() {
  // data.sneakers.map((sneaker) => console.log(sneaker.name));

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap h-[300px]'>
          {data.sneakers.map((sneaker, index) => (
            <div
              key={sneaker.product_template_id}
              className='lg:w-1/4 md:w-1/2 p-4 w-full'
            >
              <a className='block relative h-48 rounded overflow-hidden'>
              <Image
                  alt='sneaker'
                  width={250}
                  height={250}
                  className='object-cover object-center w-full h-full block rotate-12'
                  src={sneaker.main_picture_url}
                  style={{objectFit: "contain"}}
                />
              </a>
              <div className='mt-4'>
                <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                  {sneaker.category[0]}
                </h3>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {sneaker.name}
                </h2>
                <div className='flex items-center justify-between'>
                  <p className='mt-1'>
                    ${(sneaker.retail_price_cents ?? 0) / 100}
                  </p>
                  <Link href={`/shop/${sneaker.slug}`} className="py-2 px-4 bg-accent-foreground text-white hover:bg-accent hover:text-accent-foreground hover:cursor-pointer">Buy</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
