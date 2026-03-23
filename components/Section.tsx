'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export function Section({ children, className, id, title, subtitle, centered = true }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className={cn('mb-16 space-y-4', centered && 'text-center max-w-2xl mx-auto')}>
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-5xl font-bold tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'orange';
  delay?: number;
}

export function ServiceCard({ title, description, icon, color, delay = 0 }: ServiceCardProps) {
  const colorMap = {
    blue: 'bg-blue-900/20 text-blue-500',
    emerald: 'bg-emerald-900/20 text-emerald-500',
    amber: 'bg-amber-900/20 text-amber-500',
    rose: 'bg-rose-900/20 text-rose-500',
    indigo: 'bg-indigo-900/20 text-indigo-500',
    orange: 'bg-orange-900/20 text-orange-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="daycare-card p-8 group"
    >
      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', colorMap[color])}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
