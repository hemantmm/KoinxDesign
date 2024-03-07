import React, { useState, useEffect } from 'react';
import {TrendingDown,TrendingUp} from '../icons/icon'

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        // console.log(response.);
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3)); // Limit to top three trending coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
        setError('Error fetching trending coins');
      }
    };

    fetchTrendingCoins();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="trending-coins">
      <h2>Top Trending Coins</h2>
      <ul>
        {trendingCoins.map((coin, index) => (
            <div className='flex justify-between'>
          <li key={index}>
            <img src={coin.item.small} alt={coin.item.name} />
            <span>{coin.item.name} ({coin.item.symbol}):</span>
          </li>
          <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400': 'text-green-400'}`}>
                 {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp /> }
                 {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
      </span>
          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
