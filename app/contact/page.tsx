'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section } from '@/components/Section';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Baby } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    childName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', childName: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Get in touch with our team today.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you&apos;re looking to enroll your child or just want to learn more about our programs, our friendly team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Our Location', content: '123 Sunshine Avenue, Johannesburg, 2000', color: 'blue' },
                { icon: Phone, title: 'Phone Number', content: '+27 11 123 4567', color: 'emerald' },
                { icon: Mail, title: 'Email Address', content: 'info@madondaycare.co.za', color: 'amber' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-500`}>
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Map Placeholder */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin size={32} className="mx-auto text-slate-400" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Map Placeholder</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="daycare-card p-8 md:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <Send size={40} />
                  </div>
                  <h3 className="font-display text-3xl font-bold">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Parent Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Child&apos;s Name</label>
                      <div className="relative">
                        <Baby className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          required
                          type="text"
                          placeholder="Little Doe"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={formState.childName}
                          onChange={(e) => setFormState({ ...formState, childName: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          required
                          type="tel"
                          placeholder="+27 11 123 4567"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
