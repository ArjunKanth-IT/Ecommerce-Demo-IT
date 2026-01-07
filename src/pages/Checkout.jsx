import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Checkout() {
  const location = useLocation();
  const { items: cartItems, totalAmount, clearCart } = useCart();
  // Prefer state from navigation, fallback to cart context
  const items = location.state?.items?.length ? location.state.items : cartItems;

  const placeOrder = () => {
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <main className="container">
      <h2>Checkout</h2>
      {items.length === 0 ? (
        <p className="muted">No items to checkout.</p>
      ) : (
        <>
          <ul className="checkout-list">
            {items.map((p) => (
              <li key={p.id} className="checkout-item">
                <img src={p.image} alt={p.title} />
                <div className="info">
                  <div className="title">{p.title}</div>
                  <div className="sub">
                    Qty: {p.qty} • Price: ₹{p.price} • Subtotal: ₹{p.qty * p.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary">
            <div className="line"><span>Item total</span><span>₹{totalAmount}</span></div>
            <div className="line"><span>Delivery</span><span>Free</span></div>
            <div className="line total"><strong>Grand total</strong><strong>₹{totalAmount}</strong></div>
          </div>
          <button className="primary wide" onClick={placeOrder}>Place Order</button>
        </>
      )}
    </main>
  );
}
