/* eslint-disable no-unused-vars */
import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  Link, 
  useLocation, 
  useNavigate 
} from 'react-router-dom';
import styled from 'styled-components';
import { 
  Modal, 
  Backdrop, 
  Fade, 
  Button, 
  CircularProgress, 
  Snackbar, 
  Alert 
} from '@mui/material';
import { Chart } from 'chart.js/auto';
import { FaCoins, FaCrown, FaExchangeAlt } from 'react-icons/fa';
import io from 'socket.io-client';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Deals = lazy(() => import('./pages/Deals'));
const Market = lazy(() => import('./pages/Market'));
const Traders = lazy(() => import('./pages/Traders'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Leaderboard = lazy(() => import('./pages/Community/Leaderboard'));

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Roboto, sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2e7d32;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 4px;
  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const socketRef = useRef(null);

  // State for authentication
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    loading: true
  });

  // Optional: state to hold trader statuses received from the server
  const [traderStatuses, setTraderStatuses] = useState({});

  // Initialize Socket.IO connection on mount
  useEffect(() => {
    // Connect to the Socket.IO server (adjust the URL/port as needed)
    socketRef.current = io('http://localhost:3001');

    // Listen for trader status updates
    socketRef.current.on('traderStatus', (status) => {
      console.log('Received trader status:', status);
      setTraderStatuses(prev => ({ ...prev, [status.id]: status.online }));
    });

    // Clean up on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Initialize auth state from localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // In a real app, also fetch user data here
      const userData = { id: 'trader123', name: 'Demo User', balance: 5000 };
      setAuth({
        isAuthenticated: true,
        user: userData,
        loading: false
      });
      // Emit trader login event with trader id
      socketRef.current && socketRef.current.emit('traderLogin', userData.id);
    } else {
      setAuth(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('authToken', 'dummy-token');
    setAuth({
      isAuthenticated: true,
      user: userData,
      loading: false
    });
    // Emit trader login event on login
    socketRef.current && socketRef.current.emit('traderLogin', userData.id);
    navigate('/');
  };

  const handleLogout = () => {
    // Emit trader logout event before clearing auth
    if (auth.user && socketRef.current) {
      socketRef.current.emit('traderLogout', auth.user.id);
    }
    localStorage.removeItem('authToken');
    setAuth({
      isAuthenticated: false,
      user: null,
      loading: false
    });
    navigate('/login');
  };

  return (
    <AppContainer>
      <Navbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>🌱 Agritrade</h1>
        </Link>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/deals">Deals</NavLink>
          <NavLink to="/market">Market</NavLink>
          <NavLink to="/traders">Traders</NavLink>
          <NavLink to="/leaderboard">
            <FaCrown /> Leaderboard
          </NavLink>
        </div>
        <AuthSection>
          {auth.isAuthenticated ? (
            <>
              <span>Balance: ${auth.user.balance}</span>
              <Button variant="contained" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/login">Login</Button>
              <Button component={Link} to="/register" variant="contained">Sign Up</Button>
            </>
          )}
        </AuthSection>
      </Navbar>

      <MainContent>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/market" element={<Market />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/traders" element={auth.isAuthenticated ? <Traders /> : <Navigate to="/login" />} />
            <Route path="/login" element={!auth.isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="/register" element={!auth.isAuthenticated ? <Register onLogin={handleLogin} /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </MainContent>
    </AppContainer>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
