'use client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import data from '@/app/_data/sneakers.json';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Test() {

    const [search, setSearch] = useState({key: '', value: ''});
    const [select, setSelect] = useState({key: '', value: ''});
    const [products, setProducts] = useState([]);
    // console.log(select.key);

    // useEffect(() => {
    //     filteredProducts();
    // }, [select, search])

    // useEffect(() => {
    //     if (select.key === 'brand') {
    //         setProducts(data.sneakers.filter(sneaker => sneaker.brand_name === select.value));
    //     } else if (select.key === 'category') {
    //         setProducts(data.sneakers.filter(sneaker => sneaker.category[0] === select.value));
    //     } else if (select.key === 'color') {
    //         setProducts(data.sneakers.filter(sneaker => sneaker.color === select.value));
    //     } else if (select.key === 'search') {
    //         setProducts(data.sneakers.filter(sneaker => sneaker.includes(select.value.toLowerCase())));
    //     } else {
    //         setProducts(data.sneakers);
    //     }
    // }, [select]);

    const filteredSneakers = data.sneakers.filter((sneaker) => {
        switch (select.key) {
            case 'brand':
                return sneaker.brand_name === select.value;
            case 'color':
                return sneaker.color === select.value;
            case 'categories':
                return sneaker.category.includes(select.value);
            case 'search':
                // Here you would implement your logic for searching, for example using regex
                const regex = new RegExp(select.value, 'i'); // 'i' for case-insensitive search
                return Object.values(sneaker).some(value => regex.test(value));
            default:
                return false; // Handle any other cases if needed
        }
    });

    const brands = data.sneakers.reduce((acc, sneaker) => {
        if (!acc.includes(sneaker.brand_name)) {
            acc.push(sneaker.brand_name);
        }
        return acc;
    }, []);

    const categories = data.sneakers.reduce((acc, sneaker) => {
        if (!acc.includes(sneaker.category[0])) {
            acc.push(sneaker.category[0]);
        }
        return acc;
    }, []);

    const colors = data.sneakers.reduce((acc, sneaker) => {
        if (!acc.includes(sneaker.color)) {
            acc.push(sneaker.color);
        }
        return acc;
    }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/3 h-full bg-red-400 p-6 space-y-4">
        <Input type="text" placeholder="search.." onChange={(e) => setSelect({key: 'search', value: e.target.value})} />

        {/* Brand */}
        <div className="space-y-2">
            <h3 className="font-semibold">Brands</h3>
            <ul className="flex flex-wrap gap-2">
                {brands.map((brand, index) => {
                    return (
                    <li key={index}>
                        <Button onClick={() => setSelect({key: 'brand', value: brand})} className="hover:cursor-pointer hover:scale-110">{brand}</Button>
                    </li>
                    );
                })}
            </ul>
        </div>

        {/* Category */}
        <div className="space-y-2">
            <h3 className="font-semibold">Category</h3>
            <ul className="flex flex-wrap gap-2">
                {categories.map((category, index) => {
                    return (
                    <li key={index}>
                        <Button onClick={() => setSelect({key: 'category', value: category})} className="hover:cursor-pointer hover:scale-110">{category}</Button>
                    </li>
                    );
                })}
            </ul>
        </div>

        {/* Color */}
        <div className="space-y-2">
            <h3 className="font-semibold">Color</h3>
            <ul className="flex flex-wrap gap-2">
                {colors.map((color, index) => {
                    return (
                    <li key={index}>
                        <Button onClick={() => setSelect({key: 'color', value: color})} className="hover:cursor-pointer hover:scale-110">{color}</Button>
                    </li>
                    );
                })}
            </ul>
        </div>
      </div>
      <div className="w-2/3 h-full bg-blue-400 grid place-content-center">
        {}
        {/* {products.map((product, index) => {
            return (
                <div
              key={product.product_template_id}
              className='lg:w-1/4 md:w-1/2 p-4 w-full'
            >
              <a className='block relative h-48 rounded overflow-hidden'>
                <Image
                  alt='sneaker'
                  fill
                  className='object-cover object-center w-full h-full block rotate-12'
                  src={product.main_picture_url}
                />
              </a>
              <div className='mt-4'>
                <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                  {product.category[0]}
                </h3>
                <h2 className='text-gray-900 title-font text-lg font-medium'>
                  {product.name}
                </h2>
                <div className='flex items-center justify-between'>
                  <p className='mt-1'>
                    ${(product.retail_price_cents ?? 0) / 100}
                  </p>
                  <button>Buy</button>
                </div>
              </div>
            </div>
            )
        })} */}
      </div>
    </div>
  );
}