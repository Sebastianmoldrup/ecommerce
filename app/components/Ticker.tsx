'use client';
import {
  IconVisa,
  IconAmazon,
  IconStripe,
  IconPaypal,
  IconBitcoin,
  IconKlarna,
  IconExpress,
  IconGpay,
  IconMaster,
} from './Icons';

export default function Ticker() {
  //   const scrollers = document.querySelectorAll('[data-tag=scroller]');
  //   if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  //     addAnimation();
  //   }

  //   function addAnimation() {
  //     scrollers.forEach((scroller) => {
  //       // add data-animated="true" to every `.scroller` on the page
  //       scroller.setAttribute('data-animated', 'true');
  //     });
  //   }

  return (
    <div className='text-bold flex w-full items-center justify-evenly bg-[#2e2e2e] text-2xl text-white'>
      <span className='hidden px-4 md:block'>Payment</span>
      <div data-animated='true' className='scroller'>
        <div className='scroller__inner'>
          <IconVisa />
          <IconMaster />
          <IconKlarna />
          <IconPaypal />
          <IconGpay />
          <IconExpress />
          <IconAmazon />
          <IconBitcoin />
          <IconStripe />
          {/* Duplicate */}
          <IconVisa />
          <IconMaster />
          <IconKlarna />
          <IconPaypal />
          <IconGpay />
          <IconExpress />
          <IconAmazon />
          <IconBitcoin />
          <IconStripe />
        </div>
      </div>
      <span className='hidden px-4 md:block'>Methods</span>
    </div>
  );
}
