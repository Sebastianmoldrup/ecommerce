import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconCart, IconSale } from './Icons';

export function BestSeller() {
  const [products, setProducts] = useState([]);
  const randomProducts: [] = [];

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
      console.log(data.thumbnail);
    }

    getProducts();
    console.log(products);
  }, []);

  return <div>{products.map((product) => {})}</div>;
}
