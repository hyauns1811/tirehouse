import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "./Providers";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TIRE HOUSE | Premium Auto Parts",
  description: "Shop premium Rims, Wheels, Suspension kits, Exhaust systems, and Roof racks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          <main>{children}</main>

          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div className="footer-col">
                  <h3>TIRE HOUSE</h3>
                  <p>6225 HIGHWAY 99 STE D</p>
                  <p>LYNNWOOD, WA 98087-1481</p>
                  <p>UNITED STATES</p>
                  <p>📞 (206) 474-0776</p>
                  <p>✉️ support@tirehouse.shop</p>
                </div>
                <div className="footer-col">
                  <h3>Shop Categories</h3>
                  <div className="footer-links">
                    <Link href="/category/rims-wheels">Rims & Wheels</Link>
                    <Link href="/category/suspension-kits">Suspension Kits</Link>
                    <Link href="/category/exhaust-systems">Exhaust Systems</Link>
                    <Link href="/category/roof-racks">Roof Racks</Link>
                  </div>
                </div>
                <div className="footer-col">
                  <h3>Customer Service</h3>
                  <div className="footer-links">
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/shipping-policy">Shipping Policy</Link>
                    <Link href="/return-refund-policy">Return & Refund Policy</Link>
                    <Link href="/payment-policy">Payment Policy</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                &copy; {new Date().getFullYear()} TIRE HOUSE. All rights reserved.
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
