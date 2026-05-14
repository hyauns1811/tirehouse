"use client";

import { CartProvider } from "../context/CartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export function Providers({ children }) {
  const initialOptions = {
    // Replace with actual PayPal Client ID when ready
    "client-id": "test", 
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <CartProvider>
        {children}
      </CartProvider>
    </PayPalScriptProvider>
  );
}
