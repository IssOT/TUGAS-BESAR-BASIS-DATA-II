const mongoose = require('mongoose');

const obatSchema = new mongoose.Schema({
  nama:       { type: String, required: true },
  jenisObat:  { type: String, required: true },
  harga_beli: { type: Number, required: true },
  harga_jual: { type: Number, required: true },
  stok:       { type: Number, required: true }
}, { collection: 'Obat' });

module.exports = mongoose.model('Obat', obatSchema);