import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import CartPopup from './CartPopup.jsx';
import { useState } from 'react';

export default function Header() {
  const { user, logout } = useAuth();
  const { totalQty } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      {/* Left side: logo + nav */}
      <div className="header-left">
        <Link to="/" className="logo">ShopLite</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>

      {/* Right side: cart + user */}
      <div className="header-right">
        <button className="cart-btn" onClick={() => setShowCart((s) => !s)}>
          Cart ({totalQty})
        </button>

        {user ? (
          <>
            {/* Always show the real username from AuthContext */}
            <span className="user">Hi, {user.name}</span>
            <button className="link-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link className="link-btn" to="/login">Login</Link>
        )}
      </div>

      {/* Cart popup */}
      {showCart && <CartPopup onClose={() => setShowCart(false)} />}
    </header>
  );
}
