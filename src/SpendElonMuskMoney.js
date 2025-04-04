import React, { useState, useEffect } from 'react';

const SpendElonMuskMoney = () => {
  // State variables
  const initialBalance = 100000000000; // $100 billion
  const [balance, setBalance] = useState(initialBalance);
  const [cart, setCart] = useState({});
  const [showEmote, setShowEmote] = useState(null);
  
  // Elon Musk emote images
  const elonMuskEmotes = {
    laugh: "https://img.freepik.com/free-photo/young-businessman-laughing-against-white-background_23-2148203690.jpg"
  };
  
  // Product list
  const products = [
    // Affordable Items
    { id: 1, name: "Big Mac", price: 2, 
      image: "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg", 
      category: "Everyday Items" },
    { id: 2, name: "Amazon Echo", price: 99, 
      image: "https://img.freepik.com/free-psd/digital-smart-speaker_23-2148936953.jpg", 
      category: "Everyday Items" },
    { id: 3, name: "Airpods", price: 199, 
      image: "https://img.freepik.com/free-psd/wireless-earphones-mockup_1310-695.jpg", 
      category: "Everyday Items" },
    { id: 4, name: "Drone", price: 350, 
      image: "https://img.freepik.com/free-photo/closeup-drone-blue-background_181624-1361.jpg", 
      category: "Everyday Items" },
    { id: 5, name: "Bike", price: 800, 
      image: "https://img.freepik.com/free-photo/sports-bicycle-isolated_1368-1466.jpg", 
      category: "Everyday Items" },
    
    // Medium Items
    { id: 6, name: "Horse", price: 2500, 
      image: "https://img.freepik.com/free-photo/horse-standing-field_1304-5771.jpg", 
      category: "Luxury Items" },
    { id: 7, name: "Tesla Model 3", price: 45000, 
      image: "https://img.freepik.com/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg", 
      category: "Luxury Items" },
    { id: 8, name: "Tesla Model S", price: 90000, 
      image: "https://img.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg", 
      category: "Luxury Items" },
    { id: 9, name: "Tesla Cybertruck", price: 150000, 
      image: "https://img.freepik.com/free-vector/futuristic-car-speed-motion-trails-neon-light-effect_1017-31469.jpg", 
      category: "Luxury Items" },
    { id: 10, name: "Formula 1 Car", price: 15000000, 
      image: "https://img.freepik.com/free-photo/racing-car-track_23-2149247058.jpg", 
      category: "Luxury Items" },
    
    // Expensive Items
    { id: 11, name: "Yacht", price: 90000000, 
      image: "https://img.freepik.com/free-photo/luxury-yacht-sailing-sea-sunset_123525-270.jpg", 
      category: "Ultra Luxury" },
    { id: 12, name: "Private Jet", price: 125000000, 
      image: "https://img.freepik.com/free-photo/private-jet-cruising-above-clouds_53876-138010.jpg", 
      category: "Ultra Luxury" },
    { id: 13, name: "Skyscraper", price: 850000000, 
      image: "https://img.freepik.com/free-photo/skyscrapers-from-low-angle-view_1359-568.jpg", 
      category: "Ultra Luxury" },
    { id: 14, name: "Cruise Ship", price: 930000000, 
      image: "https://img.freepik.com/free-photo/cruise-ship-sailing-sea_53876-30270.jpg", 
      category: "Ultra Luxury" },
    { id: 15, name: "NBA Team", price: 2120000000, 
      image: "https://img.freepik.com/free-photo/basketball-hoop-ball-stadium_23-2148830300.jpg", 
      category: "Ultra Luxury" },
    
    // Musk-specific Items
    { id: 16, name: "SpaceX Falcon 9", price: 62000000, 
      image: "https://img.freepik.com/free-photo/space-rocket-flying-deep-space-with-planet-background-generative-ai_191095-517.jpg", 
      category: "Musk Specials" },
    { id: 17, name: "Twitter (X)", price: 44000000000, 
      image: "https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg", 
      category: "Musk Specials" },
    { id: 18, name: "Gigafactory", price: 5000000000, 
      image: "https://img.freepik.com/free-photo/aerial-view-warehouse-modern-factory-building_53876-138289.jpg", 
      category: "Musk Specials" },
    { id: 19, name: "Mars Colony", price: 10000000000, 
      image: "https://img.freepik.com/free-photo/futuristic-base-another-planet_23-2150688398.jpg", 
      category: "Musk Specials" },
  ];
  
  // Add Google Fonts
  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Buy product function
  const buyProduct = (product) => {
    const updatedCart = { ...cart };
    if (!updatedCart[product.id]) {
      updatedCart[product.id] = {
        product: product,
        quantity: 0,
        totalPrice: 0
      };
    }
    
    updatedCart[product.id].quantity += 1;
    updatedCart[product.id].totalPrice = updatedCart[product.id].quantity * product.price;
    
    setCart(updatedCart);
    setBalance(balance - product.price);
    
    // Show Elon Musk laughing emote
    setShowEmote('laugh');
    setTimeout(() => setShowEmote(null), 2000);
  };
  
  // Sell product function
  const sellProduct = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id] && updatedCart[product.id].quantity > 0) {
      updatedCart[product.id].quantity -= 1;
      updatedCart[product.id].totalPrice = updatedCart[product.id].quantity * product.price;
      
      if (updatedCart[product.id].quantity === 0) {
        delete updatedCart[product.id];
      }
      
      setCart(updatedCart);
      setBalance(balance + product.price);
      
      // Show Elon Musk laughing emote
      setShowEmote('laugh');
      setTimeout(() => setShowEmote(null), 2000);
    }
  };
  
  // Format money helper function
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Format smaller money amounts
  const formatCompactMoney = (amount) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}k`;
    } else {
      return `$${amount}`;
    }
  };
  
  // Calculate total spent
  const calculateTotalSpent = () => {
    return initialBalance - balance;
  };
  
  // Calculate percentage spent
  const calculatePercentageSpent = () => {
    return (calculateTotalSpent() / initialBalance) * 100;
  };
  
  // Calculate total items purchased
  const calculateTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate receipt total
  const calculateReceiptTotal = () => {
    return Object.values(cart).reduce((total, item) => total + item.totalPrice, 0);
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="header">
        <div className="container">
          <h1 className="header-title text-center">{formatMoney(balance)}</h1>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${calculatePercentageSpent()}%` }}
            ></div>
          </div>
          <p className="progress-text">
            You've spent {calculatePercentageSpent().toFixed(6)}% of Elon's money
          </p>
        </div>
      </div>
      
      {/* Elon Musk Emote Animation */}
      {showEmote && (
        <div className="emote-container emote-animation">
          <div className="emote-wrapper">
            <img 
              src={elonMuskEmotes[showEmote]} 
              alt="Elon Musk laughing" 
              className="emote-image"
            />
          </div>
        </div>
      )}
      
      {/* Products */}
      <div className="products-container">
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="category">
            <h2 className="category-title">{category}</h2>
            <div className="products-grid">
              {categoryProducts.map(product => (
                <div key={product.id} className="product-item">
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image" 
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{formatMoney(product.price)}</p>
                    
                    <div className="product-actions">
                      <button
                        onClick={() => sellProduct(product)}
                        disabled={!cart[product.id] || cart[product.id]?.quantity <= 0}
                        className={`btn btn-sell ${
                          !cart[product.id] || cart[product.id]?.quantity <= 0
                            ? 'btn-sell-disabled'
                            : 'btn-sell-enabled'
                        }`}
                      >
                        Sell
                      </button>
                      
                      <input
                        type="text"
                        readOnly
                        value={cart[product.id] ? cart[product.id].quantity : 0}
                        className="quantity-input"
                      />
                      
                      <button
                        onClick={() => buyProduct(product)}
                        disabled={product.price > balance}
                        className={`btn btn-buy ${
                          product.price > balance
                            ? 'btn-buy-disabled'
                            : 'btn-buy-enabled'
                        }`}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Receipt at Bottom */}
      {Object.keys(cart).length > 0 && (
        <div className="receipt">
          <div className="receipt-container">
            <h3 className="receipt-title">Your Receipt</h3>
            <div className="receipt-items">
              <table className="receipt-table">
                <tbody>
                  {Object.values(cart).map((item) => (
                    <tr key={item.product.id} className="receipt-item">
                      <td className="receipt-item-name">{item.product.name}</td>
                      <td className="receipt-item-quantity">x{item.quantity}</td>
                      <td className="receipt-item-price">
                        {item.product.price < 1000 
                          ? `$${item.totalPrice}` 
                          : formatCompactMoney(item.totalPrice)}
                      </td>
                    </tr>
                  ))}
                  <tr className="receipt-total-row">
                    <td className="receipt-total-label">TOTAL</td>
                    <td></td>
                    <td className="receipt-total-price">{formatCompactMoney(calculateReceiptTotal())}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpendElonMuskMoney;