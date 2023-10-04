export function Banner() {
  return (
    <div className='hidden h-[30px] items-center justify-between bg-[#ebebeb] px-4 text-sm font-semibold lg:flex'>
      <div className='font-bold'>Ecommerce AS</div>
      <ul className='flex gap-2 text-sm'>
        <li className=''>
          <a href='/'>Help</a>
        </li>
        <li className='border-x-2 border-main px-2'>
          <a href='/'>Contact</a>
        </li>
        <li className=''>
          <a href='/'>Newsletter</a>
        </li>
      </ul>
    </div>
  );
}
