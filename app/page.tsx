'use client';
import Image from 'next/image';
import { IconLoading, Wave } from './components/Icons';
import Ticker from './Components/Ticker';
import Hero from './Components/Hero';
import Sale from './Components/Sale';

export default function Home() {
  const animals = [
    { name: 'carmen', species: 'rabbit' },
    { name: 'pablo', species: 'dog' },
    { name: 'paco', species: 'dog' },
    { name: 'trevor', species: 'fish' },
    { name: 'jimmy', species: 'cat' },
    { name: 'jimbob', species: 'fish' },
    { name: 'alice', species: 'rabbit' },
    { name: 'dina', species: 'cat' },
  ];

  // console.log(animals);

  // let cats = animals.filter((animal) => {
  //   return animal.species === 'cat';
  // });

  let cats = animals.filter((x) => x.species === 'cat');

  // let names = animals.map(function (animal) {
  //   return animal.name;
  // });

  let names = animals.map((x) => x.name);

  const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
  ];

  let total = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <main className='m-0 flex h-screen w-full flex-col p-0'>
      <div className='mt-6 flex flex-col'>
        <Hero />

        <Ticker />
      </div>
      <div className='mt-6 grid w-full grid-cols-1 grid-rows-1 place-items-center text-center md:mt-0'>
        <Wave />

        <h2 className='col-start-1 row-start-1 rounded-sm bg-red-600 px-4 py-2 text-3xl font-semibold uppercase text-white'>
          Sale
        </h2>
        {/* <Sale /> */}
      </div>
    </main>
  );
}
