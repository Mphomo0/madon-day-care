'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Mail, Lock, Eye, EyeOff, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
              <Heart size={28} fill="currentColor" />
            </div>
          </Link>
          <h1 className="font-display text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Sign in to access your admin dashboard.</p>
        </div>

        <div className="daycare-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  type="email"
                  placeholder="admin@madondaycare.co.za"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
                <Link href="#" className="text-[10px] font-bold text-blue-500 hover:underline uppercase tracking-widest">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-2xl transition-all duration-200">
              <Chrome size={20} />
              <span className="text-sm font-bold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-2xl transition-all duration-200">
              <Github size={20} />
              <span className="text-sm font-bold">GitHub</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500">
          Not an admin? <Link href="/contact" className="text-blue-500 font-bold hover:underline">Contact us</Link> for enrollment queries.
        </p>
      </motion.div>
    </main>
  );
}
