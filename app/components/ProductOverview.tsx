import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconCart, IconSale } from './Icons';

export function ProductOverview() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
      console.log(data.thumbnail);
    }

    getProducts();
    console.log(products);
  }, []);

  return (
    <ul className='col-start-1 row-start-1 mx-auto my-10 flex flex-wrap justify-center gap-10'>
      {products.map(
        (product: {
          id: number;
          title: string;
          price: number;
          description: string;
          category: string;
          images: string[];
          thumbnail: string;
          brand: string;
          rating: number;
          stock: number;
          discountPercentage: number;
        }) => {
          console.log(product);
          return (
            <li
              key={product.id}
              className='group relative flex h-[180px] w-[200px] flex-col flex-wrap items-center justify-between rounded-lg bg-white text-black shadow-xl hover:bg-white/75'
            >
              <div className='flex w-full items-center justify-start px-4 pt-4'>
                <span className='text-md line-clamp-1 text-center font-semibold'>
                  {product.title}
                </span>
              </div>
              <div className='relative h-[80px] w-[80px]'>
                <Image
                  src={product.thumbnail}
                  alt=''
                  layout='fill'
                  className='rounded-md object-contain group-hover:brightness-75'
                />
              </div>
              <div className='flex w-full items-center justify-between px-4 pb-2'>
                <span>{product.price + '$'}</span>
                <span>
                  <IconCart />{' '}
                </span>
              </div>
              <a className='hover-button absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-md bg-green-400 px-4 py-2 text-white hover:border-2 hover:border-green-400 hover:bg-white hover:text-black group-hover:block'>
                Buy
              </a>
            </li>
          );
        }
      )}
    </ul>
  );
}
