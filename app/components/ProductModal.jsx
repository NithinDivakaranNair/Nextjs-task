import React from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div>
      <div>
        <button onClick={onClose}>
          x
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          
        />
        <h2 >{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
