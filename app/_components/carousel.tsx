'use client';
import Image from 'next/image';
import data from '@/app/_data/sneakers.json';

import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function CarouselShowcase() {
  // Map/filter/other fn to display all brand names
  // Make a a list of all the brand names
  // Make a state which can be updated based on the selected brand
  // Fix carousel to display only the selected brand

  const [selectedBrand, setSelectedBrand] = useState('Nike');

  return (
    <div className='flex flex-col items-center space-y-8'>
      <div className='text-center space-y-4'>
        <h2 className='text-3xl font-semibold'>Select your brand</h2>
        <ul className='flex space-x-4'>
          {data.sneakers
            .reduce((acc, sneaker) => {
              if (!acc.includes(sneaker.brand_name)) {
                acc.push(sneaker.brand_name);
              }
              return acc;
            }, [])
            .map((brand) => (
              <li key={brand}>
                <Button>{brand}</Button>
              </li>
            ))}
        </ul>
      </div>

      <Carousel className='w-full max-w-sm'>
        <CarouselContent className='-ml-1'>
          {data.sneakers.map((sneaker, index) => (
            <CarouselItem
              key={index}
              className='pl-1 md:basis-1/2 lg:basis-1/3 w-[200px]'
            >
              <div className='p-1'>
                <Card>
                  <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
                    <Image
                      alt='sneaker'
                      width={125}
                      height={125}
                      className='object-cover object-center w-full h-full block'
                      src={sneaker.grid_picture_url}
                    />
                    <span className='text-sm'>{sneaker.silhouette}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
