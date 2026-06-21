const express = require('express');
const router = express.Router();
const Pasien = require('../models/Pasien');

// Tambah Pasien Baru (Create)
router.post('/', async (req, res) => {
  try {
    const pasien = new Pasien(req.body);
    await pasien.save();
    res.status(201).json(pasien);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ambil Semua Data Pasien (Read)
router.get('/', async (req, res) => {
  const data = await Pasien.find().populate('dokterPemeriksa', 'nama spesialisasi');
  res.json(data);
});

// Ambil Pasien Berdasarkan ID (Read Detail)
router.get('/:id', async (req, res) => {
  const data = await Pasien.findById(req.params.id).populate('dokterPemeriksa');
  if (!data) return res.status(404).json({ error: 'Tidak ditemukan' });
  res.json(data);
});

// Update Data Pasien (Update)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Pasien.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Hapus Pasien (Delete)
router.delete('/:id', async (req, res) => {
  try {
    await Pasien.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pasien berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;