"use client";

import { CartProvider } from "../context/CartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export function Providers({ children }) {
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", 
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
