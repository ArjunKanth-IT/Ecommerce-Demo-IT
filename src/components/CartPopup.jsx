import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function CartPopup({ onClose }) {
  const { items, increment, decrement, removeFromCart, totalAmount } = useCart();
  const navigate = useNavigate();

  const goToCheckout = () => {
    // Pass selected item details via state
    navigate('/checkout', { state: { items } });
    onClose?.();
  };

  return (
    <div className="cart-popup">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="icon-btn" onClick={onClose}>✕</button>
      </div>
      {items.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((p) => (
              <li key={p.id} className="cart-item">
                <img src={p.image} alt={p.title} />
                <div className="cart-details">
                  <div className="title">{p.title}</div>
                  <div className="price">₹{p.price}</div>
                  <div className="qty-controls">
                    <button onClick={() => decrement(p.id)}>-</button>
                    <span>{p.qty}</span>
                    <button onClick={() => increment(p.id)}>+</button>
                  </div>
                </div>
                <button className="link-btn danger" onClick={() => removeFromCart(p.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <div className="total">Total: ₹{totalAmount}</div>
            <button className="primary wide" onClick={goToCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
