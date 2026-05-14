export const metadata = {
  title: "Payment Policy | TIRE HOUSE",
};

export default function PaymentPolicy() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Payment Policy</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Accepted Methods of Payment</h2>
          <p>At TIRE HOUSE, we offer a secure and convenient checkout experience. Our primary payment processor is <strong>PayPal</strong>. Through our PayPal integration, you can securely pay using:</p>
          <ul>
            <li>Your PayPal Account</li>
            <li>Visa</li>
            <li>MasterCard</li>
            <li>American Express</li>
            <li>Discover</li>
          </ul>
          <p>You do not need a PayPal account to pay with a credit or debit card.</p>

          <h2>Payment Processing</h2>
          <p>Your payment will be processed at the time your order is placed. If your card is declined, we will not process your order and you will be notified immediately during the checkout process.</p>

          <h2>Secure Transactions</h2>
          <p>Our website utilizes industry-standard SSL (Secure Sockets Layer) encryption technology to protect your personal and payment information. We do not store your full credit card details on our servers.</p>

          <h2>Taxes</h2>
          <p>Applicable sales tax will be calculated and added to your order total during checkout based on your shipping destination and local tax laws.</p>

          <h2>Fraud Prevention</h2>
          <p>To protect our customers and our business from fraudulent activities, we may verify large or unusual orders before processing them. We reserve the right to cancel any order that fails our security checks.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions regarding your payment or our payment policies, please contact us at support@tirehouse.shop or call us at (206) 474-0776.</p>
        </div>
      </div>
    </div>
  );
}
