'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconSearch, IconCart, IconSale } from './Icons';

export function Category() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
      const getCategories = data.products.map((prod) => prod.category);
      const filterCategories = [...new Set(getCategories)];
      setCategories(filterCategories);
    }

    getProducts();
  }, []);

  return (
    <div className='flex flex-col md:flex-row justify-between  w-full h-full'>
      {/* Navigation */}
      <div className='flex flex-col justify-center gap-10 bg-main-50 py-4 px-2 md:w-2/5 lg:1/5'>
        {/* Search */}
        <div className='flex flex-col gap-4 text-center'>
          <h2 className='font-semibold text-xl'>Search for products</h2>
          <div className='flex items-center space-x-2 bg-main-400 rounded-xl pl-2 mx-4'>
            <IconSearch />
            <input
              placeholder='Search'
              className='bg-transparent focus:outline-none py-2 w-[150px]'
              onInput={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className='text-center space-y-4'>
          <h2 className='font-semibold text-xl'>Choose your category</h2>
          <ul className='flex flex-col flex-wrap justify-center items-center gap-4'>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className='py-2 w-[200px] text-md text-black/75 bg-main-400 rounded-md capitalize font-semibold hover:bg-main-900 hover:text-main-100 hover:cursor-pointer'
                  onClick={(e) => {
                    setQuery(category);
                  }}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Product showcase */}
      <div className='flex justify-center items-center md:w-3/5 lg:4/5'>
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
              if (product.category !== query) return;
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
      </div>
    </div>
  );
}
