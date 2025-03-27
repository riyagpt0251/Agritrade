/* eslint-disable no-undef */
/* eslint-env node */
const express = require('express');
const app = express();
const port = 3000;

// Add the following middleware to set the correct MIME type for .jsx files
express.static.mime.define({'text/jsx': ['jsx']});

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Track online traders
const onlineTraders = new Set();

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Handle trader login
  socket.on('traderLogin', (traderId) => {
    onlineTraders.add(traderId);
    socket.join(traderId); // Join a room named after the trader ID
    io.emit('traderStatus', { id: traderId, online: true });
    console.log(`Trader ${traderId} logged in and joined room ${traderId}`);
  });
  
  // Handle trader logout
  socket.on('traderLogout', (traderId) => {
    onlineTraders.delete(traderId);
    socket.leave(traderId);
    io.emit('traderStatus', { id: traderId, online: false });
    console.log(`Trader ${traderId} logged out and left room ${traderId}`);
  });
  
  // Handle messages
  socket.on('sendMessage', (message) => {
    // Send message to the recipient's room (should match traderId)
    io.to(message.recipient).emit('message', message);
    console.log(`Message sent to ${message.recipient}:`, message);
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
