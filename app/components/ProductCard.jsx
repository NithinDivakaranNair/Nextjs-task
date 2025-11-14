const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
    >
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};
export default ProductCard;
