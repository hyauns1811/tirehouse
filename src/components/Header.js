"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { getCartCount, isMounted } = useCart();
  
  // To avoid hydration errors with localStorage
  const cartCount = isMounted ? getCartCount() : 0;

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Tire House Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </Link>
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '50%', 
                padding: '2px 8px', 
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
