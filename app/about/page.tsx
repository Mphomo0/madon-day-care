'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section } from '@/components/Section';
import { motion } from 'motion/react';
import { Heart, Target, Eye, Award, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">About Madon Daycare</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A legacy of love, learning, and nurturing growth since 2014.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-sm font-semibold">
              <Heart size={16} fill="currentColor" />
              <span>Our Story</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Over 10 Years of Nurturing Excellence</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in 2014, Madon Daycare and Aftercare Centre began with a simple mission: to provide a home away from home for children in our community. What started as a small group of children has grown into a vibrant center known for its academic excellence and warm environment.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We understand that the early years are the most critical for a child&apos;s development. That&apos;s why we&apos;ve assembled a team of dedicated professionals who are not just teachers, but mentors and caregivers who truly love what they do.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-2xl text-blue-500">500+</h4>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Happy Graduates</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-2xl text-emerald-500">15+</h4>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Expert Staff</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/kids-classroom/800/800"
              alt="Our founder and team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="daycare-card p-10 space-y-6"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Target size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To provide high-quality early childhood education and care in a safe, nurturing, and stimulating environment. We aim to foster a love for learning and help each child reach their full potential socially, emotionally, and academically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="daycare-card p-10 space-y-6"
          >
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Eye size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the leading childcare provider in the region, recognized for our innovative curriculum, exceptional staff, and commitment to the holistic development of every child who passes through our doors.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Curriculum Overview */}
      <Section 
        title="Our Curriculum"
        subtitle="We follow a balanced approach that combines structured learning with creative exploration."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Cognitive Development',
              desc: 'Focusing on problem-solving, language skills, and early literacy through interactive play and guided activities.',
              icon: BookOpen,
              color: 'blue'
            },
            {
              title: 'Social & Emotional Growth',
              desc: 'Helping children build confidence, empathy, and social skills through group activities and positive reinforcement.',
              icon: Users,
              color: 'emerald'
            },
            {
              title: 'Physical & Creative Play',
              desc: 'Encouraging fine and gross motor skills through outdoor play, arts and crafts, and music sessions.',
              icon: Award,
              color: 'amber'
            }
          ].map((item, i) => (
            <div key={item.title} className="space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-500`}>
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-xl">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
