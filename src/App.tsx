import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import FloatingBtn, { Footer } from './components/Footer';
import SEO from './components/SEO';
import AdminPanel from './components/AdminPanel';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <SEO />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
        <FloatingBtn />

        {/* Admin entry point hidden in a subtle way in the footer area */}
        <div className="bg-primary pt-0 pb-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-end">
            <AdminPanel />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
