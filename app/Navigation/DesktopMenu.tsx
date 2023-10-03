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
} from '../components/Icons';

export function DesktopMenu() {
  const style =
    'flex items-center justify-center gap-1 border-b-2 pb-1 border-transparent hover:cursor-pointer hover:-translate-y-0.5 p-2 rounded-xl text-md';

  return (
    <div className='mx-auto hidden flex-wrap justify-evenly gap-10 py-4 text-lg lg:flex'>
      {/* Shop btn */}
      <a className={style} href='/shop'>
        <IconShop /> Shop
      </a>

      {/* Category btn */}
      <a className={style} href='/category'>
        <IconCategory /> Category
      </a>
    </div>
  );
}
