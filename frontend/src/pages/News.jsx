import React from 'react';
import { news } from '../mock';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Haberler</h1>
            <p className="text-xl text-gray-300">
              BM İnşaat'tan son haberler, projeler ve gelişmeler
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {news.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-amber-600 mb-3">
                    <Calendar size={18} />
                    <span>{news[0].date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{news[0].title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{news[0].excerpt}</p>
                  <button className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                    <span>Devamını Oku</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-amber-600 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="inline-flex items-center space-x-1 text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                    <span>Devamını Oku</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Haberlerden Haberdar Olun</h2>
            <p className="text-gray-300 mb-8">
              Yeni projelerimiz ve haberlerimizden haberdar olmak için e-posta listemize katılın
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
