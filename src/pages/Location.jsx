import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Temporary test components - REPLACE these with your actual components later
const Home = () => <h1 style={{ color: 'red', padding: '20px' }}>HOME PAGE IS WORKING</h1>;
const Deals = () => <h1 style={{ color: 'red', padding: '20px' }}>DEALS PAGE IS WORKING</h1>;
const Market = () => <h1 style={{ color: 'red', padding: '20px' }}>MARKET PAGE IS WORKING</h1>;
const Location = () => <h1 style={{ color: 'red', padding: '20px' }}>LOCATION PAGE IS WORKING</h1>;

const App = () => {
  // This will confirm the component is loading
  console.log('APP COMPONENT IS RENDERING - CHECK BROWSER CONSOLE');
  
  return (
    <BrowserRouter>
      <div>
        {/* Basic navigation */}
        <div style={{ background: '#2e7d32', padding: '10px', display: 'flex', gap: '10px' }}>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
          <Link to="/deals" style={{ color: 'white' }}>Deals</Link>
          <Link to="/market" style={{ color: 'white' }}>Market</Link>
          <Link to="/location" style={{ color: 'white' }}>Location</Link>
        </div>

        {/* Main content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/market" element={<Market />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;