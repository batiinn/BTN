import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Anasayfa' },
    { path: '/hakkimizda', label: 'Hakkımızda' },
    { path: '/hizmetler', label: 'Hizmetler' },
    { path: '/projeler', label: 'Projeler' },
    { path: '/haberler', label: 'Haberler' },
    { path: '/iletisim', label: 'İletişim' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-white shadow-md'
    }`}>
      {/* Top bar with gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6 text-sm relative z-10">
          <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-2 hover:text-amber-400 transition-all hover:scale-105">
            <Phone size={14} className="animate-pulse" />
            <span className="font-medium">{companyInfo.phone}</span>
          </a>
          <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2 hover:text-amber-400 transition-all hover:scale-105">
            <Mail size={14} />
            <span className="font-medium">{companyInfo.email}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with gradient */}
          <Link to="/" className="text-3xl font-black relative group">
            <span className="relative z-10 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              BM
            </span>
            <span className="text-slate-800 ml-1 font-bold" style={{fontFamily: "'Playfair Display', serif"}}>
              İnşaat
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-slate-700 font-semibold transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-amber-600' 
                    : 'hover:text-amber-600'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <span className="absolute inset-0 bg-amber-50 rounded-lg -z-0"></span>
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button with animation */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 hover:text-amber-600 transition-all p-2 hover:bg-amber-50 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu with slide animation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeInUp">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                  isActive(item.path) 
                    ? 'text-amber-600 bg-amber-50 font-bold' 
                    : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
