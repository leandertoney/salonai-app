import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Search, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  
  // Determine if we're on the public-facing pages (landing, pricing, etc.)
  const isPublicPage = ['/'].includes(location.pathname);
  
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };
  
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };
  
  // For public pages, show landing page navigation
  if (isPublicPage) {
    return (
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-primary-600 flex items-center">
            SalonAI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/pricing" className="text-neutral-700 hover:text-primary-600 transition">
                Pricing
              </Link>
              <Link to="#features" className="text-neutral-700 hover:text-primary-600 transition">
                Features
              </Link>
              <Link to="#testimonials" className="text-neutral-700 hover:text-primary-600 transition">
                Testimonials
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Link to="/dashboard">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/dashboard">
                <Button>Try it Free</Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-neutral-700" onClick={toggleSidebar}>
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    );
  }
  
  // For logged-in pages (dashboard, etc.), show app navbar
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button 
            className="text-neutral-700 mr-2"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/dashboard" className="font-bold text-xl text-primary-600">
            SalonAI
          </Link>
        </div>
        
        <div className="hidden md:flex md:w-72 lg:w-96 relative">
          <input
            type="text"
            placeholder="Search clients, appointments..."
            className="w-full pl-9 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <Search className="absolute left-3 top-2.5 text-neutral-500" size={18} />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-neutral-100 relative"
              onClick={toggleNotifications}
              aria-label="Notifications"
            >
              <Bell size={20} className="text-neutral-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full"></span>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
                <div className="p-3 border-b border-neutral-200">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-3 border-b border-neutral-100 hover:bg-neutral-50">
                    <p className="text-sm font-medium">Emma Thompson checked in</p>
                    <p className="text-xs text-neutral-500">2 minutes ago</p>
                  </div>
                  <div className="p-3 border-b border-neutral-100 hover:bg-neutral-50">
                    <p className="text-sm font-medium">New appointment scheduled</p>
                    <p className="text-xs text-neutral-500">30 minutes ago</p>
                  </div>
                  <div className="p-3 border-b border-neutral-100 hover:bg-neutral-50">
                    <p className="text-sm font-medium">Your campaign "Spring Special" was sent</p>
                    <p className="text-xs text-neutral-500">2 hours ago</p>
                  </div>
                </div>
                <div className="p-2 text-center border-t border-neutral-200">
                  <button className="text-sm text-primary-600 hover:text-primary-700">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-2 rounded-full hover:bg-neutral-100 pl-2 pr-3 py-1"
              onClick={toggleProfileMenu}
              aria-label="User menu"
            >
              <img 
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="User avatar" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-neutral-800 hidden sm:inline-block">
                Jessica Smith
              </span>
              <ChevronDown size={16} className="text-neutral-500" />
            </button>
            
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
                <div className="py-1">
                  <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                    Profile Settings
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                    Business Settings
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                    Sign Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};