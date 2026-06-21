# TUGAS-BESAR-BASIS-DATA-II
# SinaMedis — Clinic Management Information System

Aplikasi CRUD berbasis web untuk manajemen klinik medis, dibangun dengan arsitektur RESTful API menggunakan Node.js dan MongoDB sebagai basis data NoSQL.

---

## 👤 Identitas

| Field | Detail |
|---|---|
| Nama | Ivan Sigit Santoso |
| NIM | 4.33.25.1.11 |
| Program Studi | D4 Teknologi Rekayasa Komputer |
| Institusi | Politeknik Negeri Semarang |

---

## 📁 Struktur Folder

```
sinamedis/
├── models/
│   ├── Dokter.js
│   ├── Pasien.js
│   └── Obat.js
├── routes/
│   ├── dokter.js
│   ├── pasien.js
│   └── obat.js
├── server.js
└── index.html
```

- `models/` — Mongoose schema dan model untuk setiap collection MongoDB
- `routes/` — Express router yang mendefinisikan endpoint REST per collection
- `server.js` — Entry point aplikasi, koneksi database, dan registrasi middleware
- `index.html` — Frontend berbasis Vanilla JS dengan Fetch API

---

## 🛠️ Teknologi

| Komponen | Teknologi |
|---|---|
| Runtime | Node.js v18+ |
| Framework | Express.js v4 |
| Database | MongoDB (NoSQL, Document-Oriented) |
| ODM | Mongoose v8 |
| Frontend | HTML5 + Vanilla JavaScript (Fetch API) |
| API Testing | Postman |
| Dev Server | Live Server (VS Code Extension) |

---

## 🗃️ Collections

| Collection | Deskripsi | Relasi |
|---|---|---|
| `Dokter` | Data dokter beserta spesialisasi dan jadwal | — |
| `Pasien` | Data pasien beserta keluhan dan status antrean | Many-to-One → Dokter |
| `Obat` | Data inventaris obat beserta harga dan stok | — |

Relasi yang diimplementasikan: **One-to-Many** (Dokter → Pasien) menggunakan Reference Document (`ObjectId`) dengan Mongoose `populate()`.

---

## 🚀 Cara Menjalankan

### Prasyarat

```bash
node -v     # v18 atau lebih baru
npm -v      # v9 atau lebih baru
```

Pastikan MongoDB sudah berjalan di `localhost:27017`.

### Instalasi

```bash
git clone <repo-url>
cd sinamedis
npm install
```

### Menjalankan Server

```bash
node server.js
```

Output yang diharapkan:

```
MongoDB connected
Server running at http://localhost:3000
```

### Menjalankan Frontend

Buka `index.html` menggunakan Live Server di VS Code, lalu akses:

```
http://127.0.0.1:8080
```

---

## 🔌 API Endpoints

### Dokter

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/dokter` | Ambil semua dokter |
| POST | `/api/dokter` | Tambah dokter baru |
| GET | `/api/dokter/:id` | Detail dokter + daftar pasiennya |
| PUT | `/api/dokter/:id` | Update data dokter |
| DELETE | `/api/dokter/:id` | Hapus dokter |

### Pasien

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/pasien` | Ambil semua pasien (populate dokter) |
| POST | `/api/pasien` | Tambah pasien baru |
| GET | `/api/pasien/:id` | Detail pasien + info dokter |
| PUT | `/api/pasien/:id` | Update data pasien |
| DELETE | `/api/pasien/:id` | Hapus pasien |

### Obat

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/obat` | Ambil semua obat |
| POST | `/api/obat` | Tambah obat baru |
| GET | `/api/obat/:id` | Detail obat |
| PUT | `/api/obat/:id` | Update data obat |
| DELETE | `/api/obat/:id` | Hapus obat |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^8.0.0"
  }
}
```

---

## 📝 Catatan

- Nama database MongoDB: `SinaMedis` (case-sensitive)
- Mongoose dikonfigurasi dengan opsi `{ collection: 'NamaCollection' }` untuk mencegah auto-pluralize
- Frontend berkomunikasi dengan backend melalui `http://localhost:3000`
- CORS dikonfigurasi untuk mengizinkan akses dari `http://127.0.0.1:8080`
```
