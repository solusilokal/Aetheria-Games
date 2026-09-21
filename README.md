# Aetheria Games - Studio Pengembangan Game Independen

Website landing page interaktif & mobile-first untuk **Aetheria Games** (Studio Pengembangan Game Independen di Palangka Raya). Menampilkan showcase portofolio game rilis ("Aetheria Chronicles", "Neon Drift", "Echoes of Void"), layanan pengembangan game (Co-Dev, Seni 3D, UI/UX, Porting), timeline perjalanan studio, pricing tier kerja sama, FAQ interaktif, testimoni industri, form kontak terintegrasi langsung ke WhatsApp Admin, serta fitur share modal.

🌐 **Live Demo Website:** [https://solusilokal.github.io/Aetheria-Games/](https://solusilokal.github.io/Aetheria-Games/)  
📦 **GitHub Repository:** [https://github.com/solusilokal/Aetheria-Games](https://github.com/solusilokal/Aetheria-Games)

---

## 🚀 Cara Menjalankan & Preview

Terdapat **2 cara praktis** untuk melihat preview website ini:

### 1. Buka Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `studio game` di File Explorer Windows.
- Cukup **klik dua kali (double-click)** pada file `standalone.html` (atau jalankan `preview.bat` dan pilih opsi `[1]`).
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan styling cyberpunk/neon Tailwind CSS, ikon Lucide, gambar, dan interaktivitasnya tanpa memerlukan web server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara A:** Klik dua kali file **`preview.bat`** lalu ketik `2` dan tekan Enter.
- **Cara B:** Buka terminal / command prompt di folder ini dan jalankan:
  ```bash
  npm run dev
  ```
- Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
studio game/
├── public/
│   └── Gemini_Generated_Image_83zxhy83zxhy83zx.jpg  # Hero banner Aetheria Games
├── src/
│   ├── App.jsx                                      # Komponen utama React Aetheria Games
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Space Grotesk
│   └── main.jsx                                     # Entry point aplikasi React 18
├── dist/                                            # Hasil kompilasi produksi Vite
├── standalone.html                                  # File mandiri lengkap (bisa dibuka langsung tanpa server)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── deploy_github.bat                                # Script deploy ke GitHub
├── index.html                                       # File HTML utama untuk Vite dev & build
├── build_standalone.cjs                             # Skrip bundler esbuild untuk standalone.html
├── package.json                                     # Konfigurasi dependensi npm & skrip
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
├── Gemini_Generated_Image_83zxhy83zxhy83zx.jpg      # Asset foto hero
└── aetheria_games_studio.tsx                        # Source code komponen asli
```
