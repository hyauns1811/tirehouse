export const metadata = {
  title: "Shipping Policy | TIRE HOUSE",
};

export default function ShippingPolicy() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Shipping Policy</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box">
          <h2>Order Processing Time</h2>
          <p>All orders are processed within 1 to 3 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
          
          <h2>Domestic Shipping Rates and Estimates</h2>
          <p>We offer Standard Shipping (3-7 days) at a flat rate of $9.99 across the contiguous United States. Shipping charges for your order will be calculated and clearly displayed at checkout.</p>

          <h2>International Shipping</h2>
          <p>Currently, we only ship within the United States. We do not offer international shipping at this time.</p>

          <h2>How do I check the status of my order?</h2>
          <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>

          <h2>Shipping to P.O. boxes</h2>
          <p>Due to the size of our automotive parts (wheels, suspension kits), we cannot ship to P.O. boxes. Please provide a valid physical street address for delivery.</p>

          <h2>Contact Us</h2>
          <p>If you have any further questions, please don't hesitate to contact us at support@tirehouse.shop.</p>
        </div>
      </div>
    </div>
  );
}
