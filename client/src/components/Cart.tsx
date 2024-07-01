import { getCart, updateCartItem, removeCartItem } from './api';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import "./cart.css"
export default function Cart() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    getCart().then((response:any) => {
      setCart(response.data);
      calculateSubtotal(response.data);
    });
  }, []);

  const handleUpdate = (id:any, quantity:any) => {
    updateCartItem(id, quantity).then(() => {
      setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
      calculateSubtotal(cart);
    });
  };

  const handleRemove = (id:any) => {
    removeCartItem(id).then(() => {
      setCart(cart.filter(item => item.id !== id));
      calculateSubtotal(cart.filter(item => item.id !== id));
    });
  };

  const calculateSubtotal = (cart:any) => {
    const total = cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      ))}
      <div className="subtotal">
        Subtotal: ${subtotal}
      </div>
    </div>
  )
}
