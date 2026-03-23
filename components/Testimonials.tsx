'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent of 4-year-old',
    content: 'Madon Daycare has been a blessing for our family. The staff is so caring and my daughter has grown so much socially and academically.',
    avatar: 'https://picsum.photos/seed/parent-avatar-1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Parent of Grade 2 student',
    content: 'The aftercare program is fantastic. They help with homework and provide a safe space for my son until I finish work. Highly recommend!',
    avatar: 'https://picsum.photos/seed/parent-avatar-2/100/100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Parent of 18-month-old',
    content: 'I was nervous about leaving my baby, but the teachers at Madon made me feel so comfortable. The daily updates are wonderful.',
    avatar: 'https://picsum.photos/seed/parent-avatar-3/100/100',
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="daycare-card p-8 relative overflow-hidden"
        >
          <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 dark:text-slate-800/50 -z-10" />
          <div className="flex gap-1 mb-6 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-8 leading-relaxed">
            &quot;{t.content}&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 dark:border-blue-900/30">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm">{t.name}</h4>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
