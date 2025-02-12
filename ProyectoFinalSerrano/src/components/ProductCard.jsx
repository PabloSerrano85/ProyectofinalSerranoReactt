import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Card, Button, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card style={{ padding: '10px', margin: '10px', maxWidth: '300px' }}>
      {/* Verifica que la URL de la imagen esté disponible */}
      {product.imageUrl ? (
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
        />
      ) : (
        <img 
          src="https://via.placeholder.com/300" 
          alt="Producto sin imagen" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
        />
      )}
      
      <Typography variant="h6" style={{ marginTop: '10px' }}>{product.name}</Typography>
      <Typography variant="body2">{product.description}</Typography>
      <Typography variant="body1">${product.price}</Typography>
      <Button onClick={() => addToCart(product)} style={{ marginTop: '10px' }}>Añadir al carrito</Button>
    </Card>
  );
};

export default ProductCard;
