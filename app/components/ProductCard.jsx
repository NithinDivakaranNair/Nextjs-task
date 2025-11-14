import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductCard
