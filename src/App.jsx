import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

import AppNavbar from './components/AppNavbar';
import LoginModal from './components/LoginModal';
import BuyModal from './components/BuyModal';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ShopView from './views/ShopView';
import ServicesView from './views/ServicesView';
import ContactView from './views/ContactView';
import AdminView from './views/AdminView';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBuy, setShowBuy] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const adminEmail = "yoemmakaraacyra@gmail.com";
        const isUserAdmin = currentUser.email?.toLowerCase() === adminEmail;
        const userRef = doc(db, "users", currentUser.uid);

        try {
          const docSnap = await getDoc(userRef);

          if (!docSnap.exists()) {
            await setDoc(userRef, {
              email: currentUser.email,
              role: isUserAdmin ? 'admin' : 'user',
              createdAt: new Date()
            });
          }

          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            role: isUserAdmin ? 'admin' : (docSnap.data()?.role || 'user')
          });
        } catch (err) {
          console.error("Error fetching user data from Firestore:", err);
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            role: isUserAdmin ? 'admin' : 'user'
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const [products, setProducts] = useState([
    { id: 1, category: "football", title: "Umbro X1", price: 344.99, image: "/image/Umbro X1.png" },
    { id: 2, category: "football", title: "Nike Mercurial", price: 355.99, image: "/image/mercurial-blue.png" },
    { id: 3, category: "football", title: "adidas X", price: 288.55, image: "/image/adidas X.png" },
    { id: 4, category: "football", title: "Skechers SKX", price: 199.99, image: "/image/skechers SKX.png" },
    { id: 5, category: "football", title: "adidas F50", price: 666.99, image: "/image/adidas F50.png" },
    { id: 6, category: "football", title: "adidas Predator", price: 440.99, image: "/image/adidas Predator.png" },
    { id: 7, category: "football", title: "Lotto", price: 233.99, image: "/image/Lotto.png" },
    { id: 8, category: "football", title: "Mizuno", price: 125.99, image: "/image/Mizuno.png" },
    { id: 9, category: "football", title: "Nike Phantom", price: 567.99, image: "/image/Nike Phantom.png" },
    { id: 10, category: "football", title: "Puma Ultra Ultimate", price: 206.99, image: "/image/Puma Ultra Ultimate.png" },
    { id: 11, category: "running", title: "Nike Pegasus 41", price: 139.99, image: "/image/nike-pegasus.png" },
    { id: 12, category: "running", title: "adidas Ultraboost Light", price: 189.99, image: "/image/ultraboost.png" },
    { id: 13, category: "running", title: "Puma Velocity Nitro 3", price: 129.99, image: "/image/puma-velocity.png" },
    { id: 14, category: "running", title: "Asics Gel-Nimbus 26", price: 159.99, image: "/image/asics-nimbus.png" },
    { id: 15, category: "running", title: "Brooks Ghost 15", price: 139.99, image: "/image/brooks-ghost.png" },
    { id: 16, category: "running", title: "Hoka Clifton 9", price: 144.99, image: "/image/hoka-clifton.png" },
    { id: 17, category: "running", title: "Saucony Endorphin Speed 3", price: 169.99, image: "/image/saucony-speed.png" },
    { id: 18, category: "running", title: "New Balance Fresh Foam X", price: 159.99, image: "/image/nb-freshfoam.png" },
    { id: 19, category: "running", title: "Mizuno Wave Rider 27", price: 139.99, image: "/image/mizuno-waverider.png" },
    { id: 20, category: "running", title: "On Cloudmonster 2", price: 206.99, image: "/image/on-cloudmonster.png" },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-cyan-400 flex items-center justify-center font-bold">
        Loading Authentication...
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans">
        <AppNavbar 
          user={user} 
          onOpenLogin={() => setShowLogin(true)} 
          onLogout={handleLogout} 
        />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route 
              path="/shop" 
              element={<ShopView products={products} onOpenBuy={() => setShowBuy(true)} />} 
            />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/contact" element={<ContactView />} />

            <Route 
              path="/admin" 
              element={
                user && user.role === 'admin' ? (
                  <AdminView 
                    products={products} 
                    onAddProduct={handleAddProduct} 
                    onDeleteProduct={handleDeleteProduct} 
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
          </Routes>
        </main>

        <LoginModal 
          isOpen={showLogin} 
          onClose={() => setShowLogin(false)} 
        />
        <BuyModal 
          isOpen={showBuy} 
          onClose={() => setShowBuy(false)} 
        />
      </div>
    </Router>
  );
}