import { useState } from 'react';
interface CartItemProps {
    item: {
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
    };
    onUpdate: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}
export default function CartItem(item:any, onUpdate:any, onRemove:any) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleUpdate = () => {
    onUpdate(item.id, quantity);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {quantity}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}
