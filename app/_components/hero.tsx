import data from '@/app/_data/sneakers.json';

export default function Hero() {
  // Find the most expensive sneaker price
  const price = data.sneakers.reduce((acc, sneaker) => {
    if (sneaker.retail_price_cents === null) return acc;
    else if (sneaker.retail_price_cents > acc) {
      return (acc = sneaker.retail_price_cents);
    } else {
      return acc;
    }
  }, 0);

  // Filter and make an array of the most expensive sneakers
  const filter = data.sneakers.find((sneaker) => {
    return sneaker.retail_price_cents === price;
  });

  console.log(filter);
  return <div></div>;
}
