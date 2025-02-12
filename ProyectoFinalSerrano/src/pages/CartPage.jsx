import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@mui/material';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cart.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            <Button onClick={() => removeFromCart(product.id)}>Eliminar</Button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
