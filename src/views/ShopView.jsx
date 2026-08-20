import React, { useState } from 'react';

export default function ShopView({ products = [], onOpenBuy }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((item) => item.category === activeCategory);

  const baseUrl = import.meta.env.BASE_URL;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/200x150?text=No+Image";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-3">Our Collection</h1>
        <p className="text-zinc-400">Choose your favorite sports performance gear.</p>
        
        <div className="flex justify-center gap-3 mt-6">
          {['all', 'football', 'running'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold capitalize text-sm transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between hover:border-zinc-700 transition-all group"
          >
            <div className="w-full h-48 bg-white rounded-xl p-3 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={getImageUrl(product.image)}
                alt={product.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
                }}
              />
            </div>

            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                {product.category}
              </span>
              <h3 className="font-bold text-lg text-white mb-2 line-clamp-1">{product.title}</h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xl font-extrabold text-white">
                  ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                </span>
                <button
                  onClick={() => onOpenBuy(product)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}