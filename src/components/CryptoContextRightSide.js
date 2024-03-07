import React from 'react'

function CryptoContextRightSide() {
  return (
    <div class="bg-gray-300 h-auto md:h-auto col-span-1 md:col-span-1 md:w-30">
    {/* <!-- First section --> */}
    <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">First Section Heading</h2>
        <p class="text-gray-600 mb-4">Some paragraph content goes here.</p>
        <img src="image-url.jpg" alt="Image" class="w-full mb-4" />
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
            Get Started
        </button>
    </div>
    {/* <!-- Second section --> */}
    <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">Trending Coins (24h)</h2>
        {/* <!-- Fetch 3 coins using JavaScript and display them here --> */}
        <div id="trendingCoins"></div>
    </div>
</div>


  )
}

export default CryptoContextRightSide