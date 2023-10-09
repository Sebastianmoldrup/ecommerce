'use client';
import { useState } from 'react';

export default function Dropdown({
  title,
  list,
}: {
  title: string;
  list: Array<string>;
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => show || setShow(true)}
      onMouseLeave={() => !show || setShow(false)}
      className={`relative grid h-full ${show ? 'slidedown__parent' : ''}`}
    >
      <a className='flex items-center gap-x-2 whitespace-nowrap p-2 text-right hover:bg-green-300/10'>
        {title}
      </a>
      <div
        className={`slidedown slidedown__nav absolute top-full min-w-full ${
          show ? 'slidedown__show' : ''
        }`}
      >
        <ul className='m-0 min-w-max list-none overflow-y-hidden bg-neutral-100'>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <a>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
