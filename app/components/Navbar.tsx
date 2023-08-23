import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

import { IconHeart, IconSearch, IconCart } from './Icons';

export function Navbar() {
  return (
    <nav className='flex items-center justify-between md:px-5 px-4 py-3 bg-main-950 w-full'>
      {/* Title */}
      <h1 className='text-xl lg:text-2xl text-white font-bold'>
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
      <div className='lg:flex justify-center gap-2 md:w-[200px] py-2 px-2 rounded-xl bg-main-100 group hidden'>
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

      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  );
}
