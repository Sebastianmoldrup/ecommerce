'use client';
import { useState, useEffect, useMemo } from 'react';
export default function News() {
  // news list
  const list = [
    'UP TO 45% DISCOUNT',
    'FREE STANDARD SHIPPING OVER 75$',
    'NEW PRODUCTS',
  ];

  const [show, setShow] = useState(0);

  function cycle() {
    setShow((show + 1) % list.length);
  }

  useEffect(() => {
    const interval = setInterval(cycle, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className='hidden h-[30px] items-center justify-center bg-background px-4 font-semibold lg:flex'>
      <ul className='animate-cycle grid h-[30px] place-content-center gap-y-4 overflow-hidden text-sm'>
        {list.map((item, index) => (
          <li
            key={item}
            className={`flex items-center justify-center delay-200 duration-200 ease-linear ${
              show === index ? 'block -translate-y-0 animate-marquee' : 'hidden'
            }`}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
