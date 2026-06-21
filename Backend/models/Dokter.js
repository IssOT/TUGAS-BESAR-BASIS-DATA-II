const mongoose = require('mongoose');

const dokterSchema = new mongoose.Schema({
  nama:            { type: String, required: true },
  spesialisasi:    { type: String, required: true },
  noIzinPraktek:   { type: String, required: true, unique: true },
  statusTersedia:  { type: Boolean, default: true },
  jamKerja:        [{ type: String }],
  tarifKonsultasi: { type: Number, required: true }
}, { collection: 'Dokter' });

module.exports = mongoose.model('Dokter', dokterSchema);