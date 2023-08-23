'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconSearch } from './Icons';

export function Category() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState();

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
    <div className='text-center mt-10 space-y-4'>
      <h2 className='font-semibold'>Choose your category</h2>
      <div className='flex space-x-2 bg-main-100 rounded-xl'>
        <IconSearch />
        <input
          placeholder='Search'
          className='w-1/2 bg-transparent focus:outline-none'
          onInput={(e) => setQuery(e.target.input)}
        />
      </div>
    </div>
  );
}
