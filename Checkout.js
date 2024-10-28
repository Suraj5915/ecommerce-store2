import React from 'react';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic (e.g., payment processing)
    console.log("Checkout successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Credit Card Number" required />
      <button type="submit">Complete Purchase</button>
    </form>
  );
};

export default Checkout;
