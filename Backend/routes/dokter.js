const express = require('express');
const router = express.Router();
const Dokter = require('../models/Dokter');

// Tambah Dokter Baru
router.post('/', async (req, res) => {
  try {
    const dokter = new Dokter(req.body);
    await dokter.save();
    res.status(201).json(dokter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ambil Semua Data Dokter
router.get('/', async (req, res) => {
  const data = await Dokter.find();
  res.json(data);
});

// Ambil Dokter Berdasarkan ID
router.get('/:id', async (req, res) => {
  const data = await Dokter.findById(req.params.id);
  if (!data) return res.status(404).json({ error: 'Tidak ditemukan' });
  res.json(data);
});

// Update Data Dokter
router.put('/:id', async (req, res) => {
  try {
    const updated = await Dokter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Hapus Dokter
router.delete('/:id', async (req, res) => {
  try {
    await Dokter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dokter berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;