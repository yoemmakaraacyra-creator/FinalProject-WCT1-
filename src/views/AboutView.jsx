import React from 'react';

export default function AboutView() {
  const values = [
    {
      title: 'Quality First',
      badge: 'Essential',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      description: 'We believe in offering only the highest quality footwear. Each pair undergoes rigorous checks to ensure durability, performance, and comfort on the pitch.',
      points: ['Premium materials', 'Expert craftsmanship', 'Thorough quality control']
    },
    {
      title: 'Customer Focus',
      badge: 'Priority',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      description: 'Our athletes are at the heart of everything we do. We strive to provide exceptional service, expert fitting advice, and a seamless shopping experience.',
      points: ['Personalized service', 'Expert fitting advice', 'Customer satisfaction guarantee']
    },
    {
      title: 'Sustainability',
      badge: 'Commitment',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      description: 'We are committed to reducing our environmental impact through responsible sourcing and eco-conscious business practices across our product line.',
      points: ['Eco-friendly packaging', 'Sustainable materials', 'Ethical manufacturing']
    }
  ];

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto text-white">
    
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold text-xl   uppercase tracking-widest mb-4">
          Our Story
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-white">
          Empowering Athletes Worldwide
        </h1>
        <p className="text-zinc-400 leading-relaxed text-sm sm:text-base md:text-lg">
          Founded with a passion for high-performance sports, Nightmode brings
          elite football boots and precision running footwear to modern
          athletes. Our commitment is rooted in quality, innovation, and
          relentless drive.
        </p>
      </div>

     
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 sm:mb-10 text-cyan-400">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {item.title}
                </h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 pt-4 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">•</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

 
      <div className="mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-3">
            Engineered For Performance
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Understanding the structural differences between tactical pitch
            footwear and marathon-ready cushioning.
          </p>
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-zinc-300 min-w-600px">
              <thead className="bg-zinc-950 text-xs uppercase text-cyan-400 border-b border-zinc-800">
                <tr>
                  <th className="p-3 sm:p-4">Feature</th>
                  <th className="p-3 sm:p-4">Football Boots</th>
                  <th className="p-3 sm:p-4">Running Shoes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 sm:p-4 font-bold text-white">
                    Primary Focus
                  </td>
                  <td className="p-3 sm:p-4">
                    Traction, ball control, and rapid multi-directional pivots
                  </td>
                  <td className="p-3 sm:p-4">
                    Shock absorption, forward propulsion, and straight-line
                    comfort
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 sm:p-4 font-bold text-white">
                    Outsole / Base
                  </td>
                  <td className="p-3 sm:p-4">
                    Studs (FG, SG, AG) designed to dig into grass or turf
                  </td>
                  <td className="p-3 sm:p-4">
                    Flexible rubber treads engineered for pavement or track
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 sm:p-4 font-bold text-white">
                    Midsole Cushioning
                  </td>
                  <td className="p-3 sm:p-4">
                    Minimal foam to maximize ground feel and power transfer
                  </td>
                  <td className="p-3 sm:p-4">
                    Thick foam (EVA/TPU) for long-distance impact protection
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 sm:p-4 font-bold text-white">
                    Upper Construction
                  </td>
                  <td className="p-3 sm:p-4">
                    Textured synthetic or leather for grip and touch on the ball
                  </td>
                  <td className="p-3 sm:p-4">
                    Lightweight, breathable mesh/knit for maximum airflow
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Football Boots
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                •{" "}
                <strong className="text-zinc-200">
                  Traction & Stud Patterns:
                </strong>{" "}
                Specialized layouts for instant grip and acceleration.
              </li>
              <li>
                • <strong className="text-zinc-200">Ball Touch:</strong>{" "}
                High-friction uppers engineered for precision passing and
                control.
              </li>
              <li>
                • <strong className="text-zinc-200">Snug Fit:</strong>{" "}
                Second-skin lockdown fit to eliminate internal foot slippage.
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Running Shoes
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                • <strong className="text-zinc-200">Impact Absorption:</strong>{" "}
                Thick foam midsoles protect joints over long distances.
              </li>
              <li>
                • <strong className="text-zinc-200">Rocker Geometry:</strong>{" "}
                Curved soles guide the foot smoothly through every stride.
              </li>
              <li>
                • <strong className="text-zinc-200">Breathability:</strong> Mesh
                construction keeps feet cool during extended training.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}