import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });

      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
      <h2 className="text-xl font-bold mb-4 text-cyan-400">Contact Us</h2>
      {status && <p className="text-xs text-amber-400 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 bg-zinc-950 border border-zinc-800 rounded text-sm text-white"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 bg-zinc-950 border border-zinc-800 rounded text-sm text-white"
        />
        <textarea 
          placeholder="Your Message" 
          required 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 bg-zinc-950 border border-zinc-800 rounded text-sm text-white h-24"
        />
        <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-2 rounded text-sm">
          Send Message
        </button>
      </form>
    </div>
  );
}