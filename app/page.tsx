'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Section, ServiceCard } from '@/components/Section';
import Testimonials from '@/components/Testimonials';
import { motion } from 'motion/react';
import { 
  Baby, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Clock, 
  Bus, 
  Utensils, 
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <Section 
        title="Providing a Nurturing Environment"
        subtitle="At Madon Daycare, we believe that every child is unique and deserves a supportive environment where they can flourish at their own pace."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/kindergarten-kids/800/450"
              alt="Our classroom"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Why Choose Madon Daycare?</h3>
            <p className="text-slate-400 leading-relaxed">
              With over 10 years of experience, we have perfected our approach to early childhood development. Our center is more than just a daycare; it&apos;s a community where children feel safe, loved, and inspired to explore.
            </p>
            <ul className="space-y-4">
              {[
                'Qualified and passionate educators',
                'Safe and secure indoor & outdoor play areas',
                'Structured age-appropriate curriculum',
                'Nutritious meals prepared daily',
                'Regular progress reports for parents'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/about" className="btn-outline inline-flex items-center gap-2">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section 
        title="Our Core Highlights"
        subtitle="We focus on the holistic development of every child through our specialized programs."
        className="bg-slate-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Safe Environment"
            description="Our facilities are equipped with CCTV and secure access control to ensure your child's safety at all times."
            icon={<ShieldCheck size={28} />}
            color="blue"
          />
          <ServiceCard
            title="Qualified Staff"
            description="Our teachers are certified in early childhood development and first aid, providing expert care and guidance."
            icon={<Users size={28} />}
            color="emerald"
            delay={0.1}
          />
          <ServiceCard
            title="Structured Curriculum"
            description="We follow a comprehensive curriculum that balances academic learning with creative play and social interaction."
            icon={<BookOpen size={28} />}
            color="amber"
            delay={0.2}
          />
        </div>
      </Section>

      {/* Services Preview */}
      <Section 
        title="Our Specialized Services"
        subtitle="From infants to primary school students, we offer tailored care and education programs."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Daycare', icon: Baby, desc: '3 months to Grade R', color: 'rose' },
            { title: 'Aftercare', icon: Clock, desc: 'Grade 1 to Grade 7', color: 'indigo' },
            { title: 'Transport', icon: Bus, desc: 'Safe school pick-up', color: 'orange' },
            { title: 'Nutrition', icon: Utensils, desc: 'Healthy daily meals', color: 'emerald' },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="daycare-card p-6 text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 bg-blue-900/20 text-blue-500`}>
                <s.icon size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section 
        title="What Parents Say"
        subtitle="Don't just take our word for it. Here's what our community has to say about their experience."
        className="bg-slate-900/50"
      >
        <Testimonials />
      </Section>

      {/* FAQ Section */}
      <Section 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our daycare and aftercare services."
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'What are your operating hours?', a: 'We are open from 6:30 AM to 6:00 PM, Monday to Friday. We are closed on weekends and public holidays.' },
            { q: 'What age groups do you accept?', a: 'We accept children from 3 months old (infants) up to Grade 7 (aftercare).' },
            { q: 'Do you provide meals?', a: 'Yes, we provide nutritious, freshly prepared breakfast, lunch, and afternoon snacks daily.' },
            { q: 'Is transportation available?', a: 'Yes, we offer safe school pick-up and drop-off services within a 10km radius of our center.' },
            { q: 'How do I enroll my child?', a: 'You can start the enrollment process online through our "Enroll Now" page or visit our center for a physical form.' },
          ].map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="daycare-card p-6 group cursor-pointer"
            >
              <summary className="font-bold text-lg list-none flex items-center justify-between">
                {faq.q}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                {faq.a}
              </p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Ready to Join Our Family?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Enroll your child today and give them the foundation they deserve. Limited spots available for the upcoming term!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/enroll" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors w-full sm:w-auto">
                Start Enrollment
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-colors w-full sm:w-auto">
                Schedule a Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
