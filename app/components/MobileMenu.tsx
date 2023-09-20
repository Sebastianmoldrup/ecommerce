'use client';
import { useState } from 'react';
import {
  IconAbout,
  IconCart,
  IconCategory,
  IconContact,
  IconSale,
  IconSearch,
  IconShop,
  IconHeart,
  IconBurger,
} from './Icons';

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='lg:hidden'>
      {/* Hamburger Icon */}
      <div>
        <button
          onClick={toggleMenu}
          className='block hover:text-gray-600 focus:outline-none'
        >
          <IconBurger />
        </button>
      </div>

      {/* Full-screen Overlay Menu */}
      {menuOpen && (
        <div className='fixed bottom-0 right-0 top-0 z-50 w-full bg-gray-800 bg-opacity-50 md:w-64 xl:hidden'>
          <div className='flex h-full w-full flex-col items-center justify-between bg-white p-4'>
            {/* Search & burger menu */}
            <div className='flex w-full justify-between'>
              <div className='group flex justify-center gap-2 rounded-xl px-2 py-2'>
                <IconSearch />
                <input
                  placeholder='Search'
                  className='w-[150px] bg-transparent focus:outline-none md:w-[120px]'
                />
              </div>

              <button
                onClick={toggleMenu}
                className='block hover:text-gray-600 focus:outline-none'
              >
                <IconBurger />
              </button>
            </div>

            {/* Menu links */}
            <ul className='space-y-6'>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconShop /> Shop
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconCart /> Cart
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconCategory /> Category
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconSale /> Flash sale
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconHeart /> Favorite
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 text-gray-800 hover:text-gray-600'
                >
                  <IconContact /> Contact
                </a>
              </li>
            </ul>

            <div>
              <ul className='flex space-x-4'>
                <li>Help</li>
                <li className='border-x-2 border-black px-2'>Newsfeed</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
