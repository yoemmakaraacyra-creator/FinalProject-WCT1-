import React from 'react';

export default function BuyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-sm sm:max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center text-white shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl transition-colors cursor-pointer"
        >
          &times;
        </button>
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400 text-2xl sm:text-3xl font-bold">
          ✓
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Order Confirmed!</h2>
        <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
          Your gear is locked in! We are preparing your order for fast shipping.
        </p>
        <button 
          onClick={onClose} 
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-lg text-sm transition-all cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}