"use client";

import { use } from "react";
import Link from "next/link";
import { products } from "../../../data/products";

const categoryMap = {
  "rims-wheels": "Rims / Wheels",
  "suspension-kits": "Suspension Kits",
  "exhaust-systems": "Exhaust Systems",
  "roof-racks": "Roof Racks"
};

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const categoryName = categoryMap[slug];

  if (!categoryName) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Category not found</h2>
      </div>
    );
  }

  const categoryProducts = products.filter(p => p.category === categoryName);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 style={{ textTransform: 'uppercase' }}>{categoryName}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Explore our premium selection of {categoryName.toLowerCase()}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 20px 80px' }}>
        {categoryProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>No products found in this category.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {categoryProducts.map((product) => (
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
        )}
      </div>
    </div>
  );
}
