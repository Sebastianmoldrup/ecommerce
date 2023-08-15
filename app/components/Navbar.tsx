import {
  IconAbout,
  IconCart,
  IconCategory,
  IconContact,
  IconSale,
} from './Icons';

export function Navbar() {
  const btn =
    'flex items-center justify-center gap-1 hover:text-green-400 hover:cursor-pointer hover:-translate-y-0.5';
  return (
    <nav className='flex flex-wrap py-4 w-[600px] justify-evenly mx-auto text-lg'>
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
    </nav>
  );
}
