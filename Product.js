import React, { useState } from 'react';
import './Product.css';
import Review from '../Review/Review'; // Import Review Component



const Product = ({ product, onAddToCart }) => {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <button onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </button>
      {showReviews && <Review productId={product.id} />} {/* Show Reviews */}
    </div>
  );
};

export default Product;
