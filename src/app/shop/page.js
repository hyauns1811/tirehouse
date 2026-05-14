import Link from 'next/link';
import { products } from '../../data/products';

export const metadata = {
  title: "Shop All Products | TIRE HOUSE",
};

const categories = [
  {
    name: "Rims & Wheels",
    slug: "rims-wheels",
    image: "/image/Custom Passenger Car Wheels 15 16 17 Inch 4x100 4x114.3 5x100 6 5x114.3 mm Aftermarket Flow Forming Alloy Auto Car Wheel Rim Hub.jpg"
  },
  {
    name: "Suspension Kits",
    slug: "suspension-kits",
    image: "/image/32 Way Damping Force Adjustability Coilover Spring Coilover Suspension Kit for Lexus IS F.png"
  },
  {
    name: "Exhaust Systems",
    slug: "exhaust-systems",
    image: "/image/Factory Wholesale Catback Exhaust System Muffler for Lexus GS350 3.5L 2012-2020 High-performance with Valve Racing Upgrade.jpg"
  },
  {
    name: "Roof Racks",
    slug: "roof-racks",
    image: "/image/Front Runner Ford F-250F-350 Crew Cab Slimline II Roof Rack Kit.jpg"
  }
];

export default function Shop() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Shop</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px', fontSize: '1.2rem' }}>Browse our complete collection of premium automotive parts.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '20px 20px 60px' }}>
        
        {/* Categories Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>Shop by Category</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {categories.map((cat) => (
              <Link href={`/category/${cat.slug}`} key={cat.slug} style={{ display: 'block' }}>
                <div style={{ 
                  background: 'var(--card-bg)', 
                  borderRadius: 'var(--radius)', 
                  overflow: 'hidden', 
                  border: '1px solid var(--border)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }} className="category-card">
                  <div style={{ height: '140px', background: `url("${encodeURI(cat.image)}") center/contain no-repeat`, backgroundColor: '#fff' }}></div>
                  <div style={{ padding: '15px', textAlign: 'center', background: 'rgba(15, 23, 42, 0.95)' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{cat.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Products Section */}
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>All Products</h2>
          
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
        </div>

      </div>
    </div>
  );
}
