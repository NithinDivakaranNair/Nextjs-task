"use client";

import React, { useState, useEffect } from 'react';
import api from './utils/axios';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';


export default function Home() {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await api.get('/products');
        setProducts(res.data.products);
        setFiltered(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'low-high') result.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') result.sort((a, b) => b.price - a.price);

    setFiltered(result);
  }, [search, sort, products]);

  return (
    <div >
      <h1 >Product List</h1>

      <div>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Sort by price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {loading && <p>Loading products...</p>}

      <div >
        {!loading && filtered.map(product => (
          <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
