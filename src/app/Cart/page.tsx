'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState('');
  
  // This is a simple cart structure - you might want to use state management like Redux or Context for a real app
  const cartItems = [
    {
      id: 1,
      name: 'Ronin Earbuds',
      price: 1000,
      quantity: 1,
      image: '/ronin.png'
    },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      setShowModal(true);
      setOrderStatus('processing');

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setOrderStatus('success');
      
      // Wait for 3 seconds before redirecting
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      router.push('/');
    } catch (error) {
      console.error('Checkout error:', error);
      setOrderStatus('error');
    }
  };

  return (
    <main className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">PKR {item.price}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button className="quantity-btn">-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="remove-btn">Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>PKR {calculateTotal()}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>PKR 150</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>PKR {calculateTotal() + 150}</span>
              </div>
              <button 
                className={`checkout-btn ${isCheckingOut ? 'processing' : ''}`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div className="checkout-modal">
          <div className="modal-content">
            {orderStatus === 'processing' && (
              <>
                <div className="loading-spinner"></div>
                <h2>Processing Your Order</h2>
                <p>Please wait while we process your payment...</p>
              </>
            )}
            {orderStatus === 'success' && (
              <>
                <div className="success-icon">✓</div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase!</p>
                <p>Redirecting to home page...</p>
              </>
            )}
            {orderStatus === 'error' && (
              <>
                <div className="error-icon">✕</div>
                <h2>Checkout Failed</h2>
                <p>Something went wrong. Please try again.</p>
                <button 
                  className="retry-btn"
                  onClick={() => {
                    setShowModal(false);
                    setIsCheckingOut(false);
                    setOrderStatus('');
                  }}
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart; 