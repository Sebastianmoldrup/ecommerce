'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { IconSearch, IconCart, IconSale, IconHeart } from '../components/Icons';

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

// Products per page
const pageSize = 10;

export default function Test({ products }: { products: Product[] }) {
  /* search query */
  const [search, setSearch] = useState('');
  /* page index */
  const [page, setPage] = useState(0);
  /* state for category filter */
  const [categoriesFilter, setCategoriesFilter] = useState<Set<string>>(
    new Set()
  );

  // Store all the individual categories in an array
  const categories = [...new Set(products.map((x) => x.category))];

  /*product filter */
  const productsFiltered = useMemo(() => {
    /* regex from search query */
    const searchRegExp = new RegExp(
      search.replace(/,\s*/g, '|').replace(/\s+/g, '.*'),
      'i'
    );

    // Reset pagination on filter reload
    setPage(0);

    return products.filter((product) => {
      // Store the categories in an array
      const filter = [...categoriesFilter];
      if (filter.length > 0) {
        // if filter is applied, product.category must match filter & search for title/description
        return (
          categoriesFilter.has(product.category) &&
          (searchRegExp.test(product.title) ||
            searchRegExp.test(product.description))
        );
      } else if (search === '') {
        // if search is empty then return all products
        return true;
      } else {
        // if filter is not applied, search for title/description/category
        return (
          searchRegExp.test(product.title) ||
          searchRegExp.test(product.description) ||
          searchRegExp.test(product.category)
        );
      }
    });
  }, [products, search, categoriesFilter]);

  return (
    <div>
      {/* Product search */}
      <div className='mt-4 flex w-full flex-col flex-wrap content-center items-center justify-center gap-y-4'>
        <div className='mx-4 flex h-[50px] w-[300px] items-center space-x-2 rounded-xl bg-gray-200 pl-2'>
          <IconSearch />
          <Search
            search={search}
            setSearch={setSearch}
            categories={categories}
          />
        </div>
        <ul className='flex flex-wrap justify-center gap-4'>
          <li className='bg-gray-200 px-4 py-2 text-black hover:cursor-pointer hover:bg-black hover:text-white'>
            <button
              className='focus:outline-none'
              onClick={() => {
                const x = new Set(categoriesFilter);
                x.clear();
                setCategoriesFilter(x);
              }}
            >
              All products
            </button>
          </li>
          {categories.map((category, index) => (
            <li
              className={
                'bg-gray-200 px-4 py-2 text-black hover:cursor-pointer hover:bg-black hover:text-white' +
                (categoriesFilter.size > 0 && categoriesFilter.has(category)
                  ? ' bg-green-300'
                  : '')
              }
              key={index}
            >
              <button
                className='capitalize focus:outline-none'
                onClick={() => {
                  setCategoriesFilter((x) => {
                    const setFilter = new Set(x);
                    if (x.has(category)) {
                      setFilter.delete(category);
                    } else {
                      setFilter.add(category);
                    }
                    return setFilter;
                  });
                }}
                type='button'
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <Nav
          page={page}
          setPage={setPage}
          productsFiltered={productsFiltered}
        />
      </div>
      {/* Product showcase */}
      <div className='container mx-auto my-10 px-5'>
        <ul className='-m-4 flex flex-wrap justify-center gap-6'>
          {productsFiltered.slice(page, page + pageSize).map((product) => {
            return (
              <li
                key={product.id}
                className='w-[312px] rounded-md bg-gray-200 p-4 shadow-xl hover:scale-110 hover:cursor-pointer'
              >
                <a className='relative block h-48 w-full overflow-hidden rounded'>
                  <Image
                    alt='ecommerce'
                    src={product.thumbnail}
                    width={300}
                    height={300}
                    className='h-full w-full object-contain'
                    layout=''
                    objectFit=''
                  />
                </a>
                <div className='mt-4'>
                  <h3 className='title-font mb-1 text-xs uppercase tracking-widest text-gray-500'>
                    {product.category}
                  </h3>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    {product.title}
                  </h2>
                  <p className='mt-1 text-black'>${product.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * Search input
 */
function Search({
  search,
  setSearch,
  categories,
}: {
  search: string;
  setSearch: (search: string) => void;
  categories: Array<string>;
}) {
  return (
    <input
      className='block h-full w-full rounded-md bg-transparent pr-2 text-gray-800 focus:outline-none'
      placeholder='Search ...'
      type='search'
      value={categories.includes(search) ? '' : search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}

/**
 * Pagination buttons
 */
function Nav({
  page,
  setPage,
  productsFiltered,
}: {
  page: number;
  setPage: (page: number) => void;
  productsFiltered: Product[];
}) {
  return (
    <div className='my-2 flex gap-x-24'>
      <button
        className='rounded-md bg-gray-200 p-1 text-gray-800 disabled:opacity-50'
        disabled={page === 0}
        onClick={() => {
          setPage(page - pageSize);
        }}
      >
        Previous
      </button>
      <button
        className='rounded-md bg-gray-200 p-1 text-gray-800 disabled:opacity-50'
        disabled={page + pageSize >= productsFiltered.length}
        onClick={() => {
          setPage(page + pageSize);
        }}
      >
        Next
      </button>
    </div>
  );
}
