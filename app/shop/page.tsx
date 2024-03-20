import Image from 'next/image';
import data from '@/app/_data/sneakers.json';

export default function Shop() {
  data.sneakers.map((sneaker) => console.log(sneaker.name));

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {data.sneakers.map((sneaker) => (
            <div
              key={sneaker.product_template_id}
              className='lg:w-1/4 md:w-1/2 p-4 w-full'
            >
              <a className='block relative h-48 rounded overflow-hidden'>
                <Image
                  alt='sneaker'
                  fill
                  className='object-cover object-center w-full h-full block'
                  src={sneaker.main_picture_url}
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
                  <button>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
