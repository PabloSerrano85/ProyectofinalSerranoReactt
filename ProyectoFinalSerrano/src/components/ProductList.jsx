import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../firebase/firebase';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      // Verifica que cada producto tenga una imagen
      const updatedProducts = productsData.map(product => ({
        ...product,
        imageUrl: product.imageUrl || "https://via.placeholder.com/300" // Imagen predeterminada si no hay URL
      }));
      setProducts(updatedProducts);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ProductList;
