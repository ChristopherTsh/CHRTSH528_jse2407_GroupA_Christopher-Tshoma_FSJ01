import Link from 'next/link';

export default function ProductCard({ product, addToCart, addToWishlist }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <div className="flex space-x-2">
        {/* View Product */}
        <Link href={`/products/${product.id}`}>
          <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Product</a>
        </Link>

        {/* Add to Cart */}
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>

        {/* Add to Wishlist */}
        <button 
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" 
          onClick={() => addToWishlist(product.id)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
