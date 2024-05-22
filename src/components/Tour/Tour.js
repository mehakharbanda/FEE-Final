import React, { useState } from 'react';
import './Tour.css';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const Tour = () => {
  const [cartItems, setCartItems] = useState([]);

  const destinations = [
    { id: 1, name: "London", imageSrc: "london.webp", country: "United Kingdom" },
    { id: 2, name: "Rome", imageSrc: "rome.jpeg", country: "Italy" },
    { id: 3, name: "Dubai", imageSrc: "dubai.jpeg", country: "UNITED ARAB EMIRATES" },
    { id: 4, name: "JAIPUR", imageSrc: "jaipur2.webp", country: "RAJASTHAN" },
    { id: 5, name: "PARIS", imageSrc: "paris3.jpeg", country: "FRANCE" },
    { id: 6, name: "AMRITSAR", imageSrc: "AMRITSAR.jpeg", country: "PUNJAB" },
    { id: 7, name: "BARCELONA", imageSrc: "barcelona.jpeg", country: "SPAIN" },
    { id: 8, name: "NEW YORK", imageSrc: "new york.jpeg", country: "USA" }
  ];

  const addToCart = (destination) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === destination.id);
    if (existingItemIndex === -1) {
      setCartItems([...cartItems, { ...destination, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart.filter(item => item.quantity > 0));
  };

  return (
    <section id="tour">
      <div id="tours" className="center-text">
        <h2>DESTINATION TOURS</h2>
      </div>

      <div className="tour-content">
        {destinations.map((destination) => (
          <div className="box" key={destination.id}>
            <img src={destination.imageSrc} alt={destination.name} />
            <h6>{destination.name}</h6>
            <h4>{destination.country}</h4>
            <div className="add-to-cart">
              {cartItems.some(item => item.id === destination.id) ? (
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(destination.id)}>
                    <FaMinus className="minus" />
                  </button>
                  <span>{cartItems.find(item => item.id === destination.id)?.quantity || 0}</span>
                  <button onClick={() => increaseQuantity(destination.id)}>
                    <FaPlus className="plus" />
                  </button>
                </div>
              ) : (
                <button onClick={() => addToCart(destination)} className="add-to-cart-btn">
                  <FaShoppingCart className="cart-icon" /> Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tour;

