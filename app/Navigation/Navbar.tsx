import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import Search from '../Components/Search';

export async function Navbar() {
  const data = await fetch('https://dummyjson.com/products');

  if (data.status !== 200) return <p className='p-10'>error {data.status}</p>;

  const products: Product[] = (await data.json())?.products || [];

  return (
    <nav className='grid grid-cols-2 items-center px-4 py-3 shadow-2xl md:px-5 lg:grid-cols-3'>
      <div className='flex items-center justify-start'>
        {/* Title */}
        <h1 className='col-start-1 text-xl font-bold lg:text-2xl'>
          <a className='flex items-center gap-1' href='/'>
            eCommerce
          </a>
        </h1>

        {/* Desktop Menu */}
        <DesktopMenu />
      </div>

      {/* Search, cart & favorites */}
      <Search products={products} />

      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  );
}
