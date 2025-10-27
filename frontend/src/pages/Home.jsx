import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { projects, services, news, clients } from '../mock';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroProjects = projects.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroProjects.length]);

  return (
    <div>
      {/* Hero - Ultra minimal */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {heroProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          </div>
        ))}
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-8 opacity-70">Premium İnşaat Çözümleri</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none">
            {heroProjects[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl mx-auto font-light">
            {heroProjects[currentSlide].description}
          </p>
          <Link
            to="/projeler"
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors"
          >
            <span>Projeleri Keşfet</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Minimal indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${
                index === currentSlide 
                  ? 'w-12 h-px bg-white' 
                  : 'w-6 h-px bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services - Minimal Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4 text-gray-500">Hizmetlerimiz</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Profesyonel Çözümler</h2>
            <p className="text-xl text-gray-600 font-light">
              İnşaat sektöründe uzman kadromuzla size özel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white p-12 hover:bg-gray-50 transition-colors group"
                >
                  <IconComponent className="mb-6 text-black" size={32} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Detaylar</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase mb-6 opacity-70">Neden BM İnşaat</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Kalite ve <br />Güvenilirlik
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                Yılların deneyimi ve uzman kadromuzla projelerinizi en yüksek standartlarda tamamlıyoruz.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-12 bg-white mt-1"></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Uzman Ekip</h4>
                    <p className="text-gray-400 font-light">Sertifikalı profesyonellerden oluşan deneyimli kadro</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-12 bg-white mt-1"></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Premium Malzeme</h4>
                    <p className="text-gray-400 font-light">En kaliteli markalardan temin edilen ürünler</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-12 bg-white mt-1"></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Garantili Teslimat</h4>
                    <p className="text-gray-400 font-light">Belirlenen sürede ve tam kalite ile proje teslimi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-white/10 p-10 hover:bg-white hover:text-black transition-all group">
                <div className="text-6xl font-bold mb-3">500+</div>
                <div className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100">Tamamlanan Proje</div>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white hover:text-black transition-all group mt-12">
                <div className="text-6xl font-bold mb-3">14+</div>
                <div className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100">Yıllık Deneyim</div>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white hover:text-black transition-all group">
                <div className="text-6xl font-bold mb-3">100+</div>
                <div className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100">Mutlu Müşteri</div>
              </div>
              <div className="border border-white/10 p-10 hover:bg-white hover:text-black transition-all group mt-12">
                <div className="text-6xl font-bold mb-3">%98</div>
                <div className="text-sm font-medium tracking-wide opacity-70 group-hover:opacity-100">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Masonry Style */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4 text-gray-500">Portföy</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Son Projeler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-gray-100">
            {projects.slice(0, 8).map((project) => (
              <div key={project.id} className="relative group overflow-hidden bg-white aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-white/70 mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projeler"
              className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
            >
              <span>Tüm Projeler</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* News - Clean Cards */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4 text-gray-500">Blog</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Son Haberler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {news.slice(0, 3).map((item) => (
              <div key={item.id} className="group">
                <div className="overflow-hidden mb-6 bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <p className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-4">{item.date}</p>
                <h3 className="text-2xl font-bold mb-4 group-hover:opacity-70 transition-opacity">{item.title}</h3>
                <p className="text-gray-600 mb-6 font-light">{item.excerpt}</p>
                <Link to="/haberler" className="inline-flex items-center text-sm font-medium">
                  <span>Devamını Oku</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white border-y">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-medium tracking-wider uppercase text-gray-500 mb-12">Güvenilen Markalar</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center opacity-30">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-center">
                <img src={client.logo} alt={client.name} className="max-h-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Projenizi <br />Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Ücretsiz keşif ve detaylı fiyat teklifi için bizimle iletişime geçin
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            <span>İletişime Geçin</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
