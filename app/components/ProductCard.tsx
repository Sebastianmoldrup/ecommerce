import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconCart, IconSale } from './Icons';

export function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
    }

    getProducts();
    console.log(products);
  }, []);

  return (
    <ul className='flex flex-wrap justify-center gap-10 my-10 mx-auto row-start-1 col-start-1'>
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
              className='flex flex-col flex-wrap relative items-center justify-between group w-[200px] h-[180px] shadow-xl text-black bg-white rounded-lg group-hover:brightness-75'
            >
              <div className='flex items-center justify-start w-full pt-4 px-4'>
                <span className='line-clamp-1 text-center font-bold text-lg'>
                  {product.title}
                </span>
              </div>
              <div className='relative w-[80px] h-[80px]'>
                <Image
                  src={product.thumbnail}
                  alt=''
                  layout='fill'
                  className='rounded-md object-contain'
                />
              </div>
              <div className='flex justify-between px-4 pb-2 w-full items-center'>
                <span>{product.price + '$'}</span>
                <span>
                  <IconCart />{' '}
                </span>
              </div>
              <a className='hover-button absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 brightness-100 text-white px-4 py-2 rounded-md hidden group-hover:block'>
                Buy
              </a>
            </li>
          );
        }
      )}
    </ul>
  );
}
