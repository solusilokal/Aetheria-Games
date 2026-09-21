import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  MapPin, 
  MessageSquare, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Building2,
  Share2,
  Copy,
  Check,
  Twitter,
  Clock,
  Trophy,
  Users,
  Code2,
  MonitorPlay,
  Mail,
  ChevronDown,
  Quote,
  History,
  Info,
  Instagram
} from 'lucide-react';

const pageData = {
  name: "Aetheria Games",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Menciptakan Dunia Digital yang Imersif",
  description: "Aetheria Games adalah studio pengembangan game independen yang berdedikasi untuk menciptakan pengalaman bermain yang inovatif, naratif yang mendalam, dan visual yang memukau untuk PC, Konsol, dan Mobile.",
  profileImg: "logo-aetheria-games.png",
  heroImg: "Gemini_Generated_Image_83zxhy83zxhy83zx.jpg",
  links: {
    instagram: "https://instagram.com/solusilokal.id",
    tiktok: "https://tiktok.com/@solusilokal.id", 
    maps: "https://maps.google.com/?cid=18047471913162934794", 
    youtube: "https://youtube.com/" 
  },
  stats: [
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "12", label: "Game Rilis" },
    { value: "1M+", label: "Pemain Aktif" }
  ],
  services: [
    { name: "Pengembangan Game", icon: "Code2" },
    { name: "Seni & Animasi 3D", icon: "MonitorPlay" },
    { name: "Desain UI/UX", icon: "Users" },
    { name: "Porting & Penerbitan", icon: "Gamepad2" }
  ],
  history: [
    { year: "2019", title: "Awal Mula", desc: "Didirikan oleh 3 orang veteran industri game dengan visi menciptakan game RPG inovatif." },
    { year: "2021", title: "Rilis Perdana", desc: "Peluncuran 'Project Neon', game indie yang sukses mencapai 100k unduhan di bulan pertama." },
    { year: "2023", title: "Ekspansi Studio", desc: "Membuka kantor baru di Jakarta dan berekspansi ke pengembangan game AAA." },
    { year: "2026", title: "Era Baru", desc: "Menjalin kemitraan global dan mempersiapkan peluncuran IP terbesar kami, 'Aetheria Chronicles'." }
  ],
  catalog: [
    { 
      title: "Aetheria Chronicles", 
      genre: "RPG Aksi", 
      platform: "PC, PS5", 
      img: "game-aetheria-chronicles.webp",
      status: "Segera Hadir"
    },
    { 
      title: "Neon Drift", 
      genre: "Balapan Cyberpunk", 
      platform: "PC, Switch", 
      img: "game-neon-drift.webp",
      status: "Tersedia Sekarang"
    },
    { 
      title: "Echoes of Void", 
      genre: "Horor Fiksi Ilmiah", 
      platform: "Semua Konsol", 
      img: "game-echoes-of-void.webp",
      status: "Tersedia Sekarang"
    }
  ],
  pricing: [
    { tier: "Co-Dev Indie", price: "Mulai dari Rp 75 Juta", features: ["Pembuatan Prototipe", "Pembuatan Aset (2D/3D)", "Pengujian QA Dasar", "Pengiriman per Milestone"] },
    { tier: "Produksi Penuh", price: "Penawaran Khusus", features: ["Pengembangan Menyeluruh", "Desain & Narasi Game", "Porting Lanjutan", "Dukungan Pemasaran"] }
  ],
  faq: [
    { q: "Apakah Aetheria Games menerima proyek co-development?", a: "Ya, kami terbuka untuk kolaborasi dan co-development dengan studio lain, terutama untuk pengerjaan 3D art dan technical porting." },
    { q: "Platform apa saja yang Anda dukung?", a: "Kami memiliki pengalaman merilis game di PC (Steam/Epic), PlayStation 5, Xbox Series X/S, Nintendo Switch, dan Mobile (iOS/Android)." },
    { q: "Bagaimana cara melamar pekerjaan di sini?", a: "Kami selalu mencari talenta baru. Silakan kirimkan CV dan portfolio Anda melalui email careers@aetheriagames.com." }
  ],
  testimonials: [
    { name: "Alex Mercer", role: "Developer Indie", text: "Kerja sama dengan Aetheria untuk aset 3D game kami sangat luar biasa. Kualitas dan ketepatan waktu mereka patut diacungi jempol." },
    { name: "Sarah Chen", role: "Penerbit Game", text: "Tim yang sangat profesional. 'Neon Drift' adalah bukti nyata dedikasi mereka terhadap gameplay yang solid dan visual yang menawan." },
    { name: "David O'Connor", role: "Jurnalis Game", text: "Aetheria Games adalah salah satu studio lokal yang paling menjanjikan saat ini. Tidak sabar melihat proyek mereka selanjutnya." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const interest = formData.get('interest');
    const message = formData.get('message');
    
    // Format for WhatsApp inquiry
    const waUrl = `https://wa.me/${pageData.phone}?text=Hello%20Aetheria%20Games,%20saya%20${name}%20(${email}).%20Saya%20tertarik%20dengan%20${interest}.%20Pesan:%20${message}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');
  };

  const renderServiceIcon = (iconName) => {
    switch(iconName) {
      case 'Code2': return <Code2 size={24} className="text-[#E024FF]" />;
      case 'MonitorPlay': return <MonitorPlay size={24} className="text-[#E024FF]" />;
      case 'Users': return <Users size={24} className="text-[#E024FF]" />;
      case 'Gamepad2': return <Gamepad2 size={24} className="text-[#E024FF]" />;
      default: return <Check size={24} className="text-[#E024FF]" />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #0D0221;
          color: #E2E8F0; 
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .glass-panel {
          background: rgba(36, 11, 74, 0.6); 
          backdrop-filter: blur(12px);
          border: 1px solid rgba(192, 132, 252, 0.2); 
        }

        .neon-border {
          position: relative;
        }
        .neon-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(45deg, #E024FF, #00B8FF, #7000FF);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#0D0221] min-h-screen overflow-hidden pb-32">
        
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6">
          
          <button
            onClick={handleShare}
            aria-label="Bagikan halaman ini"
            className="absolute top-6 right-6 z-20 p-3 glass-panel rounded-full hover:bg-purple-900/50 transition-all shadow-lg text-white"
          >
            <Share2 size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0221] via-[#0D0221]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-fuchsia-900/10 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-28 h-28 rounded-2xl p-1 mb-6 shadow-[0_0_30px_rgba(224,36,255,0.3)] neon-border bg-[#150433]">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-contain p-1"
              />
            </div>

            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-3 tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-purple-200/70 text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-xl glass-panel hover:bg-purple-900/50 transition-all text-white shadow-sm text-sm font-medium">
                <Instagram size={18} className="text-[#E1306C]" /> Instagram
              </a>
              <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-xl glass-panel hover:bg-purple-900/50 transition-all text-white shadow-sm text-sm font-medium">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#00F2FE]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-xl glass-panel hover:bg-purple-900/50 transition-all text-white shadow-sm text-sm font-medium col-span-2">
                <MapPin size={18} className="text-[#E024FF]" /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-gradient-to-r from-[#E024FF] to-[#00B8FF] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(224,36,255,0.4)]"
            >
              Mulai Proyek
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        <section className="py-8 px-6 bg-slate-900/50 border-y border-slate-800">
          <div className="flex justify-around items-center w-full max-w-md mx-auto">
            {pageData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Info className="text-[#00FF9D]" size={24} /> Keahlian
            </h2>
            <p className="text-slate-400 text-sm">Kemampuan inti studio kami untuk mewujudkan visi Anda.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pageData.services.map((srv, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl flex flex-col items-start gap-3 hover:border-[#00FF9D]/30 transition-colors">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                  {renderServiceIcon(srv.icon)}
                </div>
                <span className="text-sm font-semibold text-white leading-tight">{srv.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-900/30">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <History className="text-[#00B8FF]" size={24} /> Perjalanan
            </h2>
            <p className="text-slate-400 text-sm">Perjalanan Aetheria Games dari waktu ke waktu.</p>
          </div>
          
          <div className="relative border-l border-slate-700 ml-3 space-y-8">
            {pageData.history.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute w-3 h-3 bg-[#00B8FF] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#00B8FF]"></div>
                <span className="text-xs font-bold text-[#00B8FF] tracking-widest">{item.year}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-12 pb-8">
          <div className="px-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Trophy className="text-[#7000FF]" size={24} /> Game Kami
            </h2>
            <p className="text-slate-400 text-sm">Katalog game yang telah dan akan kami rilis.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((game, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[270px] glass-panel rounded-2xl overflow-hidden flex flex-col group border border-slate-700 hover:border-[#00B8FF]/50 transition-colors"
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0A051B]">
                  <img 
                    src={game.img} 
                    alt={game.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#0F172A] flex flex-col gap-1.5 border-t border-slate-800">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#00FF9D] uppercase tracking-wider bg-[#00FF9D]/10 px-2 py-0.5 rounded border border-[#00FF9D]/30">
                      {game.status}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{game.platform}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug">{game.title}</h3>
                  <span className="text-xs text-purple-300/70">{game.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-900/30">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Layanan & Harga</h2>
            <p className="text-slate-400 text-sm">Opsi kerja sama pengembangan game.</p>
          </div>

          <div className="space-y-4">
            {pageData.pricing.map((tier, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-700 neon-border">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                  <span className="text-[#00FF9D] font-mono font-semibold">{tier.price}</span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check size={16} className="text-[#00B8FF]" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">FAQ</h2>
            <p className="text-slate-400 text-sm">Pertanyaan yang sering diajukan.</p>
          </div>
          
          <div className="space-y-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="glass-panel rounded-xl overflow-hidden border border-slate-700">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-sm text-slate-200">{item.q}</span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-4 pb-4 text-sm text-slate-400 transition-all duration-300 ease-in-out ${openFaq === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-900/50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Quote className="text-[#00FF9D]" size={24} /> Testimoni
            </h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col gap-4">
                <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#00FF9D] font-bold">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{testi.name}</div>
                    <div className="text-[10px] text-slate-400">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-[#00B8FF]">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Markas Kami</h3>
            <p className="text-slate-400 text-sm mb-4">{pageData.address}</p>
            <a 
              href={pageData.links.maps} 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 rounded-full bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors border border-slate-600"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        <section id="contact-form" className="py-12 px-6">
          <div className="glass-panel border border-purple-900/50 rounded-3xl p-8 relative overflow-hidden neon-border">
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="text-[#E024FF]" size={24} /> Mari Terhubung
              </h2>
              <p className="text-purple-300/70 text-sm">Diskusikan proyek game Anda atau sapa kami.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-purple-300/70 uppercase tracking-wide">Nama</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Player 1"
                  className="w-full bg-[#150433]/50 border border-purple-900/50 rounded-xl px-4 py-3.5 text-sm text-white placeholder-purple-900 focus:outline-none focus:border-[#E024FF] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-purple-300/70 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="player1@email.com"
                  className="w-full bg-[#150433]/50 border border-purple-900/50 rounded-xl px-4 py-3.5 text-sm text-white placeholder-purple-900 focus:outline-none focus:border-[#E024FF] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-purple-300/70 uppercase tracking-wide">Kategori</label>
                <select 
                  name="interest" 
                  required
                  className="w-full bg-[#150433]/50 border border-purple-900/50 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#E024FF] transition-colors appearance-none"
                >
                  <option value="Co-Development" className="bg-[#150433]">Proyek Co-Development</option>
                  <option value="Publishing" className="bg-[#150433]">Publishing Game</option>
                  <option value="Karir" className="bg-[#150433]">Info Karir</option>
                  <option value="Lainnya" className="bg-[#150433]">Pertanyaan Umum</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-purple-300/70 uppercase tracking-wide">Pesan</label>
                <textarea 
                  name="message" 
                  rows="4"
                  required
                  placeholder="Ceritakan tentang proyek epik Anda..."
                  className="w-full bg-[#150433]/50 border border-purple-900/50 rounded-xl px-4 py-3.5 text-sm text-white placeholder-purple-900 focus:outline-none focus:border-[#E024FF] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-[#E024FF] to-[#00B8FF] text-white font-bold text-sm tracking-wide py-4 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(224,36,255,0.4)]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </section>

        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-purple-900/50 mb-8"></div>
          
          <div className="w-16 h-16 rounded-2xl p-0.5 mb-4 shadow-[0_0_15px_rgba(224,36,255,0.3)] neon-border bg-[#150433]">
            <img 
              src={pageData.profileImg} 
              alt="Profile Aetheria Games" 
              className="w-full h-full rounded-2xl object-contain p-0.5"
            />
          </div>

          <div className="text-purple-300/70 text-xs flex flex-col gap-2 items-center">
            <span className="font-bold text-white text-lg tracking-widest uppercase">{pageData.name}</span>
            <span className="max-w-[250px] opacity-70">{pageData.address}</span>
          </div>

          <p className="text-purple-900 text-[10px] mt-8 font-mono">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 text-[10px] mt-2 tracking-widest font-mono hover:text-[#E024FF] transition-colors cursor-pointer"
          >
            powered by solusilokal.id
          </a>
        </footer>

        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#150433]/90 backdrop-blur-xl border border-[#E024FF]/50 rounded-xl text-white shadow-[0_0_30px_rgba(224,36,255,0.3)] hover:bg-[#240a54] active:scale-[0.98] transition-all neon-border"
          >
            <MessageSquare size={18} className="text-[#E024FF]" />
            <span className="font-bold text-sm tracking-wide text-white">Hubungi Kami</span>
          </button>
        </div>

      </main>

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-slate-900 border border-slate-800 sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-white font-bold text-[15px]">Bagikan Tautan</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-xl border border-slate-600 mb-4 overflow-hidden bg-[#150433] flex items-center justify-center p-1">
                 <img src={pageData.profileImg} alt="Profile" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-white font-bold text-lg text-center tracking-tight">{pageData.name}</h4>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar justify-center items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-all shadow-sm border border-slate-700"
                >
                  {copied ? <Check size={24} className="text-[#00FF9D]" /> : <Copy size={24} />}
                </button>
                <span className="text-[10px] font-semibold text-slate-400 text-center uppercase tracking-wider">
                  {copied ? 'Tersalin' : 'Salin'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={shareToTwitter}
                  className="w-14 h-14 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Twitter size={24} />
                </button>
                <span className="text-[10px] font-semibold text-slate-400 text-center uppercase tracking-wider">Twitter</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={shareToWhatsApp}
                  className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageSquare size={24} className="fill-current" />
                </button>
                <span className="text-[10px] font-semibold text-slate-400 text-center uppercase tracking-wider">WA</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}