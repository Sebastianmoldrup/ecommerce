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
  const [queryCategory, setQueryCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  // Fetching the products
  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      // Sending the data to a state
      setProducts(data.products);
      // Mapping over the products to find the categories
      const getCategories = data.products.map((prod: Product) => prod.category);
      // Removing duplicates of the categories
      const filterCategories = [...new Set(getCategories)];
      // Sending the categories to a state
      setCategories(filterCategories);
    }

    // Run the function to get products on page load
    getProducts();
  }, []);

  return (
    <div>
      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </div>
  );
}
