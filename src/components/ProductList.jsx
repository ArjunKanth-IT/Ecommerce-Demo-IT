import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loader">Loading products...</div>;

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
