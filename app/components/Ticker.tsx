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
    <div
      data-tag='scroller'
      data-animated='true'
      className='flex max-w-[600px] justify-center overflow-hidden bg-slate-600/75'
    >
      <div data-tag='inner_scroller' className='flex w-max gap-4'>
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
  );
}
