"use client";

import { useCart } from "../../context/CartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Checkout() {
  const { cart, getCartTotal, clearCart, isMounted } = useCart();
  const router = useRouter();
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isMounted) return null;

  if (orderSuccess) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '20px' }}>Thank You!</h1>
        <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '30px' }}>Your payment was successful and your order is being processed.</p>
        <Link href="/" className="btn">Return to Shop</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <p style={{ margin: '20px 0', color: 'var(--text-muted)' }}>Add some products to proceed to checkout.</p>
        <Link href="/" className="btn">Return to Shop</Link>
      </div>
    );
  }

  const cartTotal = getCartTotal();
  const shipping = 9.99;
  const total = (cartTotal + shipping).toFixed(2);

  return (
    <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#fff' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '50px' }}>
        <div>
          <div className="content-box">
            <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '15px', marginBottom: '25px', color: '#fff' }}>Order Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="email" placeholder="Email Address" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" placeholder="First Name" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
                <input type="text" placeholder="Last Name" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              </div>
              <input type="text" placeholder="Address" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              <input type="text" placeholder="City" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" placeholder="State" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
                <input type="text" placeholder="ZIP Code" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              </div>
            </div>
            
            <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '15px', margin: '40px 0 25px', color: '#fff' }}>Payment</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Complete your purchase securely via PayPal.</p>
            
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
              <PayPalButtons 
                style={{ layout: "vertical", shape: "rect", color: "gold" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    // This function shows a transaction success message to your buyer.
                    clearCart();
                    setOrderSuccess(true);
                  });
                }}
                onError={(err) => {
                  console.error("PayPal Checkout Error:", err);
                  alert("There was an error processing your payment. Please try again.");
                }}
              />
            </div>
          </div>
        </div>
        
        <div>
          <div style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', position: 'sticky', top: '100px' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Your Order</h3>
            
            <div style={{ marginBottom: '20px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={encodeURI(item.image)} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                      <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--primary)', color: '#fff', fontSize: '0.7rem', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                        {item.quantity}
                      </span>
                    </div>
                    <div>
                      <p style={{ color: '#fff', fontSize: '0.9rem' }}>{item.name}</p>
                    </div>
                  </div>
                  <div style={{ color: '#fff', fontSize: '0.9rem' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--text-muted)' }}>
                <span>Standard Shipping (3-7 days)</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
