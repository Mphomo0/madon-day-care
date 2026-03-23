'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section, ServiceCard } from '@/components/Section';
import { motion } from 'motion/react';
import { 
  Baby, 
  Clock, 
  Bus, 
  Utensils, 
  GraduationCap, 
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Our Services</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive care and education programs tailored to every stage of your child&apos;s growth.
          </p>
        </div>
      </section>

      {/* Daycare Section */}
      <Section id="daycare" title="Daycare Program" subtitle="3 Months to Grade R">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="daycare-card p-8 border-l-4 border-l-rose-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-xl flex items-center justify-center">
                  <Baby size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold">Infant & Toddler Care</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Our infant program provides a safe, nurturing, and stimulating environment for babies from 3 months old. We focus on sensory exploration and building secure attachments.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Personalized care plans', 'Sensory play activities', 'Safe sleep environment', 'Daily progress logs'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="daycare-card p-8 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold">Preschool & Grade R</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Our preschool program prepares children for primary school through a structured curriculum that balances academic learning with social development.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Early literacy & numeracy', 'Social skills development', 'Creative arts & crafts', 'Outdoor play & sports'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/kids-learning/800/800"
              alt="Daycare activities"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Aftercare Section */}
      <Section id="aftercare" title="Aftercare Program" subtitle="Grade 1 to Grade 7" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/kids-homework/800/800"
              alt="Aftercare homework help"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="daycare-card p-8 border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold">Homework Assistance</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                We provide a quiet, supervised environment for primary school students to complete their homework and study for exams. Our staff is available to provide guidance and support.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Supervised study sessions', 'Subject-specific help', 'Exam preparation', 'Educational games'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="daycare-card p-8 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-500 rounded-xl flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold">Holiday Programs</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                During school holidays, we offer fun and engaging programs filled with activities, excursions, and creative workshops to keep your children entertained and learning.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Themed activity weeks', 'Educational excursions', 'Arts & crafts workshops', 'Sports & team games'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section title="Additional Services" subtitle="We go the extra mile to support busy families.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Transportation"
            description="Safe and reliable school pick-up and drop-off services within a 10km radius of our center."
            icon={<Bus size={28} />}
            color="orange"
          />
          <ServiceCard
            title="Nutrition & Meals"
            description="Freshly prepared, balanced meals and snacks served daily, catering to all dietary requirements."
            icon={<Utensils size={28} />}
            color="emerald"
            delay={0.1}
          />
          <ServiceCard
            title="Emergency Care"
            description="Flexible daily care and emergency bookings for parents who need short-term childcare solutions."
            icon={<AlertCircle size={28} />}
            color="rose"
            delay={0.2}
          />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
