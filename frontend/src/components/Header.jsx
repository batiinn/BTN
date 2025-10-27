import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6 text-sm">
          <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
            <Phone size={14} />
            <span>{companyInfo.phone}</span>
          </a>
          <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
            <Mail size={14} />
            <span>{companyInfo.email}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            <span className="text-amber-600">BM</span> İnşaat
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-slate-700 hover:text-amber-600 transition-colors font-medium relative ${
                  isActive(item.path) ? 'text-amber-600' : ''
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 hover:text-amber-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-slate-700 hover:text-amber-600 transition-colors ${
                  isActive(item.path) ? 'text-amber-600 font-semibold' : ''
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
