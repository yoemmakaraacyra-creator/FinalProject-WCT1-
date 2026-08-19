import React from 'react';

export default function ServicesView() {
  const services = [
    { title: 'Custom Boot Fitting', desc: 'Professional boot size optimization and molding for peak match-day comfort.' },
    { title: 'Stud Replacement', desc: 'Soft ground, firm ground, and artificial turf stud replacement and maintenance.' },
    { title: 'Express Delivery', desc: 'Worldwide priority shipping for order fulfillments within 48 hours.' }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto text-white">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-cyan-400">Our Pro Services</h2>
        <p className="text-zinc-400 text-xs sm:text-sm">Complete performance care for professional and tactical footwear.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {services.map((s, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{s.title}</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}