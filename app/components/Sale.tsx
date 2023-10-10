import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  thumbnail: string;
  brand: string;
  rating: number;
  stock: number;
  discountPercentage: number;
}

function Sale({ products }: { products: Product[] }) {
  return (
    <div className='container mx-auto px-5 py-24'>
      <ul className='-m-4 flex flex-wrap'>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div className='w-full p-4 md:w-1/2 lg:w-1/4'>
                <a className='relative block h-48 overflow-hidden rounded'>
                  <Image
                    src={product.thumbnail}
                    alt='ecommerce'
                    width={300}
                    height={300}
                    className='h-full w-full object-contain'
                    layout=''
                    objectFit=''
                  />
                </a>
                <div className='mt-4'>
                  <h3 className='title-font mb-1 text-xs tracking-widest text-gray-500'>
                    CATEGORY
                  </h3>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    {product.title}
                  </h2>
                  <p className='mt-1'>{`$${product.price}`}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch('https://dummyjson.com/products');

  if (data.status !== 200) {
    return {
      props: { products: [] }, // Handle the error gracefully
    };
  }

  const products: Product[] = (await data.json())?.products || [];

  return {
    props: { products },
  };
}

export default Sale;
