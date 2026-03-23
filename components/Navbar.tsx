'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Madon<span className="text-blue-500">Daycare</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                pathname === link.href
                  ? 'text-blue-500'
                  : 'text-slate-400'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/enroll" className="btn-primary py-2 text-sm">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    pathname === link.href
                      ? 'text-blue-500'
                      : 'text-slate-400'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/enroll"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-4"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
