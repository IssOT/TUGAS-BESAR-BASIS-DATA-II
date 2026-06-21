const mongoose = require('mongoose');

const pasienSchema = new mongoose.Schema({
  nik:             { type: String, required: true, unique: true },
  nama:            { type: String, required: true },
  keluhan:         { type: String, required: true },
  tanggalMasuk:    { type: Date, default: Date.now },
  jenisPembayaran: { type: String, required: true, enum: ['BPJS', 'Mandiri', 'Asuransi Swasta'] },
  statusAntrean:   { type: String, default: 'Menunggu', enum: ['Menunggu', 'Diperiksa', 'Selesai'] },
  biayaPengobatan: { type: Number, required: true },
  dokterPemeriksa: { type: mongoose.Schema.Types.ObjectId, ref: 'Dokter', required: true }
}, { collection: 'Pasien' });

module.exports = mongoose.model('Pasien', pasienSchema);