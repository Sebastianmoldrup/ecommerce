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
          className='block hover:text-gray-600 focus:outline-none text-main-100'
        >
          <IconBurger />
        </button>
      </div>

      {/* Full-screen Overlay Menu */}
      {menuOpen && (
        <div className='xl:hidden fixed top-0 bottom-0 right-0 w-full md:w-64 bg-gray-800 bg-opacity-50 z-50'>
          <div className='p-4 bg-white w-full h-full flex flex-col justify-evenly items-center'>
            <div className='flex justify-center gap-2 py-2 px-2 rounded-xl bg-main-200 group'>
              <IconSearch />
              <input
                placeholder='Search'
                className='w-1/2 bg-transparent focus:outline-none'
              />
              <div className='flex gap-4 items-center'>
                <IconHeart />
                <IconCart />
              </div>
            </div>
            {/* Menu links */}
            <ul className='space-y-6'>
              <li>
                <a
                  href='#'
                  className='text-gray-800 hover:text-gray-600 flex items-center gap-2'
                >
                  <IconShop /> Shop
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-800 hover:text-gray-600 flex items-center gap-2'
                >
                  <IconCategory /> Category
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-800 hover:text-gray-600 flex items-center gap-2'
                >
                  <IconSale /> Flash sale
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-800 hover:text-gray-600 flex items-center gap-2'
                >
                  <IconAbout /> About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-800 hover:text-gray-600 flex items-center gap-2'
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
