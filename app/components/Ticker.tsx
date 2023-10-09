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
    <div className='text-bold flex w-full items-center justify-evenly text-2xl text-white md:bg-[#2e2e2e]'>
      <span>Payment</span>
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
      <span>Methods</span>
    </div>
  );
}
