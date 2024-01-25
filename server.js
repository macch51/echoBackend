// index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const authRoutes = require('./app/routes/auth.routes');
const messageRoutes = require('./app/routes/message.routes');

require('dotenv').config({path:'./app/.env'});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

// Use authentication routes
app.use('/api', authRoutes);
app.use('/api/messages', messageRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');

  // Example: Listen for a 'message' event and broadcast it to all clients
  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Add more event listeners as needed
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
