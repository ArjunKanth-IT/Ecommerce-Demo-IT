import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

export default function Banner() {
  return (
    <div className="banner-section">
      <img src={banner1} alt="Promo 1" className="banner" />
      <img src={banner2} alt="Promo 2" className="banner" />
    </div>
  );
}
