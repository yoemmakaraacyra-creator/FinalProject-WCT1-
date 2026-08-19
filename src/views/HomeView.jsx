import React from 'react';

export default function HomeView({ onExplore }) {

  const brands = [
    { name: 'adidas', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adidas.svg' },
    { name: 'Nike', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nike.svg' },
    { name: 'Puma', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/puma.svg' },
    { name: 'New Balance', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/newbalance.svg' },
    { name: 'Under Armour', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/underarmour.svg' },
  ];

  const categoryColumns = [
    [
      { label: 'Football Boots', link: '#' },
      { label: 'Futsal Shoes', link: '#' },
      { label: 'Haaland Boots', link: '#' },
      { label: 'Mbappé Boots', link: '#' },
    ],
    [
      { label: 'Lamine Yamal Boots', link: '#' },
      { label: 'adidas Football Boots', link: '#' },
      { label: 'Nike Football Boots', link: '#' },
      { label: 'Footballs', link: '#' },
    ],
    [
      { label: "Kids' Football Boots", link: '#' },
      { label: "Kids' Goalkeeper Gloves", link: '#' },
      { label: 'Kids Futsal Shoes', link: '#' },
      { label: 'Kids Apparel', link: '#' },
    ],
    [
      { label: 'Goalkeeper Gloves', link: '#' },
      { label: 'Real Madrid Jerseys', link: '#' },
      { label: 'FC Barcelona Jerseys', link: '#' },
      { label: 'Atlético de Madrid Jerseys', link: '#' },
    ],
    [
      { label: 'Raincoats', link: '#' },
      { label: 'Shin Pads', link: '#' },
      { label: 'Goalkeeper Apparel', link: '#' },
      { label: 'Black Friday', link: '#', highlight: true },
    ],
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between overflow-hidden">
      
      <section className="relative min-h-[85vh] w-full flex items-center justify-center text-center px-4 sm:px-6">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>

      <section className="relative z-20 bg-zinc-950 border-t border-zinc-900 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-zinc-900">
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {brands.map((brand, idx) => (
                <div key={idx} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-6 sm:h-8 w-auto invert" 
                  />
                </div>
              ))}
            </div>

            <button className="text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer">
              See all
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-8">
            {categoryColumns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-2.5">
                {col.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.link}
                    className={`text-xs transition-colors ${
                      item.highlight 
                        ? 'font-bold text-cyan-400 hover:text-cyan-300' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}