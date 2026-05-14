import Link from 'next/link';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', marginBottom: '20px', lineHeight: 1.2 }}>
            UPGRADE YOUR RIDE WITH <span style={{ color: 'var(--primary)' }}>PREMIUM PARTS</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px' }}>
            Discover top-tier rims, suspension kits, exhaust systems, and roof racks engineered for ultimate performance and style.
          </p>
          <Link href="#categories" className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="categories" className="container" style={{ padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '10px' }}>FEATURED PRODUCTS</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', background: `url("${encodeURI(product.image)}") center/contain no-repeat`, backgroundColor: '#fff' }}></div>
              <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '5px' }}>{product.category}</p>
                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '10px' }}>{product.name}</h3>
                </Link>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>${product.price.toFixed(2)}</p>
                <div style={{ marginTop: 'auto' }}>
                  <Link href={`/product/${product.id}`} className="btn" style={{ display: 'block', textAlign: 'center' }}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
