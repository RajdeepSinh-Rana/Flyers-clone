import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../Css/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('price-desc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Flyers'));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        gsap.from('.product-item', { opacity: 0, y: 20, stagger: 0.2, duration: 0.5 });
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSort = (products) => {
    switch (sortOption) {
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = handleSort(
    products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderProductsByCategory = (categoryProducts) => (
    <div className="products-row">
      {categoryProducts.map(product => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`} className="product-link">
            <div className="product-image-container">
              <img src={product.mainImgUrl} alt={product.name} className="main-image" />
              {product.sideImgUrls && (
                <div className="hover-image">
                  <img src={product.sideImgUrls} alt={`Hover of ${product.name}`} />
                </div>
              )}
            </div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );

  const sunsetProducts = sortedProducts.filter(product => product.category === 'SUNSET');
  const houseProducts = sortedProducts.filter(product => product.category === 'HOUSE');
  const cbdProducts = sortedProducts.filter(product => product.category === 'CBD');

  return (
    <div className="products-container">
      <h2 className="category-title">ZERO-PROOF THC SUNSET SPRITZ</h2>
      {renderProductsByCategory(sunsetProducts)}

      <h2 className="category-title">zero-proof THC HOUSE COCKTAILS
      </h2>
      {renderProductsByCategory(houseProducts)}

      <h2 className="category-title">zero-proof CBD COCKTAILS</h2>
      {renderProductsByCategory(cbdProducts)}
    </div>
  );
};

export default Products;
