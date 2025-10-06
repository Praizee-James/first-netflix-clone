import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'}`}>
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition">My List</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button 
            className="text-white hover:text-gray-300 transition transform hover:scale-110"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Notification Icon with Badge */}
          <div className="relative">
            <button 
              className="text-white hover:text-gray-300 transition transform hover:scale-110"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          
          {/* Profile Dropdown */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-semibold">O</span>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;