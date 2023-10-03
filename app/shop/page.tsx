import Products from './Products';
export default async function Shop() {
  const data = await fetch('https://dummyjson.com/products');

  if (data.status !== 200) return <p className='p-10'>error {data.status}</p>;

  const products: Product[] = (await data.json())?.products || [];

  return (
    <main className='flex h-full w-full items-center justify-center'>
      <section className='flex items-center'>
        <Products products={products} />
      </section>
    </main>
  );
}
