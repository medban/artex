// src/components/ScrollToTopArrow.jsx
import React from 'react';

const ScrollToTopArrow = () => {
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          right: '45px',
          bottom: '200px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          padding: '20px',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTopArrow;
