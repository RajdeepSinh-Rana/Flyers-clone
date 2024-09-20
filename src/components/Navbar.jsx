import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = ({ cartItems = [], setCartItems }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const toggleCart = () => setCartOpen(prev => !prev);

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  // Close sidebar or cart when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarOpen && !event.target.closest('.sidebar')) {
        setSidebarOpen(false);
      }
      if (cartOpen && !event.target.closest('.cart-sidebar')) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sidebarOpen, cartOpen]);

  // Close sidebar or cart when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
        setCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent body scrolling when sidebar or cart is open
  useEffect(() => {
    if (sidebarOpen || cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [sidebarOpen, cartOpen]);

  // Memoized total cart price calculation
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  }, [cartItems]);

  return (
    <div className="navbar">
      <header className="header">
        {/* Sidebar Toggle Button */}
        <button className="open" onClick={toggleSidebar} aria-label="Open sidebar">
          <svg viewBox="0 -960 960 960" width="44px" fill="#FFFFFF">
            <path d="M172-278v-24h616v24H172Zm0-190v-24h616v24H172Zm0-190v-24h616v24H172Z" />
          </svg>
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
            &times;
          </button>
          <ul className="ul1">
            <li><Link to="/MainProduct">SHOP ALL</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/CONTACT">CONTACT</Link></li>
          </ul>
          <ul className="ul1">
            <li><Link to="/login" className="textsize1">Log in</Link></li>
            <li><Link to="/signup" className="textsize1">Create account</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="logo1"
              src="https://drinkflyers.com/cdn/shop/files/Flyers_Logotype_Stacked_2color_ondark.png?v=1713800607&width=240"
              alt="Flyers Logo"
            />
          </Link>
        </div>

        {/* Cart Toggle Button */}
        <div>
          <button onClick={toggleCart} aria-label="Open cart">
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Cart Sidebar */}
        <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleCart} aria-label="Close cart sidebar">
            &times;
          </button>
          <h2>Your Cart</h2>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.mainImgUrl} alt={item.name} className="cart-item-image" />
                  {item.name} - ${item.price}
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}

          {/* Cart Total */}
          {cartItems.length > 0 && (
            <div className="cart-total">
              <strong>Total: ${cartTotal}</strong>
            </div>
          )}

          {/* Checkout Link */}
          <Link to="/checkout" className="checkout-button">Checkout...</Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
