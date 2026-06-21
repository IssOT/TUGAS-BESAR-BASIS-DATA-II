const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/SinaMedis')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/pasien', require('./routes/pasien'));
app.use('/api/dokter', require('./routes/dokter'));
app.use('/api/obat',   require('./routes/obat'));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));