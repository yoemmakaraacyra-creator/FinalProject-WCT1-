import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if needed

export default function BuyModal({ isOpen, onClose, user, product }) {
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirmPurchase = async () => {
    setLoading(true);

    try {
      await addDoc(collection(db, 'orders'), {
        userId: user ? user.uid : 'guest',
        userEmail: user ? user.email : 'guest@example.com',
        productTitle: product?.title || 'Unknown Product',
        productPrice: product?.price || 0,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      setOrderConfirmed(true);
    } catch (error) {
      console.error('Error saving order to Firestore:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full text-center relative text-white">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          ✕
        </button>

        {!orderConfirmed ? (
          <div>
            <h2 className="text-xl font-bold mb-2">Confirm Purchase</h2>
            <p className="text-zinc-400 mb-4 text-sm">
              Are you sure you want to purchase <span className="text-cyan-400 font-semibold">{product?.title || 'this item'}</span>?
            </p>
            <button
              onClick={handleConfirmPurchase}
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 rounded-lg transition-all"
            >
              {loading ? 'Processing...' : 'Confirm Order'}
            </button>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-zinc-400 text-sm mb-6">
              Your gear is locked in! We are preparing your order for fast shipping.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 rounded-lg transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}