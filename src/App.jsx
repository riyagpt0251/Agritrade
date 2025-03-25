import React, { useState, useEffect, lazy, Suspense } from 'react';
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
  Alert,
  Badge,
  Popover
} from '@mui/material';
import { Chart } from 'chart.js/auto';
import { FaCoins, FaChartLine, FaExchangeAlt, FaCrown } from 'react-icons/fa';

// Register Chart.js components
Chart.register();

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Deals = lazy(() => import('./pages/Deals'));
const Market = lazy(() => import('./pages/Market'));
const Traders = lazy(() => import('./pages/Traders'));
const LocationMap = lazy(() => import('./pages/Location'));
const Auction = lazy(() => import('./pages/Auction/Auction'));
const CreateAuction = lazy(() => import('./pages/Auction/CreateAuction'));
const AuctionDetail = lazy(() => import('./pages/Auction/AuctionDetail'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const TradingRates = lazy(() => import('./pages/Trading/TradingRates'));
const ECredit = lazy(() => import('./pages/Finance/ECredit'));
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }

  &.active {
    background-color: rgba(255,255,255,0.2);
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const PaymentModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 400px;
  outline: none;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  min-width: 250px;
  padding: 1rem;
  color: #333;
`;

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    loading: true
  });
  const [paymentModal, setPaymentModal] = useState({
    open: false,
    amount: 0,
    item: ''
  });
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [auctions, setAuctions] = useState([]);
  const [tradingRates, setTradingRates] = useState({
    buyingRate: 1.02,
    sellingRate: 0.98,
    lastUpdated: new Date()
  });
  const [showRatesDropdown, setShowRatesDropdown] = useState(false);
  const [showECreditDropdown, setShowECreditDropdown] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  // Initialize auth state
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuth({
        isAuthenticated: true,
        user: { 
          id: 'user123',
          name: 'Demo User', 
          email: 'demo@example.com',
          balance: 5000,
          eCredit: 250,
          rating: 4.5 
        },
        loading: false
      });
    } else {
      setAuth(prev => ({ ...prev, loading: false }));
    }

    // Load leaderboard data
    const mockLeaderboard = [
      { id: 1, name: 'TraderPro', volume: 125000, rating: 4.9 },
      { id: 2, name: 'AgriMaster', volume: 98000, rating: 4.8 },
      { id: 3, name: 'FarmKing', volume: 87500, rating: 4.7 },
      { id: 4, name: 'CropQueen', volume: 76500, rating: 4.6 },
      { id: 5, name: 'HarvestHero', volume: 68000, rating: 4.5 }
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  // Update trading rates periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTradingRates(prev => ({
        buyingRate: 1.02 + (Math.random() * 0.01 - 0.005),
        sellingRate: 0.98 + (Math.random() * 0.01 - 0.005),
        lastUpdated: new Date()
      }));
    }, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('authToken', 'dummy-token');
    setAuth({
      isAuthenticated: true,
      user: { 
        ...userData, 
        balance: 5000,
        eCredit: 250,
        rating: 4.5
      },
      loading: false
    });
    showNotification('Login successful!', 'success');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuth({
      isAuthenticated: false,
      user: null,
      loading: false
    });
    showNotification('Logged out successfully', 'info');
    navigate('/');
  };

  const handlePayment = (amount, item) => {
    setPaymentModal({
      open: true,
      amount,
      item
    });
  };

  const completePayment = () => {
    setAuth(prev => ({
      ...prev,
      user: {
        ...prev.user,
        balance: prev.user.balance - paymentModal.amount
      }
    }));
    setPaymentModal(prev => ({ ...prev, open: false }));
    showNotification('Payment completed successfully!', 'success');
  };

  const showNotification = (message, severity = 'success') => {
    setNotification({
      open: true,
      message,
      severity
    });
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const handleCreateAuction = async (auctionData) => {
    try {
      const newAuction = {
        id: Math.random().toString(36).substring(7),
        ...auctionData,
        createdAt: new Date().toISOString(),
        bids: [],
        status: 'active',
        seller: {
          id: auth.user.id,
          name: auth.user.name,
          rating: auth.user.rating
        },
        views: 0,
        currentPrice: auctionData.startingPrice
      };
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAuctions(prev => [newAuction, ...prev]);
      showNotification('Auction created successfully!', 'success');
      return newAuction;
    } catch (error) {
      showNotification('Failed to create auction', 'error');
      throw error;
    }
  };

  const handleBid = (auctionId, amount) => {
    if (!auth.isAuthenticated) {
      navigate('/login', { state: { from: location } });
      return;
    }
    
    if (auth.user.balance < amount) {
      showNotification('Insufficient balance', 'error');
      return;
    }

    handlePayment(amount, `Bid on auction ${auctionId}`);
    
    // Update auction with new bid
    setAuctions(prev => prev.map(auction => {
      if (auction.id === auctionId) {
        return {
          ...auction,
          bids: [
            ...auction.bids,
            {
              bidder: auth.user.name,
              amount,
              timestamp: new Date().toISOString()
            }
          ],
          currentPrice: amount
        };
      }
      return auction;
    }));
  };

  const ProtectedRoute = ({ children }) => {
    if (auth.loading) return (
      <LoadingFallback>
        <CircularProgress style={{ color: '#2e7d32' }} />
      </LoadingFallback>
    );
    if (!auth.isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
  };

  const PublicRoute = ({ children }) => {
    if (auth.loading) return (
      <LoadingFallback>
        <CircularProgress style={{ color: '#2e7d32' }} />
      </LoadingFallback>
    );
    if (auth.isAuthenticated) return <Navigate to="/" replace />;
    return children;
  };

  const toggleRatesDropdown = (e) => {
    e.stopPropagation();
    setShowRatesDropdown(!showRatesDropdown);
    setShowECreditDropdown(false);
  };

  const toggleECreditDropdown = (e) => {
    e.stopPropagation();
    setShowECreditDropdown(!showECreditDropdown);
    setShowRatesDropdown(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowRatesDropdown(false);
      setShowECreditDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <AppContainer>
      <Navbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 style={{ margin: 0 }}>🌱 Agritrade</h1>
        </Link>

        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/deals" className={location.pathname === '/deals' ? 'active' : ''}>Deals</NavLink>
          <NavLink to="/market" className={location.pathname === '/market' ? 'active' : ''}>Market</NavLink>
          <NavLink to="/auction" className={location.pathname === '/auction' ? 'active' : ''}>Auctions</NavLink>
          <NavLink to="/traders" className={location.pathname === '/traders' ? 'active' : ''}>Traders</NavLink>
          <NavLink to="/location" className={location.pathname === '/location' ? 'active' : ''}>Trade Map</NavLink>
          <NavLink to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active' : ''}>
            <FaCrown className="me-1" />
            Leaderboard
          </NavLink>
          
          {/* Trading Rates Dropdown */}
          <div className="position-relative">
            <Button 
              variant="link" 
              className="text-white text-decoration-none"
              onClick={toggleRatesDropdown}
            >
              <FaExchangeAlt className="me-1" />
              Trading Rates
            </Button>
            {showRatesDropdown && (
              <DropdownMenu>
                <h6 className="mb-2">Current Trading Rates</h6>
                <div className="d-flex justify-content-between mb-1">
                  <span>Buying Rate:</span>
                  <strong>${tradingRates.buyingRate.toFixed(4)}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Selling Rate:</span>
                  <strong>${tradingRates.sellingRate.toFixed(4)}</strong>
                </div>
                <small className="text-muted">
                  Updated: {tradingRates.lastUpdated.toLocaleTimeString()}
                </small>
                <div className="mt-2">
                  <Link to="/trading-rates" className="btn btn-sm btn-outline-primary w-100">
                    View Details
                  </Link>
                </div>
              </DropdownMenu>
            )}
          </div>
        </NavLinks>

        <AuthSection>
          {/* E-Credit Dropdown */}
          {auth.isAuthenticated && (
            <div className="position-relative me-3">
              <Button 
                variant="link" 
                className="text-white text-decoration-none"
                onClick={toggleECreditDropdown}
              >
                <FaCoins className="me-1" />
                E-Credit: ${auth.user?.eCredit.toLocaleString()}
              </Button>
              {showECreditDropdown && (
                <DropdownMenu style={{ right: 'auto', left: 0 }}>
                  <h6 className="mb-3">E-Credit Account</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Available Balance:</span>
                    <strong>${auth.user?.eCredit.toLocaleString()}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Cash Balance:</span>
                    <strong>${auth.user?.balance.toLocaleString()}</strong>
                  </div>
                  <div className="d-grid gap-2">
                    <Link to="/ecredit" className="btn btn-sm btn-primary">
                      Manage E-Credit
                    </Link>
                    <Button variant="outline-secondary" size="sm">
                      Transaction History
                    </Button>
                  </div>
                </DropdownMenu>
              )}
            </div>
          )}

          {auth.isAuthenticated ? (
            <>
              <Button 
                variant="contained" 
                onClick={handleLogout}
                style={{ 
                  backgroundColor: 'white', 
                  color: '#2e7d32',
                  textTransform: 'none'
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                component={Link}
                to="/login"
                style={{ 
                  color: 'white',
                  textTransform: 'none'
                }}
              >
                Login
              </Button>
              <Button 
                component={Link}
                to="/register"
                variant="contained"
                style={{ 
                  backgroundColor: 'white', 
                  color: '#2e7d32',
                  textTransform: 'none'
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </AuthSection>
      </Navbar>

      <MainContent>
        <Suspense fallback={
          <LoadingFallback>
            <CircularProgress style={{ color: '#2e7d32' }} />
          </LoadingFallback>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals handlePayment={handlePayment} />} />
            <Route path="/market" element={<Market auctions={auctions} handleBid={handleBid} />} />
            <Route path="/location" element={<LocationMap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/trading-rates" element={<TradingRates rates={tradingRates} />} />
            <Route path="/ecredit" element={
              <ProtectedRoute>
                <ECredit user={auth.user} />
              </ProtectedRoute>
            } />
            <Route path="/leaderboard" element={<Leaderboard data={leaderboard} />} />
            
            {/* Auction Routes */}
            <Route path="/auction" element={<Auction auctions={auctions} handleBid={handleBid} />} />
            <Route 
              path="/auction/create" 
              element={
                <ProtectedRoute>
                  <CreateAuction 
                    onCreateAuction={handleCreateAuction} 
                    user={auth.user}
                  />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/auction/:id" 
              element={<AuctionDetail 
                auctions={auctions}
                handleBid={handleBid}
                user={auth.user}
              />} 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/traders" 
              element={
                <ProtectedRoute>
                  <Traders />
                </ProtectedRoute>
              } 
            />
            
            {/* Auth Routes */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login onLogin={handleLogin} />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register onRegister={handleLogin} />
                </PublicRoute>
              } 
            />
            
            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </MainContent>

      {/* Payment Modal */}
      <Modal
        open={paymentModal.open}
        onClose={() => setPaymentModal(prev => ({ ...prev, open: false }))}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={paymentModal.open}>
          <PaymentModalContent>
            <h2>Confirm Payment</h2>
            <p>You are about to pay ${paymentModal.amount} for {paymentModal.item}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
              <Button 
                variant="outlined" 
                onClick={() => setPaymentModal(prev => ({ ...prev, open: false }))}
              >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="success" 
                onClick={completePayment}
              >
                Confirm Payment
              </Button>
            </div>
          </PaymentModalContent>
        </Fade>
      </Modal>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </AppContainer>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;