export default async function ProductPage({ params }) {
  let product = null;
  let error = null;

  try {
    // Fetch product data using the product ID
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${params.id}`);

    // If the fetch fails or the product does not exist, handle errors
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    product = await res.json();
  } catch (err) {
    error = err.message;
  }

  // If there was an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If no product data was found, return a fallback UI
  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} />
      {/* If the product has more images, show a gallery */}
      {product.images && product.images.length > 1 && (
        <div className="image-gallery">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}
