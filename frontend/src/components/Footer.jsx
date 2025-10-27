import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">BM</span>
              <span className="text-white"> İnşaat</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {companyInfo.slogan}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mr-3"></span>
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-all inline-flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-400 hover:text-amber-400 transition-all inline-flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-amber-400 transition-all inline-flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="text-gray-400 hover:text-amber-400 transition-all inline-flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Projeler
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mr-3"></span>
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Asma Tavan</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Bölme Duvar</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Akustik Tavan</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Zemin İşlemleri</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Boya Badana</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Tadilat</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mr-3"></span>
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 group">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <MapPin size={18} className="text-amber-400" />
                </div>
                <span className="pt-2">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Phone size={18} className="text-amber-400" />
                </div>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-amber-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 group">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} BM İnşaat. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Gizlilik Politikası</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500"></div>
    </footer>
  );
};

export default Footer;
