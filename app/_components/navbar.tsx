'use client';
import { BurgerIcon } from './svg';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const pages = [
    {
      title: 'home',
      url: '/'
    },
    {
      title: 'shop',
      url: '/shop'
    },
    {
      title: 'about',
      url: '/about'
    },
    {
      title: 'contact',
      url: '/contact'
    }
  ]

  return (
    <nav className='flex justify-between p-4 items-center'>
      <h1 className='text-3xl font-semibold z-20'><a href="/">Ecommerce</a></h1>
      <ul className='sm:flex gap-x-4 text-xl font-semibold hidden'>
        {pages.map((page, index) => (
          <li className='hover:cursor-pointer hover:scale-110' key={index}>
            <a href={page.url}>{page.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden z-20" onClick={() => setOpen(!open)}>
        <BurgerIcon />
      </div>
      {open ? 
      <div className="absolute top-0 left-0 bg-white w-full h-full grid place-content-center overflow-y-hidden z-10">
        <ul className='space-y-4 text-xl font-semibold'>
          {pages.map((page, index) => (
            <li className='hover:cursor-pointer hover:scale-110 uppercase' key={index}>
              <a href={page.url}>{page.title}</a>
            </li>
          ))}
        </ul>
      </div> 
      : null}
    </nav>
  );
}
