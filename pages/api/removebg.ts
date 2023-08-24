import { RemoveBgError, removeBackgroundFromImageUrl } from 'remove.bg';

export async function removeFromImgUrl(url: string) {
  let outputFile;
  try {
    outputFile = `${__dirname}/out/img-removed-from-url.png`;
    const result = await removeBackgroundFromImageUrl({
      url,
      apiKey: 'dTBMX2gidsUSMww3xT2gzjAQ',
      size: 'regular',
      type: 'product',
      outputFile,
    });
  } catch (e) {
    console.log('something went wrong');
  }
  return outputFile;
}

export async function getServerSideProps(product) {
  // Fetch data from external API
  const response = await fetch('/api/products');
  const data = await response.json();

  // Process each product's thumbnail with remove.bg
  const productsWithBgRemoved = await Promise.all(
    data.products.map(async (product) => {
      const newThumbnail = await fetch('/api/remove-bg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: product.thumbnail }),
      });
      const newThumbnailJson = await newThumbnail.json();
      return { ...product, thumbnail: newThumbnailJson.outputFile };
    })
  );

  // Pass data to the page via props
  return { props: { products: productsWithBgRemoved } };
}
