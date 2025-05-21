import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const MainLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar toggleSidebar={toggleMobileMenu} isSidebarOpen={isMobileMenuOpen} />
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 mt-16 bg-white p-4">
          <nav className="flex flex-col space-y-4">
            <a href="/pricing" className="text-neutral-700 hover:text-primary-600 transition py-2 border-b border-neutral-100">
              Pricing
            </a>
            <a href="#features" className="text-neutral-700 hover:text-primary-600 transition py-2 border-b border-neutral-100">
              Features
            </a>
            <a href="#testimonials" className="text-neutral-700 hover:text-primary-600 transition py-2 border-b border-neutral-100">
              Testimonials
            </a>
            <a href="/dashboard" className="text-primary-600 font-medium py-2 border-b border-neutral-100">
              Log In
            </a>
            <a href="/dashboard" className="text-primary-700 font-medium">
              Try it Free
            </a>
          </nav>
        </div>
      )}
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};