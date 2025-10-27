import React from 'react';
import { Building2, Target, Award, Users } from 'lucide-react';
import { companyInfo, testimonials } from '../mock';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl text-gray-300">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                BM İnşaat, {companyInfo.foundedYear} yılında kurulduğundan bu yana, inşaat sektöründe 
                kaliteli işçilik ve güvenilir hizmet anlayışıyla yol almaktadır. 
              </p>
              <p className="text-gray-600 mb-4">
                Asma tavan, bölme duvar, akustik tavan sistemleri, zemin işlemleri ve boya badana 
                konularında uzmanlaşan firmamız, yıllar içinde edindiği deneyim ve bilgi birikimi ile 
                sektörde öncü firmalar arasında yerini almıştır.
              </p>
              <p className="text-gray-600">
                Müşteri memnuniyetini her şeyin üstünde tutan yaklaşımımızla, her projede kalite ve 
                güvenilirlik standartlarımızı koruyarak hizmet vermeye devam ediyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" 
                alt="İnşaat" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" 
                alt="Ekip" 
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop" 
                alt="Proje" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" 
                alt="Kalite" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Müşterilerimize en kaliteli ürün ve hizmetleri sunarak, yaşam ve çalışma alanlarını 
                daha güzel ve fonksiyonel hale getirmek.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                İnşaat sektöründe Türkiye'nin önde gelen firmaları arasında yer alarak, 
                uluslararası standartlarda hizmet sunan bir marka olmak.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Değerlerimiz</h3>
              <p className="text-gray-600">
                Kalite, güvenilirlik, müşteri memnuniyeti, çevre duyarlılığı ve sürekli gelişim 
                temel değerlerimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sektördeki tecrübemiz ve kalite anlayışımızla fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Uzman Kadro</h3>
              <p className="text-gray-600">
                Alanında uzman ve deneyimli profesyonellerden oluşan ekibimiz
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">
                ISO sertifikalı kalite yönetim sistemimizle hizmet veriyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Geniş Portföy</h3>
              <p className="text-gray-600">
                500+ tamamlanmış proje ile kanıtlanmış başarı hikayemiz
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Zamanında Teslimat</h3>
              <p className="text-gray-600">
                Planlanan sürede ve en üst kalitede proje teslimi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Birlikte çalıştığımız müşterilerimizin görüşleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-700 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-amber-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
