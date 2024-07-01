import { useEffect, useState } from 'react';
import { getProducts, addToCart } from './api';
import Products from './Products';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = (product:any) => {
    if (product.quantity > 0) {
      addToCart({ ...product, quantity: 1 }).then(() => {
        setProducts(products.map(p => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p));
      });
    }
  };

  return (
    <div>
      {products.map(product => (
        <Products key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
