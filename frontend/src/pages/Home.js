import React, { useState } from 'react';
import { Building2, Layers, Volume2, PaintBucket, Phone, Mail, MapPin, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Layers,
      title: 'Asma Tavan',
      description: 'Modern ve estetik asma tavan sistemleri ile mekanlarınıza değer katıyoruz. Profesyonel montaj ve kaliteli malzeme garantisi.'
    },
    {
      icon: Building2,
      title: 'Bölme Duvar',
      description: 'Ofis ve ticari alanlarınız için esnek ve dayanıklı bölme duvar çözümleri. Hızlı kurulum, mükemmel yalıtım.'
    },
    {
      icon: Volume2,
      title: 'Akustik Tavan',
      description: 'Ses yalıtımı ve akustik konfor için özel tasarlanmış akustik tavan sistemleri. Sinema, stüdyo ve ofisler için ideal.'
    },
    {
      icon: PaintBucket,
      title: 'Alçı ve Levha Hizmetleri',
      description: 'Alçıpan uygulamaları ve özel alçı dekorasyon hizmetleri. Detaylı işçilik ve estetik çözümler.'
    }
  ];

  const projects = [
    {
      image: 'https://images.pexels.com/photos/6474313/pexels-photo-6474313.jpeg',
      title: 'Modern Ofis Asma Tavan',
      category: 'Asma Tavan'
    },
    {
      image: 'https://images.unsplash.com/photo-1566503732592-748f40a6e997?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxkcnl3YWxsJTIwcGFydGl0aW9ufGVufDB8fHx8MTc2MTY0MzIzOHww&ixlib=rb-4.1.0&q=85',
      title: 'Ticari Alan Bölme Duvar',
      category: 'Bölme Duvar'
    },
    {
      image: 'https://images.unsplash.com/photo-1672364679086-7194dd16df32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGNlaWxpbmd8ZW58MHx8fHwxNzYxNjQzMjQzfDA&ixlib=rb-4.1.0&q=85',
      title: 'Kültür Merkezi Akustik Tavan',
      category: 'Akustik Tavan'
    },
    {
      image: 'https://images.pexels.com/photos/767064/pexels-photo-767064.jpeg',
      title: 'Kurumsal Ofis Projesi',
      category: 'Asma Tavan'
    },
    {
      image: 'https://images.unsplash.com/photo-1605943160246-4c3e00cad9f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxkcnl3YWxsJTIwcGFydGl0aW9ufGVufDB8fHx8MTc2MTY0MzIzOHww&ixlib=rb-4.1.0&q=85',
      title: 'Modern Koridor Tasarımı',
      category: 'Bölme Duvar'
    },
    {
      image: 'https://images.unsplash.com/photo-1669687036327-da7c64714f4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxhY291c3RpYyUyMGNlaWxpbmd8ZW58MHx8fHwxNzYxNjQzMjQzfDA&ixlib=rb-4.1.0&q=85',
      title: 'Akustik Panel Uygulaması',
      category: 'Akustik Tavan'
    },
    {
      image: 'https://images.pexels.com/photos/27728635/pexels-photo-27728635.jpeg',
      title: 'Alçıpan Montaj Projesi',
      category: 'Alçı ve Levha'
    },
    {
      image: 'https://images.pexels.com/photos/7534231/pexels-photo-7534231.jpeg',
      title: 'Modern İç Mekan Tasarımı',
      category: 'Asma Tavan'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-gray-900" />
              <span className="text-xl font-bold text-gray-900">BM İnşaat</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">Ana Sayfa</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gray-900 transition-colors">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">Hakkımızda</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition-colors">Projelerimiz</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">İletişim</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Ana Sayfa</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Hizmetlerimiz</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Hakkımızda</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Projelerimiz</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">İletişim</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2NDMyMTB8MA&ixlib=rb-4.1.0&q=85"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Mimari Çözümlerinizde
              <span className="block text-amber-400">Profesyonel İş Ortağınız</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Asma tavan, bölme duvar, akustik tavan ve alçı levha hizmetlerinde uzman ekibimizle projelerinizi hayata geçiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                İletişime Geçin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mimari projeleriniz için kapsamlı ve profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500 group">
                  <div className="flex flex-col h-full">
                    <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                      <Icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hakkımızda</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                BM İnşaat olarak, inşaat sektöründe yılların deneyimi ile mimari projelerinize değer katıyoruz. 
                Asma tavan, bölme duvar, akustik tavan ve alçı levha hizmetlerinde uzmanlaşmış ekibimizle, 
                en kaliteli malzemeleri kullanarak projelerinizi zamanında ve eksiksiz teslim ediyoruz.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Müşteri memnuniyetini önceliğimiz olarak gören anlayışımızla, her projede mükemmellik standartlarını 
                koruyarak çalışıyoruz. Modern teknoloji ve geleneksel ustalığı bir araya getirerek, 
                projelerinize estetik ve fonksiyonel çözümler sunuyoruz.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1758210376293-5f90d198a9e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjZWlsaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTY0MzIwNHww&ixlib=rb-4.1.0&q=85"
                alt="About Us"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projelerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tamamladığımız projelerden bazı örnekler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-amber-400 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projeleriniz için bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefon</h3>
              <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta</h3>
              <p className="text-gray-600">info@bminsaat.com</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adres</h3>
              <p className="text-gray-600">İstanbul, Türkiye</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-8 w-8 text-amber-500" />
                <span className="text-xl font-bold">BM İnşaat</span>
              </div>
              <p className="text-gray-400">
                Mimari çözümlerinizde profesyonel iş ortağınız
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-500 transition-colors">Ana Sayfa</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-amber-500 transition-colors">Hizmetlerimiz</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-500 transition-colors">Hakkımızda</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-amber-500 transition-colors">Projelerimiz</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Asma Tavan</li>
                <li>Bölme Duvar</li>
                <li>Akustik Tavan</li>
                <li>Alçı ve Levha</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+90 (XXX) XXX XX XX</li>
                <li>info@bminsaat.com</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BM İnşaat. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;