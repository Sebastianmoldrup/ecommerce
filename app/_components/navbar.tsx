export default function Navbar() {

  const pages = [
    {
      title: 'home',
      url: '/'
    },
    {
      title: 'shop',
      url: '/shop'
    },
    {
      title: 'about',
      url: '/about'
    },
    {
      title: 'contact',
      url: '/contact'
    }
  ]

  return (
    <nav className='flex justify-between p-4 items-center'>
      <h1 className='text-3xl font-semibold'><a href="/">Ecommerce</a></h1>
      <ul className='flex gap-x-4 text-xl font-semibold'>
        {pages.map((page, index) => (
          <li className='hover:cursor-pointer hover:scale-110' key={index}>
            <a href={page.url}>{page.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
