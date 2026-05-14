"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, isMounted } = useCart();

  if (!isMounted) return null;

  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#fff' }}>Your Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', background: 'var(--card-bg)', borderRadius: 'var(--radius)' }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Your cart is empty.</h2>
          <Link href="/" className="btn">Continue Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: '20px', background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', marginBottom: '20px', border: '1px solid var(--border)' }}>
                <img src={encodeURI(item.image)} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#fff', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '15px' }}>${item.price.toFixed(2)}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 15px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>-</button>
                      <span style={{ padding: '0 10px', color: '#fff' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 15px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'transparent', border: 'none', color: '#ef4444', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.2rem' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <div style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', position: 'sticky', top: '100px' }}>
              <h3 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Order Summary</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--text-muted)' }}>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderTop: '1px solid var(--border)', paddingTop: '15px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <Link href="/checkout" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
