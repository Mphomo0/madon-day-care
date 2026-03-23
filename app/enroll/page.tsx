'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Section } from '@/components/Section';
import { motion } from 'motion/react';
import { 
  User, 
  Baby, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Heart, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const steps = [
  { id: 1, name: 'Parent Info', icon: User },
  { id: 2, name: 'Child Info', icon: Baby },
  { id: 3, name: 'Service Selection', icon: Heart },
  { id: 4, name: 'Review & Submit', icon: CheckCircle2 },
];

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Enrollment Form</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join our family today. Complete the form below to start your child&apos;s journey with us.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="daycare-card p-12 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold">Enrollment Submitted!</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Thank you for choosing Madon Daycare. We&apos;ve received your enrollment application and our admissions team will contact you within 48 hours to schedule a visit.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => window.location.href = '/'}
                  className="btn-primary"
                >
                  Return to Home
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {/* Stepper */}
              <div className="flex items-center justify-between px-4">
                {steps.map((step, i) => (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center gap-2 relative">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        currentStep >= step.id 
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        <step.icon size={24} />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest hidden sm:block ${
                        currentStep >= step.id ? 'text-blue-500' : 'text-slate-400'
                      }`}>
                        {step.name}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                        currentStep > step.id ? 'bg-blue-500' : 'bg-slate-100 dark:bg-slate-800'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Form Content */}
              <div className="daycare-card p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-display text-2xl font-bold mb-8">Parent / Guardian Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="tel" placeholder="+27 11 123 4567" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Home Address</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="text" placeholder="123 Sunshine Ave" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-display text-2xl font-bold mb-8">Child&apos;s Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Child&apos;s Full Name</label>
                          <div className="relative">
                            <Baby className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="text" placeholder="Little Doe" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Date of Birth</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input required type="date" className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Gender</label>
                          <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Medical Conditions (Optional)</label>
                          <input type="text" placeholder="e.g. Allergies" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-display text-2xl font-bold mb-8">Service Selection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Primary Program</label>
                          <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                            <option>Daycare (Full Day)</option>
                            <option>Daycare (Half Day)</option>
                            <option>Aftercare Only</option>
                            <option>Holiday Program Only</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Transportation Needed?</label>
                          <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                            <option>No</option>
                            <option>Yes (Pick-up only)</option>
                            <option>Yes (Drop-off only)</option>
                            <option>Yes (Both ways)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Preferred Start Date</label>
                          <input required type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-8"
                    >
                      <h3 className="font-display text-2xl font-bold mb-8">Review & Submit</h3>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 space-y-4">
                        <div className="flex items-center gap-3 text-emerald-500">
                          <Shield size={20} />
                          <span className="text-sm font-bold uppercase tracking-widest">Privacy & Security</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          By submitting this form, you agree to our terms of service and privacy policy. We will treat your family&apos;s information with the utmost care and confidentiality.
                        </p>
                        <div className="flex items-center gap-2">
                          <input required type="checkbox" id="terms" className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500" />
                          <label htmlFor="terms" className="text-xs font-medium text-slate-600 dark:text-slate-400">
                            I agree to the terms and conditions.
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="btn-outline flex items-center gap-2 disabled:opacity-0"
                    >
                      <ArrowLeft size={20} />
                      Previous
                    </button>
                    
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary flex items-center gap-2"
                      >
                        Next Step
                        <ArrowRight size={20} />
                      </button>
                    ) : (
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="btn-primary flex items-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Enrollment
                            <CheckCircle2 size={20} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
