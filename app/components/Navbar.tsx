import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

import { IconHeart, IconSearch, IconCart } from './Icons';

export function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-4 py-3 md:px-5'>
      {/* Title */}
      <h1 className='text-xl font-bold lg:text-2xl'>
        {/* <a href='/'>WedgeWood</a> */}
        <a className='flex items-center gap-1' href='/'>
          <div className='text-5xl font-bold'>W</div>
          <div className='flex flex-col text-base'>
            <div className='h-[15px]'>edge</div>
            <div>ood</div>
          </div>
        </a>
      </h1>

      {/* Desktop Menu */}
      <DesktopMenu />

      {/* Search, cart & favorites */}
      <div className='group hidden justify-center gap-2 rounded-xl px-2 py-2 md:w-[200px] lg:flex'>
        <IconSearch />
        <input
          placeholder='Search'
          className='w-1/2 bg-transparent focus:outline-none'
        />
        <div className='flex items-center gap-4'>
          <IconHeart />
          <IconCart />
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  );
}
