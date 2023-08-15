import React from 'react';
import './scroll-arrow.css'

interface ScrollArrowProps {
  scrollToSection: () => void;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ scrollToSection }) => {
  return (
    <div className="scroll-arrow-container" onClick={scrollToSection}>
      <div className="scroll-arrow"></div>
    </div>
  );
};

export default ScrollArrow;
