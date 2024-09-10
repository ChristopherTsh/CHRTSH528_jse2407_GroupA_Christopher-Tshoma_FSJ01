import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';

// This function runs on the server to fetch data before rendering the page
export default async function HomePage() {

  const productsPerPage = 20;
  const currentPage = 1;

  // Fetch products from the API
  const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`);
  const products = await res.json();

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

       {/* Product Grid */}
       <ProductGrid products={products} />
    </div>
  );
}
