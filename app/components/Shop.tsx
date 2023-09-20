'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconSearch, IconCart, IconSale, IconHeart } from './Icons';

interface Product {
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
}

export function Shop() {
  // State management
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);

  // Fetching the products
  useEffect(() => {
    async function getProducts() {
      // Fetching data and storing in state
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);

      // Storing titles in a state
      // const getTitles = data.products.reduce((x, y) => {
      //   if (!x.includes(y.title)) {
      //     x.push(y.title);
      //   }
      //   return x;
      // }, []);
      const getTitles = [...new Set(data.products.map((x) => x.title))];
      console.log(getTitles);
      setTitles(getTitles);

      // Storing categories in a state
      const getCategories = data.products.reduce((x, y) => {
        if (!x.includes(y.category)) {
          x.push(y.category);
        }
        return x;
      }, []);
      setCategories(getCategories);
    }

    // Run the function to get products on page load
    getProducts();
  }, []);

  console.log(titles);

  function queryHandler(value) {
    if (categories.includes(value)) {
      const productsFilter = products.filter((x) => {
        return x.category === value;
      });
      setQuery(productsFilter);
    } else if (titles.includes(value)) {
      const productsFilter = titles.filter((x) => {
        return x.titles === value;
      });
      setQuery(productsFilter);
    }
  }

  function updateProducts() {
    categories.includes(query);
  }

  return (
    <div>
      {/* Product search */}
      <div className='mt-4 flex w-full flex-col flex-wrap items-center justify-center gap-y-4'>
        <div className='mx-4 flex items-center space-x-2 rounded-xl bg-gray-200 pl-2'>
          <IconSearch />
          <input
            placeholder='Search'
            className='w-[200px] bg-transparent py-2 lowercase focus:outline-none'
            onInput={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className='flex flex-wrap gap-4'>
          {categories.map((x) => {
            return (
              <li
                key={x}
                className='bg-gray-200 px-4 py-2 hover:cursor-pointer hover:bg-black hover:text-white'
                onClick={() => queryHandler(x)}
              >
                <a className='capitalize'>{x}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Product showcase */}
      <div className='container mx-auto px-5 py-24'>
        <ul className='-m-4 flex flex-wrap justify-center gap-6'>
          {products.map((x) => {
            return (
              <li
                key={x.id}
                className='w-[312px] rounded-md bg-gray-200 p-4 shadow-xl hover:scale-110'
              >
                <a className='relative block h-48 w-full overflow-hidden rounded'>
                  <Image
                    alt='ecommerce'
                    src={x.thumbnail}
                    width={300}
                    height={300}
                    className='h-full w-full object-contain'
                    layout=''
                    objectFit=''
                  />
                </a>
                <div className='mt-4'>
                  <h3 className='title-font mb-1 text-xs uppercase tracking-widest text-gray-500'>
                    {x.category}
                  </h3>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    {x.title}
                  </h2>
                  <p className='mt-1'>${x.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
