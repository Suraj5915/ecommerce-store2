import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/api';
import Product from '../Product/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './ProductList.css'; // Create this CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    const sortedProducts = [...products];

    // Sort the products based on the selected option
    if (value === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <h2>Products</h2>
      <select onChange={handleFilterChange} value={sortOption}>
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
