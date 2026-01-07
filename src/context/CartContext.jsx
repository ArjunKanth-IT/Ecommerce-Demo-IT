import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id,title,price,image,qty}

  const addToCart = (product) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const increment = (id) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(0, p.qty - 1) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const clearCart = () => setItems([]);

  const { totalQty, totalAmount } = useMemo(() => {
    const totalQty = items.reduce((sum, p) => sum + p.qty, 0);
    const totalAmount = items.reduce((sum, p) => sum + p.qty * p.price, 0);
    return { totalQty, totalAmount };
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart,
        totalQty,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
