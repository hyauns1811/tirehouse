"use client";

import { use } from "react";
import { getProductById } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductDetails({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const product = getProductById(unwrappedParams.id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    router.push("/cart");
  };

  return (
    <div className="container" style={{ padding: '80px 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
        <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img src={encodeURI(product.image)} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        
        <div>
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{product.category}</h4>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>{product.name}</h1>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '30px' }}>${product.price.toFixed(2)}</p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8 }}>
            {product.description}
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <button 
              onClick={handleAddToCart}
              style={{ 
                padding: '15px 30px', 
                background: 'transparent', 
                border: '2px solid var(--primary)', 
                color: 'var(--primary)', 
                fontWeight: 'bold',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              ADD TO CART
            </button>
            <button 
              onClick={handleBuyNow}
              className="btn" 
              style={{ fontSize: '1.1rem', flex: 1 }}
            >
              BUY IT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
