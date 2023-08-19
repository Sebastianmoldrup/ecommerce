import {
  IconAbout,
  IconCart,
  IconCategory,
  IconContact,
  IconSale,
} from './Icons';

import { TypeWriter } from './Typerwriter';

export function Navbar() {
  const btn =
    'flex items-center justify-center gap-1 hover:text-green-400 hover:cursor-pointer hover:-translate-y-0.5';
  return (
    <nav className='flex items-center justify-between px-10 bg-slate-600 w-full'>
      <h1 class='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>
        Hello World
      </h1>

      <div className='flex flex-wrap py-4 gap-10 justify-evenly mx-auto text-lg'>
        {/* Shop btn */}
        <div className={btn}>
          <IconCart /> Shop
        </div>

        {/* Category btn */}
        <div className={btn}>
          <IconCategory /> Category
        </div>

        {/* Sale btn */}
        <div className={btn}>
          <IconSale /> Sale
        </div>

        {/* About btn */}
        <div className={btn}>
          <IconAbout /> About
        </div>

        {/* Contact btn */}
        <div className={btn}>
          <IconContact /> Contact
        </div>
      </div>

      <div>
        <div>Søk </div>
      </div>
    </nav>
  );
}
