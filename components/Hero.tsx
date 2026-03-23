'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Users, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800/50 rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-semibold">
            <Star size={16} fill="currentColor" />
            <span>Nurturing the Leaders of Tomorrow</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
            Where <span className="text-blue-500">Learning</span> is Fun and <span className="text-emerald-500">Growth</span> is Natural
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
            Providing a safe, loving, and structured environment for children from 3 months to Grade 7. Our curriculum focuses on cognitive, social, and emotional development.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/enroll" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Enroll Your Child
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-500">
                <Shield size={20} />
                <span className="font-bold text-xl">100%</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Safe Environment</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-500">
                <Users size={20} />
                <span className="font-bold text-xl">10+</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Qualified Staff</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-500">
                <Star size={20} />
                <span className="font-bold text-xl">10y+</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://picsum.photos/seed/kids-playing/800/800"
              alt="Happy children learning"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-slate-800 p-4 rounded-2xl shadow-lg border border-slate-700 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-bold">Top Rated</p>
              <p className="text-[10px] text-slate-500">Preschool 2024</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-2xl shadow-lg border border-slate-700 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-bold">Loving Care</p>
              <p className="text-[10px] text-slate-500">Nurturing Growth</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
