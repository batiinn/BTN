import React from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../mock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-300">
              Profesyonel ekibimiz ve kaliteli malzemelerimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = LucideIcons[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-colors">
                          <IconComponent className="text-amber-600 group-hover:text-white transition-colors" size={40} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                              <span>Profesyonel uygulama</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                              <span>Kaliteli malzeme garantisi</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                              <span>Zamanında teslimat</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-amber-600 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Projelerinizi 4 adımda profesyonelce tamamlıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">İletişim</h3>
              <p className="text-gray-600">
                Projeniz hakkında bilgi alıyoruz ve ihtiyaçlarınızı belirliyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Keşif & Teklif</h3>
              <p className="text-gray-600">
                Sahada keşif yapıyor ve detaylı teklifimizi sunuyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Uygulama</h3>
              <p className="text-gray-600">
                Uzman ekibimiz projenizi titizlikle hayata geçiriyor
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Teslimat</h3>
              <p className="text-gray-600">
                Projenizi kontrol edip garantili şekilde teslim ediyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Projeniz İçin Hemen Teklif Alın</h2>
          <p className="text-xl mb-8 text-amber-100">
            Ücretsiz keşif ve detaylı fiyat teklifi için bizimle iletişime geçin
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
          >
            <span>İletişime Geçin</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
