import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const Traders = () => {
  const [traders, setTraders] = useState([
    { id: 1, name: 'John Farmington', specialty: 'Wheat', online: true },
    { id: 2, name: 'Sarah AgriCorp', specialty: 'Corn', online: false },
    { id: 3, name: 'Mike Grains Ltd', specialty: 'Soybeans', online: true },
  ]);
  
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:3001'); // Your backend URL
    setSocket(newSocket);

    // Clean up on unmount
    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Listen for trader status updates
    socket.on('traderStatus', (updatedTrader) => {
      setTraders((prev) =>
        prev.map((trader) =>
          trader.id === updatedTrader.id ? updatedTrader : trader
        )
      );
    });
  }, [socket]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTrader) return;
    
    const message = {
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      traderId: selectedTrader.id,
    };

    // In a real app, emit to server
    socket.emit('sendMessage', {
      ...message,
      sender: 'CurrentUserId', // Replace with actual user ID
      recipient: selectedTrader.id,
    });

    setMessages((prev) => [...prev, message]);
    setNewMessage('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Trader Network</h1>
      
      <div style={styles.traderChatContainer}>
        {/* Trader List */}
        <div style={styles.traderList}>
          <h3 style={styles.subHeader}>Available Traders</h3>
          {traders.map((trader) => (
            <div
              key={trader.id}
              style={{
                ...styles.traderCard,
                backgroundColor: selectedTrader?.id === trader.id ? '#f0f0f0' : 'white',
              }}
              onClick={() => setSelectedTrader(trader)}
            >
              <div style={styles.traderInfo}>
                <span style={styles.traderName}>{trader.name}</span>
                <span style={styles.traderSpecialty}>{trader.specialty}</span>
              </div>
              <div style={styles.statusIndicator}>
                <div
                  style={{
                    ...styles.statusDot,
                    backgroundColor: trader.online ? '#4CAF50' : '#e0e0e0',
                  }}
                />
                <span>{trader.online ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div style={styles.chatArea}>
          {selectedTrader ? (
            <>
              <div style={styles.chatHeader}>
                <h3>Chat with {selectedTrader.name}</h3>
                <span style={styles.specialtyBadge}>
                  {selectedTrader.specialty} trader
                </span>
              </div>
              
              <div style={styles.messagesContainer}>
                {messages
                  .filter((msg) => msg.traderId === selectedTrader.id)
                  .map((msg, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.message,
                        alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                        backgroundColor: msg.sender === 'You' ? '#DCF8C6' : '#ECECEC',
                      }}
                    >
                      <div style={styles.messageText}>{msg.text}</div>
                      <div style={styles.messageTime}>{msg.timestamp}</div>
                    </div>
                  ))}
              </div>
              
              <div style={styles.messageInputContainer}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={styles.messageInput}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  style={styles.sendButton}
                  disabled={!newMessage.trim()}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div style={styles.noTraderSelected}>
              <p>Select a trader to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// JSX Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '30px',
  },
  traderChatContainer: {
    display: 'flex',
    height: '70vh',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  traderList: {
    width: '300px',
    borderRight: '1px solid #e0e0e0',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
  subHeader: {
    padding: '15px',
    margin: 0,
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  traderCard: {
    padding: '15px',
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  traderInfo: {
    marginBottom: '10px',
  },
  traderName: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  traderSpecialty: {
    fontSize: '0.9rem',
    color: '#666',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '5px',
  },
  chatArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    padding: '15px',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specialtyBadge: {
    backgroundColor: '#FFC107',
    color: '#333',
    padding: '3px 8px',
    borderRadius: '12px',
    fontSize: '0.8rem',
  },
  messagesContainer: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  message: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  messageText: {
    marginBottom: '5px',
  },
  messageTime: {
    fontSize: '0.7rem',
    color: '#666',
    alignSelf: 'flex-end',
  },
  messageInputContainer: {
    display: 'flex',
    padding: '15px',
    borderTop: '1px solid #e0e0e0',
  },
  messageInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    marginRight: '10px',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: '#a5d6a7',
      cursor: 'not-allowed',
    },
  },
  noTraderSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#666',
  },
};

export default Traders;