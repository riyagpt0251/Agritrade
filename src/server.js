const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST"]
  }
});

// Track online traders
const onlineTraders = new Set();

io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Handle trader login
  socket.on('traderLogin', (traderId) => {
    onlineTraders.add(traderId);
    io.emit('traderStatus', { id: traderId, online: true });
  });
  
  // Handle trader logout
  socket.on('traderLogout', (traderId) => {
    onlineTraders.delete(traderId);
    io.emit('traderStatus', { id: traderId, online: false });
  });
  
  // Handle messages
  socket.on('sendMessage', (message) => {
    io.to(message.recipient).emit('message', message);
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});