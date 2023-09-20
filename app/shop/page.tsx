import { Shop } from '../components/Shop';
export default function Home() {
  return (
    <main className='flex h-full w-full items-center justify-center'>
      <section className='flex items-center'>
        <Shop />
      </section>
    </main>
  );
}
