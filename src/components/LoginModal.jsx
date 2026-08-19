import React, { useState } from 'react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    try {
      let userCredential;

      if (isRegistering) {
       
        userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, cleanPassword);
      } else {

        userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
      }

      const user = userCredential.user;

      const adminEmail = "yoemmakaraacyra@gmail.com";
      const role = user.email.toLowerCase() === adminEmail ? 'admin' : 'user';

      if (onLoginSuccess) {
        onLoginSuccess({
          uid: user.uid,
          email: user.email,
          role: role
        });
      }

      onClose();
    } catch (err) {
      console.error("Auth error:", err.code);
      if (err.code === 'auth/email-already-in-use') {
        setError('អ៊ីមែលនេះមានគេប្រើរួចហើយ (Email already in use)');
      } else if (err.code === 'auth/weak-password') {
        setError('ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ ខ្ទង់ (Password must be at least 6 characters)');
      } else if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        setError('អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវទេ (Invalid credentials)');
      } else {
        setError('មានបញ្ហាក្នុងការដំណើរការ (Authentication failed: ' + err.code + ')');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-black text-cyan-400 mb-6 text-center">
          {isRegistering ? 'Create Account' : 'Welcome Back'}
        </h2>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg text-sm transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-zinc-400">
          {isRegistering ? (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => { setIsRegistering(false); setError(''); }}
                className="text-cyan-400 hover:underline font-semibold cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => { setIsRegistering(true); setError(''); }}
                className="text-cyan-400 hover:underline font-semibold cursor-pointer"
              >
                Register
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}