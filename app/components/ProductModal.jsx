"use client";
import React from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed', top:0, left:0, right:0, bottom:0, 
      backgroundColor:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{ backgroundColor:'white', padding:'20px', borderRadius:'8px', width:'400px', maxHeight:'80%', overflowY:'auto' }}>
        <button onClick={onClose} >×</button>
        <img src={product.thumbnail} alt={product.title} style={{ width:'100%', height:'200px', objectFit:'cover', marginBottom:'10px' }}/>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
