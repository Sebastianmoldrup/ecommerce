import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error('something went wrong fetching the products:', err);
    res.status(500).json({ err: 'Error fetching products' });
  }
}
