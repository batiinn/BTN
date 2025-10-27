import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm' 
        : 'bg-white'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Minimal Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight text-black">
            BM İNŞAAT
          </Link>

          {/* Desktop menu - Ultra clean */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  isActive(item.path) 
                    ? 'text-black' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-black"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/iletisim"
            className="hidden md:block bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            İletişim
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t pt-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium ${
                  isActive(item.path) 
                    ? 'text-black' 
                    : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-black text-white px-6 py-2.5 text-sm font-medium text-center"
            >
              İletişim
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
