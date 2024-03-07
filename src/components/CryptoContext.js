// TwoBoxes.js
import React from 'react';
import TopContent from './TopContent';
import TrendingCoins from './TrendingCoins';


const CryptoContext = () => {
  return (
    <div className="container">
      <div className="left-box">
        Left Box
      </div>
      <div className="right-box">
        <TopContent />
        <TrendingCoins />
      </div>
    </div>
  );
};

export default CryptoContext;