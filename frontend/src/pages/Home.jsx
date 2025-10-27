import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
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
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
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
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl mb-2">{project.category}</p>
                <p className="text-lg mb-6 text-gray-200">{project.description}</p>
                <Link
                  to="/projeler"
                  className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  <span>Projelerimizi İnceleyin</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-600 w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel ekibimiz ve kaliteli malzemelerimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                    <IconComponent className="text-amber-600 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/hizmetler"
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <span>Tüm Hizmetleri Görüntüle</span>
              <ArrowRight size={20} />
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
