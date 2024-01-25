// index.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./app/routes/auth.routes');

require('dotenv').config({path:'./app/.env'});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const app = express();

app.use(express.json());

// Use authentication routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
