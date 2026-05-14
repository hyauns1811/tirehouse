export const metadata = {
  title: "Contact Us | TIRE HOUSE",
};

export default function Contact() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-box" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <h2>Get in Touch</h2>
            <p>We are here to help you find the perfect parts for your vehicle. Reach out to our expert team for any questions or support.</p>
            
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Company Information</h3>
              <p><strong>TIRE HOUSE</strong></p>
              <p>6225 HIGHWAY 99 STE D</p>
              <p>LYNNWOOD, WA 98087-1481</p>
              <p>UNITED STATES</p>
              <br />
              <p><strong>Phone:</strong> (206) 474-0776</p>
              <p><strong>Email:</strong> support@tirehouse.shop</p>
            </div>
          </div>
          
          <div>
            <h2>Send us a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }} />
              <textarea placeholder="Your Message" rows="5" style={{ padding: '12px', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}></textarea>
              <button type="button" className="btn" style={{ alignSelf: 'flex-start' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
