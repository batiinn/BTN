import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Sparkles, TrendingUp, Award } from 'lucide-react';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  return (
    <div>
      {/* Hero Slider - Enhanced with parallax effect */}
      <section className="relative h-[700px] overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-orange-600/20 z-10 pointer-events-none"></div>
        
        {heroProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ 
                backgroundImage: `url(${project.image})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
            <div className="relative h-full container mx-auto px-4 flex items-center z-20">
              <div className="text-white max-w-3xl animate-fadeInUp">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="text-amber-400" size={24} />
                  <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">Premium İnşaat Çözümleri</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                  {project.title}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mb-6"></div>
                <p className="text-2xl mb-2 font-semibold text-amber-400">{project.category}</p>
                <p className="text-xl mb-8 text-gray-200 max-w-2xl">{project.description}</p>
                <Link
                  to="/projeler"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span>Projelerimizi Keşfedin</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider controls - Enhanced */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-amber-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-110 z-30 group"
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-amber-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-110 z-30 group"
        >
          <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slider indicators - Enhanced */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {heroProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 w-12 h-3 shadow-lg shadow-amber-500/50' 
                  : 'bg-white/50 w-3 h-3 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="text-amber-600" size={20} />
              <span className="text-amber-800 font-semibold">Hizmetlerimiz</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-800 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Premium Çözümler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profesyonel ekibimiz ve kaliteli malzemelerimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <div
                  key={service.id}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 hover:-translate-y-2"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                      <IconComponent className="text-amber-600" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors" style={{fontFamily: "'Playfair Display', serif"}}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    {/* Hover arrow */}
                    <div className="mt-6 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span className="font-semibold mr-2">Detaylar</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/hizmetler"
              className="group inline-flex items-center space-x-3 text-lg font-bold text-amber-600 hover:text-amber-700 transition-all hover:scale-105"
            >
              <span className="border-b-2 border-amber-600 group-hover:border-amber-700">Tüm Hizmetleri Görüntüle</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Neden BM İnşaat?</h2>
              <p className="text-gray-300 mb-8">
                Yılların deneyimi ve uzman kadromuzla projelerinizi en kaliteli şekilde hayata geçiriyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Uzman Ekip</h4>
                    <p className="text-gray-400">Alanında deneyimli ve sertifikalı profesyonellerden oluşan ekibimiz</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Kaliteli Malzeme</h4>
                    <p className="text-gray-400">Sadece güvenilir markalardan temin edilen kaliteli malzemeler</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Zamanında Teslimat</h4>
                    <p className="text-gray-400">Projelerinizi belirlenen sürede ve kaliteden ödün vermeden tamamlıyoruz</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Garanti ve Destek</h4>
                    <p className="text-gray-400">Tamamlanan projeler için garanti ve sürekli teknik destek</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-600 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-amber-100">Tamamlanan Proje</div>
              </div>
              <div className="bg-slate-700 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">14+</div>
                <div className="text-gray-300">Yıllık Deneyim</div>
              </div>
              <div className="bg-slate-700 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-gray-300">Mutlu Müşteri</div>
              </div>
              <div className="bg-amber-600 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold mb-2">%98</div>
                <div className="text-amber-100">Memnuniyet Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Son Projelerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gerçekleştirdiğimiz projelerle sektörde fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 8).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Detayları Gör
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{project.title}</h3>
                <p className="text-sm text-amber-600">{project.category}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projeler"
              className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              <span>Tüm Projeleri Görüntüle</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Haberler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              BM İnşaat'tan son haberler ve gelişmeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-amber-600 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link to="/haberler" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center space-x-1">
                    <span>Devamını Oku</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Referanslarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-center">
                <img src={client.logo} alt={client.name} className="opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-xl mb-8 text-amber-100">
            Uzman ekibimiz projeniz için en uygun çözümü sunmaya hazır
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
          >
            <span>Hemen İletişime Geçin</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
