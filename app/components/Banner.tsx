export function Banner() {
  return (
    <div className='h-[30px] bg-main-100 px-4 font-semibold justify-between items-center text-sm hidden lg:flex'>
      <div className='font-bold'>Wedgewood AS</div>
      <ul className='flex gap-2 text-sm'>
        <li className='hover:text-main-900'>
          <a href='/'>Help</a>
        </li>
        <li className='border-x-2 border-black px-2 hover:text-main-900'>
          <a href='/'>Contact</a>
        </li>
        <li className='hover:text-main-900'>
          <a href='/'>Newsletter</a>
        </li>
      </ul>
    </div>
  );
}
