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
    'flex items-center justify-center gap-1 border-b-2 pb-1 border-transparent hover:cursor-pointer hover:-translate-y-0.5 p-2 rounded-xl';

  return (
    <div className='col-start-2 hidden min-w-[300px] flex-wrap items-center justify-evenly gap-10 py-4 pl-2 text-base font-semibold capitalize lg:flex'>
      <div className='text-2xl font-thin'>|</div>

      {/* Shop btn */}
      <a className={style} href='/shop'>
        <IconShop /> Shop
      </a>

      {/* Category btn */}
      <a className={style} href='/'>
        <IconContact /> Contact
      </a>
    </div>
  );
}
