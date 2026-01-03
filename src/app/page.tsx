'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, ChevronRight, MapPin, Phone, Mail, 
  Facebook, Instagram, Home, Award, Shield, 
  TrendingUp, CheckCircle, Calculator, HeartHandshake,
  BedDouble, Bath, Ruler, LandPlot, CarFront, Zap, Droplets, Layers
} from 'lucide-react';

// --- CONFIGURATION & DATA ---
const whatsappNumber = '6285377347995';
const waLink = `https://wa.me/${whatsappNumber}?text=Halo%20Mahakarya%20Residences,%20saya%20tertarik%20untuk%20survey%20lokasi.`;

// Unit Specification Data
const unitSpecs = [
  { icon: BedDouble, label: 'Kamar Tidur', value: '2 Unit' },
  { icon: Bath, label: 'Kamar Mandi', value: '1 Unit' },
  { icon: LandPlot, label: 'Luas Tanah', value: 'mulai 130 m²' },
  { icon: Ruler, label: 'Luas Bangunan', value: 'mulai 60 m²' },
  { icon: CarFront, label: 'Carport', value: '1 Mobil + Motor' },
  { icon: Zap, label: 'Listrik', value: '2200 Watt' },
  { icon: Droplets, label: 'Air', value: 'PDAM' },
  { icon: Layers, label: 'Sanitary', value: 'American Standard' },
];

// Unit Gallery Images (Fixed based on your folder structure)
const unitGallery = [
  { src: '/unit/layout-1.png', alt: 'Denah Layout Unit' },
  { src: '/unit/render-1.png', alt: 'Fasad Depan Utama' },
  { src: '/unit/render-2.png', alt: 'Ruang Tengah Open Space' },
  { src: '/unit/render-3.png', alt: 'Ruang Tengah Open Space' },
  { src: '/unit/render-4.png', alt: 'Ruang Tengah Open Space' },
  { src: '/unit/render-5.png', alt: 'Kamar Tidur Utama' },
  { src: '/unit/render-6.png', alt: 'Kamar Tidur Utama' },
  { src: '/unit/render-7.png', alt: 'Kamar Tidur Anak' },
  { src: '/unit/render-8.png', alt: 'Kamar Tidur Anak' },
  { src: '/unit/render-9.png', alt: 'Dapur Modern' },
  { src: '/unit/render-10.png', alt: 'Ruang Makan' },
  { src: '/unit/render-11.png', alt: 'Area Laundry' },
  { src: '/unit/render-12.png', alt: 'Area Jemur' }
];

// Strategic Location Images
const locationImages = [
  { name: 'Universitas Jambi (UNJA)', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800' },
  { name: 'Kompleks Perkantoran Gubernur', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
  { name: 'Mall Jamtos', img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800' },
  { name: 'RSUD Raden Mattaher', img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800' },
];

const features = [
  { icon: TrendingUp, title: 'WORTH TO BUY!', desc: 'Rumah dengan Harga Di Bawah Pasaran dan Menjadi Investasi yang Baik' },
  { icon: Award, title: 'Developer Terpercaya', desc: 'Persembahan dari Developer Ternama' },
  { icon: CheckCircle, title: 'Kualitas Material Terbaik', desc: 'Sanitary by American Standard, Paloma' },
  { icon: Home, title: 'Desain Mewah Art Deco', desc: 'Khas Eropa dari Arsitek Ternama' },
  { icon: MapPin, title: 'Lingkungan Nyaman', desc: 'Asri dan AMAN DARI BANJIR' },
  { icon: Shield, title: 'Legalitas Dijamin Aman', desc: 'SHM, IMB, PBB Pecah Per Kavling, Siap PEMBUKTIAN KE BPN' },
  { icon: HeartHandshake, title: 'Skema Syariah', desc: 'Cicil ke Developer atau KPR Syariah (Tanpa Riba)' },
];

const uspPoints = [
  { title: 'Mempermudah Aktivitas Sehari-hari', desc: 'Akses mudah ke segala kebutuhan.' },
  { title: 'Hemat WAKTU & BIAYA', desc: 'Kurangi biaya transportasi harian Anda.' },
  { title: 'Perjalanan Lebih CEPAT', desc: 'Kurangi stres macet, lebih banyak waktu untuk keluarga.' },
  { title: 'Passive Income Potensial', desc: 'Sangat laku jika disewakan ke mahasiswa/pekerja.' },
  { title: 'Investasi Masa Depan', desc: 'Kenaikan nilai properti yang pasti di area berkembang.' },
  { title: 'Lokasi Premium', desc: 'Dekat UNJA, Perkantoran Gubernur, Jamtos, Trona Express, Terminal Alam Barajo, Sekolah Al Azhar, RSUD Raden Mattaher.' },
];

// --- COMPONENT: MORTGAGE CALCULATOR ---
const MortgageCalculator = () => {
  const [price, setPrice] = useState(400000000);
  const [dpPercent, setDpPercent] = useState(20);
  const [years, setYears] = useState(15);
  const [margin, setMargin] = useState(8); 
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const dpAmount = price * (dpPercent / 100);
    const principal = price - dpAmount;
    const totalMargin = principal * (margin / 100) * years;
    const totalCost = principal + totalMargin;
    const monthly = totalCost / (years * 12);
    setMonthlyPayment(monthly);
  }, [price, dpPercent, years, margin]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto mt-8">
      <div className="flex items-center space-x-2 mb-6 text-[#14305D]">
        <Calculator className="w-6 h-6" />
        <h3 className="text-2xl font-bold">Simulasi KPR Syariah (Murabahah)</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Harga Properti</label>
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#14305D] outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">{formatRupiah(price)}</p>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Uang Muka / DP (%)</label>
            <input 
              type="range" 
              min="0" max="50" 
              value={dpPercent} 
              onChange={(e) => setDpPercent(Number(e.target.value))}
              className="w-full accent-[#D94116]"
            />
            <div className="flex justify-between text-sm">
              <span>0%</span>
              <span className="font-bold text-[#D94116]">{dpPercent}%</span>
              <span>50%</span>
            </div>
            <p className="text-xs text-gray-500">Estimasi DP: {formatRupiah(price * (dpPercent/100))}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Jangka Waktu (Tahun)</label>
            <select 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#14305D] outline-none"
            >
              <option value="5">5 Tahun</option>
              <option value="10">10 Tahun</option>
              <option value="15">15 Tahun</option>
              <option value="20">20 Tahun</option>
            </select>
          </div>
        </div>

        <div className="bg-[#EAF0F9] p-6 rounded-xl flex flex-col justify-center items-center text-center">
          <p className="text-gray-600 font-medium mb-2">Estimasi Angsuran per Bulan</p>
          <p className="text-3xl md:text-4xl font-bold text-[#14305D] mb-2">
            {formatRupiah(monthlyPayment)}
          </p>
          <p className="text-xs text-gray-500 mb-4">*Simulasi estimasi margin {margin}% (Flat/Murabahah)</p>
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-[#D94116] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#B8360F] transition w-full"
          >
            Konsultasi KPR Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const MahakaryaLanding = () => {
  const [currentLocSlide, setCurrentLocSlide] = useState(0);
  const [currentUnitSlide, setCurrentUnitSlide] = useState(0); // State for Unit Carousel
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-rotate Location carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLocSlide((prev) => (prev + 1) % locationImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate Unit Gallery carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUnitSlide((prev) => (prev + 1) % unitGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#4F5050]">
      
      {/* Sticky Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#14305D] shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <Home className="w-6 h-6 md:w-8 md:h-8 text-[#14305D]" />
            </div>
            <span className={`font-bold text-xl md:text-2xl transition-colors ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              Mahakarya Residences
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#home" className="hover:text-[#D94116] transition drop-shadow-md">Home</a>
            <a href="#unit-spec" className="hover:text-[#D94116] transition drop-shadow-md">Tipe Unit</a>
            <a href="#projects" className="hover:text-[#D94116] transition drop-shadow-md">Projects</a>
            <a href="#location" className="hover:text-[#D94116] transition drop-shadow-md">Location</a>
            <a href="#contact" className="hover:text-[#D94116] transition drop-shadow-md">Contact</a>
          </div>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#D94116] text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-[#B8360F] transition shadow-lg">
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/fasadmahakarya.png"
            alt="Mahakarya Residences Facade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14305D]/90 to-[#14305D]/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg font-heading">
              CLUSTER MEWAH TERMURAH<br />PALING DEKAT DARI UNJA
            </h1>
            <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md max-w-3xl mx-auto">
              Cluster dengan Lokasi Paling Strategis!<br />
              Hanya 10 Menit dari UNJA dan Kompleks Perkantoran Gubernur
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#D94116] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#B8360F] transition transform hover:scale-105 shadow-2xl"
            >
              Survey Lokasi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Section 1.5: Unit Specifications & Gallery (THIS WAS MISSING) */}
      <section id="unit-spec" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14305D] mb-4">
              Mahakarya Residences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dirancang dengan detail untuk kenyamanan maksimal keluarga Anda. <br /> Perpaduan desain mewah Art Deco  dan fungsionalitas modern.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Grid: Specifications */}
            <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-[#14305D] mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-[#D94116]" />
                Detail Hunian
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {unitSpecs.map((spec, idx) => {
                  const Icon = spec.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="bg-[#EAF0F9] p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-[#14305D]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{spec.label}</p>
                        <p className="text-lg font-bold text-[#14305D]">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 p-4 bg-[#EAF0F9] rounded-xl text-center">
                 <p className="text-[#14305D] font-semibold">
                   *Spesifikasi termewah dengan harga unit rumah termurah dikelasnya.
                 </p>
              </div>
            </div>

            {/* Right Grid: Gallery Carousel */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              {unitGallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentUnitSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image 
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-bold text-center">{item.alt}</p>
                  </div>
                </div>
              ))}

              {/* Controls */}
              <button 
                onClick={() => setCurrentUnitSlide((prev) => (prev - 1 + unitGallery.length) % unitGallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCurrentUnitSlide((prev) => (prev + 1) % unitGallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

               {/* Indicators */}
               <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {unitGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentUnitSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentUnitSlide ? 'bg-[#D94116] w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: USP - Strategic Location */}
      <section id="location" className="py-20 bg-[#EAF0F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14305D] text-center mb-12">
            Mengapa Harus Pilih Rumah dengan Lokasi Strategis?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {uspPoints.map((point, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-[#D94116]">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D94116] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#14305D] font-bold text-lg mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#14305D] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#0F2447] transition transform hover:scale-105 shadow-lg"
            >
              Survey Lokasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Image Gallery Carousel (Location) */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl aspect-video relative">
              {locationImages.map((loc, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentLocSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image 
                    src={loc.img} 
                    alt={loc.name} 
                    fill
                    className="object-cover"
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <h3 className="text-2xl font-bold">{loc.name}</h3>
                      <p className="text-sm opacity-90">Lokasi strategis dekat hunian</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Controls */}
              <button 
                onClick={() => setCurrentLocSlide((prev) => (prev - 1 + locationImages.length) % locationImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={() => setCurrentLocSlide((prev) => (prev + 1) % locationImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition"
              >
                <ChevronRight size={32} />
              </button>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Lihat langsung kualitas bangunan kami</p>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#D94116] text-[#D94116] px-8 py-3 rounded-lg font-bold hover:bg-[#D94116] hover:text-white transition"
              >
                Jadwalkan Survey Lokasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section className="py-20 bg-[#14305D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mahakarya Residences
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light text-gray-300">
            Termewah dan Termurah di Kelasnya
          </p>
          
          <div className="inline-block bg-white text-[#14305D] p-1 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
            <div className="border-2 border-[#14305D] border-dashed rounded-xl px-12 py-8">
              <p className="text-lg mb-2 font-medium uppercase tracking-widest text-[#D94116]">Harga Mulai</p>
              <p className="text-5xl md:text-7xl font-extrabold">400 JUTA-AN</p>
              <p className="text-sm mt-4 text-gray-500">*Syarat dan ketentuan berlaku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Features & Value Prop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14305D] text-center mb-16">
            Kenapa Harus Mahakarya Residences?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F8FAFC] rounded-xl p-8 hover:bg-[#EAF0F9] transition duration-300 group border border-gray-100 hover:border-[#14305D]/20"
                >
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#14305D] transition duration-300">
                    <Icon className="w-7 h-7 text-[#14305D] group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#14305D] mb-3">{feature.title}</h3>
                  <p className="text-[#4F5050] leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#20bd5a] transition shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi GRATIS via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Mortgage Simulator & Closing CTA */}
      <section className="py-20 bg-gradient-to-b from-[#EAF0F9] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14305D] mb-4">
              Hitung Cicilan Rumah Impian Anda
            </h2>
            <p className="text-gray-600">Gunakan kalkulator di bawah ini untuk estimasi angsuran KPR Syariah.</p>
          </div>
          
          {/* Mortgage Calculator Component */}
          <MortgageCalculator />

          {/* Closing CTA */}
          <div className="mt-20 bg-[#D94116] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-4 font-bold bg-white/20 inline-block px-6 py-2 rounded-full animate-pulse">
                ⚠️ Hanya 8 Unit Tersisa!
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Konsultasi Gratis Sekarang dan Dapatkan<br className="hidden md:block"/>
                Penawaran Terbaik Mahakarya Residences!
              </h2>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#D94116] px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
              >
                🎁 Dapatkan PROMO
              </a>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="w-64 h-64 bg-black rounded-full absolute -top-10 -left-10"></div>
              <div className="w-64 h-64 bg-black rounded-full absolute -bottom-10 -right-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Footer & Contact */}
      <footer id="contact" className="bg-[#14305D] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#14305D]" />
                </div>
                <span className="font-bold text-xl">Mahakarya<br/>Residences</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Hunian mewah dengan harga terjangkau di lokasi paling strategis Jambi. Investasi terbaik untuk masa depan keluarga Anda.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#D94116] transition"><Facebook size={20} /></a>
                <a href="#" className="hover:text-[#D94116] transition"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-lg mb-6 border-b border-gray-600 pb-2 inline-block">Hubungi Kami</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-[#D94116]" />
                  <span>Lorong Bougenvil Lestari, Kenali Besar, Kota Baru, Jambi 36361</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#D94116]" />
                  <span>+62 853-7734-7995</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#D94116]" />
                  <span>info@mahakaryaresidences.com</span>
                </li>
              </ul>
            </div>

            {/* Map Integration */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-lg mb-6 border-b border-gray-600 pb-2 inline-block">Lokasi Proyek</h3>
              <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                {/* Google Maps Embed */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2062729453483!2d103.57871717585685!3d-1.6288346360952992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e25896299ddf6a1%3A0x324e2048b8d78e91!2sPerumahan%20Mahakarya%20Residence!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  className="filter grayscale hover:grayscale-0 transition duration-500"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Link to Google Maps */}
              <a 
                href="https://goo.gl/maps/6qX4X5X4X5X4X5X4X" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D94116] hover:text-white mt-2 inline-block transition"
              >
                Buka di Google Maps →
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Mahakarya Residences. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MahakaryaLanding;