'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Enrollment Form', href: '/enroll' },
];

const services = [
  { name: 'Daycare (3m - Grade R)', href: '/services#daycare' },
  { name: 'Aftercare (Grade 1-7)', href: '/services#aftercare' },
  { name: 'Homework Assistance', href: '/services#aftercare' },
  { name: 'Transportation', href: '/services#transport' },
  { name: 'Nutrition & Meals', href: '/services#meals' },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Madon<span className="text-blue-500">Daycare</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing a safe, nurturing, and structured environment for your children to grow, learn, and play. With over 10 years of experience in early childhood development.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full text-blue-500 hover:scale-110 transition-transform shadow-sm">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full text-pink-500 hover:scale-110 transition-transform shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full text-sky-400 hover:scale-110 transition-transform shadow-sm">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-slate-400 hover:text-blue-500 transition-colors text-sm">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="text-slate-400 hover:text-blue-500 transition-colors text-sm">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={20} className="text-blue-500 shrink-0" />
              <span>123 Sunshine Avenue, Nurture Valley, Johannesburg, 2000</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={20} className="text-blue-500 shrink-0" />
              <span>+27 11 123 4567</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail size={20} className="text-blue-500 shrink-0" />
              <span>info@madondaycare.co.za</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <p>© {currentYear} Madon Daycare & Aftercare. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
