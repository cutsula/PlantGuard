# 🌿 PlantGuard

PlantGuard adalah aplikasi berbasis Artificial Intelligence (AI) yang digunakan untuk mendeteksi penyakit tanaman melalui citra daun. Pengguna cukup mengunggah gambar daun dan memilih jenis tanaman, kemudian sistem akan menganalisis gambar dan menampilkan hasil deteksi beserta informasi penyakitnya.

## 📷 Tampilan Dashboard

![Dashboard](screenshoot/dashboard.png)

## ✨ Fitur

- Deteksi penyakit tanaman berbasis AI
- Upload gambar menggunakan Drag & Drop
- Mendukung berbagai jenis tanaman
- Menampilkan tingkat keyakinan (confidence score)
- Menampilkan informasi penyakit:
  - Deskripsi
  - Penyebab
  - Gejala
- Antarmuka modern dan responsif
- Dashboard interaktif

## 📸 Tampilan Aplikasi

### Dashboard
- Informasi PlantGuard
- Statistik sistem
- Panduan penggunaan
- Upload gambar daun
- Pemilihan jenis tanaman

### Hasil Deteksi
- Preview gambar yang diunggah
- Nama penyakit
- Tingkat keyakinan prediksi
- Deskripsi penyakit
- Penyebab penyakit
- Gejala penyakit

---

## 🚀 Cara Menggunakan

### 1. Pilih Jenis Tanaman
Pilih jenis tanaman yang sesuai dari daftar yang tersedia.

### 2. Upload Gambar
Pilih atau seret gambar daun tanaman ke area upload.

### 3. Klik Tombol Periksa
Sistem akan mengirim gambar ke server untuk dianalisis.

### 4. Lihat Hasil Deteksi
PlantGuard akan menampilkan hasil analisis beserta informasi penyakit.

### 5. Hapus Gambar
Klik tombol **Hapus Gambar** untuk kembali ke dashboard utama dan melakukan deteksi baru.

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- React.js
- Material UI (MUI)
- Axios
- React Dropzone
- React Toastify

### Backend
- FastAPI
- Python

### Machine Learning
- DL Model EfficientNetB0
- TensorFlow

---

## 📂 Struktur Proyek

```bash
PlantGuard/
│
├── public/
│
├── src/
│   ├── Assets/
│   │   └── Images/
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── Info.js
│   │   └── SelectBox.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## ⚙️ Instalasi

### Clone Repository

```bash
git clone https://github.com/username/PlantGuard.git
cd PlantGuard
```

### Install Dependency

```bash
npm install
```

### Konfigurasi Environment

Buat file `.env`

```env
REACT_APP_API_URL=http://localhost:5000
```

Sesuaikan URL dengan alamat backend yang digunakan.

### Jalankan Aplikasi

```bash
npm start
```

Aplikasi akan berjalan pada:

```bash
http://localhost:3000
```

---

## 📊 Dataset

Model dilatih menggunakan dataset citra penyakit tanaman yang terdiri dari berbagai jenis tanaman dan penyakit daun dari Kaggle.

### Plant-disease-classification-merged-dataset
https://www.kaggle.com/datasets/alinedobrovsky/plant-disease-classification-merged-dataset

### plant-disease-dataset
https://www.kaggle.com/datasets/rashidthihan/plant-disease-dataset

---

## 🎯 Tujuan Proyek

PlantGuard dikembangkan untuk membantu:
- Petani
- Peneliti
- Mahasiswa
- Masyarakat umum

dalam mengidentifikasi penyakit tanaman secara cepat dan mudah tanpa memerlukan analisis manual oleh pakar.

---

## 👨‍💻 Pengembang

- 250820701100003 - Anis Raysa
- 250820701100012- Annifa Iqramitha
- 2208107010040 - Zahra Zafira
- 2208107010048 - Cut Sula Fhatia Rahma
- 250820701100001 - Muhammad Siddiq
- 250820701100002 - Teuku Akmaliansyah

Proyek ini dikembangkan sebagai bagian dari tugas akhir mata kuliah Pengembangan Perangkat Lunak Dan Manajemen Proyek, Universitas Syiah Kuala

---

## 📄 Lisensi

Proyek ini dibuat untuk tujuan pendidikan dan penelitian.
