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

      {/* Why Choose Us - Enhanced with luxury design */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-amber-500/30">
                <Award className="text-amber-400" size={20} />
                <span className="text-amber-300 font-semibold">Güvenilir Partner</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                Neden <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">BM İnşaat?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Yılların deneyimi ve uzman kadromuzla projelerinizi en kaliteli şekilde hayata geçiriyoruz.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Uzman Ekip</h4>
                    <p className="text-gray-400 leading-relaxed">Alanında deneyimli ve sertifikalı profesyonellerden oluşan ekibimiz</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Kaliteli Malzeme</h4>
                    <p className="text-gray-400 leading-relaxed">Sadece güvenilir markalardan temin edilen kaliteli malzemeler</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Zamanında Teslimat</h4>
                    <p className="text-gray-400 leading-relaxed">Projelerinizi belirlenen sürede ve kaliteden ödün vermeden tamamlıyoruz</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Garanti ve Destek</h4>
                    <p className="text-gray-400 leading-relaxed">Tamamlanan projeler için garanti ve sürekli teknik destek</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-500/30">
                <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <TrendingUp className="mx-auto mb-4 text-white animate-float" size={48} />
                <div className="text-6xl font-black mb-3">500+</div>
                <div className="text-amber-100 font-semibold text-lg">Tamamlanan Proje</div>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-md p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 border border-white/20 hover:bg-white/15 mt-8">
                <Award className="mx-auto mb-4 text-amber-400 animate-float" size={48} style={{animationDelay: '0.5s'}} />
                <div className="text-6xl font-black mb-3">14+</div>
                <div className="text-gray-300 font-semibold text-lg">Yıllık Deneyim</div>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-md p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 border border-white/20 hover:bg-white/15">
                <Sparkles className="mx-auto mb-4 text-amber-400 animate-float" size={48} style={{animationDelay: '1s'}} />
                <div className="text-6xl font-black mb-3">100+</div>
                <div className="text-gray-300 font-semibold text-lg">Mutlu Müşteri</div>
              </div>
              <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 p-10 rounded-3xl text-center hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-500/30 mt-8">
                <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CheckCircle className="mx-auto mb-4 text-white animate-float" size={48} style={{animationDelay: '1.5s'}} />
                <div className="text-6xl font-black mb-3">%98</div>
                <div className="text-amber-100 font-semibold text-lg">Memnuniyet Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects - Enhanced Gallery */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="text-amber-600" size={20} />
              <span className="text-amber-800 font-semibold">Portföy</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Son Projelerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gerçekleştirdiğimiz projelerle sektörde fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 8).map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span className="text-sm font-semibold">Detayları Gör</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/projeler"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Tüm Projeleri Görüntüle</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="text-amber-600" size={20} />
              <span className="text-amber-800 font-semibold">Blog & Haberler</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Son Gelişmeler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              BM İnşaat'tan son haberler ve gelişmeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item, index) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-amber-600 font-bold text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.excerpt}</p>
                  <Link 
                    to="/haberler" 
                    className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-bold group-hover:translate-x-2 transition-all"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Enhanced */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Güvenilen Markalarla Çalışıyoruz
          </h2>
          <p className="text-center text-gray-600 mb-12">Prestijli projelerimizde tercih edilen partner</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-center group">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with luxury design */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Animated orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              <Sparkles className="text-white" size={20} />
              <span className="text-white font-semibold">Ücretsiz Keşif & Teklif</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
              Projeniz İçin <br />Hemen Teklif Alın
            </h2>
            <p className="text-2xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Uzman ekibimiz projeniz için en uygun çözümü sunmaya hazır
            </p>
            <Link
              to="/iletisim"
              className="group inline-flex items-center space-x-3 bg-white text-amber-600 hover:bg-gray-50 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              <span>Hemen İletişime Geçin</span>
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-white">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-white/80 text-sm">Destek Hattı</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-black mb-2">%100</div>
                <div className="text-white/80 text-sm">Güvence</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-black mb-2">Ücretsiz</div>
                <div className="text-white/80 text-sm">Keşif</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
