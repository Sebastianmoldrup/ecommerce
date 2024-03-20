export default function Navbar() {
  const pages = ['Home', 'Shop', 'About', 'Contact'];
  return (
    <nav className='flex justify-between p-4 items-center'>
      <h1 className='text-3xl font-semibold'>Ecommerce</h1>
      <ul className='flex gap-x-4 text-xl font-semibold'>
        {pages.map((page, index) => (
          <li className='hover:cursor-pointer hover:scale-110' key={index}>
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
}
