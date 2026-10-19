"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cream px-4">
      <div className="bg-white p-8 rounded-2xl shadow-card max-w-sm w-full">
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold bg-cream flex items-center justify-center font-serif text-xl font-bold text-wine mb-4 shadow-sm">
            R
          </div>
          <h1 className="font-serif text-2xl font-bold text-charcoal">Admin Login</h1>
          <p className="text-xs text-rose mt-1 font-sans tracking-widest uppercase">Raaji Ladies Fashion</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal-muted mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 border border-rose-soft/70 rounded-md focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal-muted mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 border border-rose-soft/70 rounded-md focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine transition-all"
              required
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-2.5 mt-2" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
}
