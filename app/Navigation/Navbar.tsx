import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';

import { IconHeart, IconSearch, IconCart } from '../components/Icons';

export function Navbar() {
  return (
    <nav className='grid grid-cols-2 items-center px-4 py-3 shadow-2xl md:px-5 lg:grid-cols-3'>
      {/* Title */}
      <h1 className='col-start-1 text-xl font-bold lg:text-2xl'>
        {/* <a href='/'>WedgeWood</a> */}
        <a className='flex items-center gap-1' href='/'>
          <div className='text-5xl font-bold'>E</div>
          <div className='text-base'>commerce</div>
        </a>
      </h1>

      {/* Desktop Menu */}
      <DesktopMenu />

      {/* Search, cart & favorites */}
      <div className='group col-start-3 hidden justify-center gap-2 place-self-end self-center px-2 py-2 md:w-[350px] lg:flex'>
        <div className='flex rounded-md bg-[#ebebeb] px-4 py-2'>
          <IconSearch />
          <input
            placeholder='Search'
            className='bg-transparent focus:outline-none'
          />
        </div>
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
