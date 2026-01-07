import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h4>{product.title}</h4>
        <p className="price">₹{product.price}</p>
        <p className="rating">★ {product.rating}</p>
        <button className="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
