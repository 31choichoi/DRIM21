import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Review from '../components/Review';
import InquiryForm from '../components/InquiryForm';
import { Footer, Stats } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Review />
      
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 font-sans">Contact Inquiry</p>
            <h2 className="text-6xl font-black text-black leading-[1] tracking-tighter uppercase mb-6">Let's Talk.</h2>
            <div className="w-16 h-[2px] bg-black mx-auto" />
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
