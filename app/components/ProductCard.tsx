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
    <ul className='flex flex-wrap gap-10 my-10 mx-auto'>
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
              className='flex flex-col items-center justify-between w-[200px] h-[150px]'
            >
              <div className='relative w-[100px] h-[100px]'>
                <Image src={product.thumbnail} alt='' layout='fill' />
              </div>
              <div className='flex flex-wrap justify-between w-full'>
                <h3 className=''>{product.title}</h3>
                <div className=''>{product.category}</div>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
}
