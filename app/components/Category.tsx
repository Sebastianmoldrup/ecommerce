'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconSearch, IconCart, IconSale } from './Icons';

export function Category() {
  const [products, setProducts] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const [queryCategory, setQueryCategory] = useState('');
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
    <div className='flex h-full w-full flex-col  justify-between md:flex-row'>
      {/* Navigation */}
      <div className='flex flex-col justify-center gap-10 px-2 py-4 md:w-2/5 lg:w-1/5'>
        {/* Search */}
        <div className='flex flex-col gap-4 text-center'>
          <h2 className='text-xl font-semibold'>Search for products</h2>
          <div className='mx-4 flex items-center space-x-2 rounded-xl pl-2'>
            <IconSearch />
            <input
              placeholder='Search'
              className='w-[150px] bg-transparent py-2 lowercase focus:outline-none'
              onInput={(e) => setQuerySearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className='space-y-4 text-center'>
          <h2 className='text-xl font-semibold'>Choose your category</h2>
          <ul className='flex flex-col flex-wrap items-center justify-center gap-4'>
            <li
              className='text-md w-[200px] rounded-md py-2 font-semibold capitalize text-black/75 hover:cursor-pointer'
              onClick={() => {
                setQueryCategory('');
              }}
            >
              All products
            </li>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className='text-md w-[200px] rounded-md py-2 font-semibold capitalize text-black/75 hover:cursor-pointer'
                  onClick={(e) => {
                    setQueryCategory(category);
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
      <div className='flex flex-col items-center justify-center text-center md:w-3/5 lg:w-4/5'>
        {queryCategory ? (
          <h2 className='w-full rounded-md bg-white py-4 text-3xl capitalize md:w-[300px]'>
            {queryCategory}
          </h2>
        ) : null}
        <ul className='mx-auto my-10 flex h-full flex-wrap items-center justify-center gap-10 py-4'>
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
              const regSearch = new RegExp(
                querySearch.replace(/\s+/g, '.*'),
                'i'
              );
              const regInput = new RegExp(
                queryCategory.replace(/\s+/g, '.*'),
                'i'
              );
              if (
                !regInput.test(product.category) ||
                !regSearch.test(product.title)
              ) {
                return;
              }

              return (
                <li
                  key={product.id}
                  className='group relative flex h-[180px] w-[200px] flex-col flex-wrap items-center justify-between rounded-lg bg-white shadow-xl hover:bg-white/75'
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
