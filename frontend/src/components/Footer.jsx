import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">BM İNŞAAT</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              {companyInfo.slogan}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-gray-500">Sayfa</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors font-light">Anasayfa</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-600 hover:text-black transition-colors font-light">Hakkımızda</Link></li>
              <li><Link to="/hizmetler" className="text-gray-600 hover:text-black transition-colors font-light">Hizmetler</Link></li>
              <li><Link to="/projeler" className="text-gray-600 hover:text-black transition-colors font-light">Projeler</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-gray-500">Hizmetler</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>Asma Tavan</li>
              <li>Bölme Duvar</li>
              <li>Akustik Tavan</li>
              <li>Zemin İşlemleri</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-gray-500">İletişim</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li>{companyInfo.address}</li>
              <li><a href={`tel:${companyInfo.phone}`} className="hover:text-black transition-colors">{companyInfo.phone}</a></li>
              <li><a href={`mailto:${companyInfo.email}`} className="hover:text-black transition-colors">{companyInfo.email}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} BM İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-black transition-colors">Şartlar</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
