import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppNavbar({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-black tracking-wider text-cyan-500 hover:text-cyan-300 transition-colors"
        >
          
        Pro:Direct Sport

        </Link>
        <div className="hidden md:flex items-center gap-6 text-xl font-medium">
          <Link to="/" className="text-zinc-400 hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/about" className="text-zinc-400 hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/shop" className="text-zinc-400 hover:text-cyan-400 transition-colors">Shop</Link>
          <Link to="/admin" className="text-zinc-400 hover:text-cyan-400 transition-colors">Admin</Link>
          <Link to="/services" className="text-zinc-400 hover:text-cyan-400 transition-colors">Services</Link>
          <Link to="/contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">Contact</Link>
          
          <button 
            onClick={onOpenLogin} 
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xl px-6 py-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer ml-2"
          >
            Login
          </button>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white text-2xl p-1 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-4 text-sm font-medium">
          <Link to="/" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">About</Link>
          <Link to="/shop" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">Shop</Link>
          <Link to="/services" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">Contact</Link>
          <Link to="/admin" onClick={closeMenu} className="text-zinc-300 hover:text-cyan-400 transition-colors py-1">Admin</Link>
          <button 
            onClick={() => { closeMenu(); onOpenLogin(); }} 
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5 rounded-lg transition-all text-center mt-2"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}