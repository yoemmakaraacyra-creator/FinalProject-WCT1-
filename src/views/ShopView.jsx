import React, { useState } from "react";

export default function ShopView({ products = [], onOpenBuy }) {
  const [selectedCategory, setSelectedCategory] = useState("football");

  const filteredProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setSelectedCategory("football")}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
            selectedCategory === "football"
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          ⚽ Football Boots
        </button>
        <button
          onClick={() => setSelectedCategory("running")}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
            selectedCategory === "running"
              ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          🏃 Running Shoes
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between hover:border-zinc-700 transition-all group"
          >
            {/* White container lets JPEG product images display normally */}
            <div className="w-full h-48 bg-white rounded-xl mb-4 p-2 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
                }}
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-1 text-white">{product.title}</h3>
              <p className="text-cyan-400 font-extrabold text-xl mb-4">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={onOpenBuy}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 rounded-lg text-sm transition-all cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}