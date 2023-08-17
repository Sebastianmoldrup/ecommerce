import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <ul className='flex flex-wrap gap-10 my-10 mx-auto row-start-1 col-start-1'>
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
              className='flex flex-col items-center justify-between w-[200px] h-[150px] shadow-xl'
            >
              <div className='flex justify-between w-full'>
                <div>{product.price}</div>
                <div className='relative w-[50px] h-[50px]'>
                  <Image src={product.thumbnail} alt='' layout='fill' />
                </div>
              </div>
              <div className='flex flex-wrap justify-between w-full'>
                <span>{product.title}</span>
                <span>{product.category}</span>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}
