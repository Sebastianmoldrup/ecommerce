'use client';
import { IconHeart, IconSearch, IconCart } from '../components/Icons';
import { useState, useEffect, useMemo } from 'react';
import Dropdown from './Dropdown';

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

export default function Search({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  console.log('show:', show);
  console.log('search:', search);

  const productList = useMemo(() => {
    /* regex from search query */
    const searchRegExp = new RegExp(
      search.replace(/,\s*/g, '|').replace(/\s+/g, '.*'),
      'i'
    );

    return products.filter((product) => {
      return (
        searchRegExp.test(product.title) ||
        searchRegExp.test(product.description) ||
        searchRegExp.test(product.category)
      );
    });
  }, [products, search]);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className='group col-start-3 hidden justify-center gap-2 place-self-end self-center px-2 py-2 md:w-[350px] lg:flex'>
      <div className='flex gap-2 rounded-md bg-[#ebebeb] px-4 py-2'>
        <IconSearch />
        <input
          placeholder='Search'
          value={search}
          className='bg-transparent focus:outline-none'
          onInput={(e) => {
            setSearch(e.currentTarget.value);
            toggleShow();
          }}
        />

        <div
          className={`relative grid h-full ${show ? 'slidedown__parent' : ''}`}
        >
          <div
            className={`slidedown slidedown__nav absolute -right-14 top-full z-[999] mt-6 min-w-full ${
              show ? 'slidedown__show' : ''
            }`}
          >
            <ul className='m-0 min-w-max list-none overflow-y-hidden bg-neutral-100'>
              {productList.map((product) => (
                <li
                  key={product.id}
                  className='rounded-md px-4 py-2 odd:bg-background hover:cursor-pointer hover:bg-[#2e2e2e] hover:text-white'
                >
                  <a>{product.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <IconHeart />
        <IconCart />
      </div>
    </div>
  );
}
