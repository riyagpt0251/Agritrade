import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Spinner, 
  Alert, 
  Badge,
  Tab,
  Tabs,
  ListGroup,
  Form,
  Modal,
  Carousel
} from 'react-bootstrap';
import { FaHeart, FaShare, FaStar, FaMapMarkerAlt, FaShippingFast } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

const AuctionDetail = ({ auctions, handleBid, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  const [showBidModal, setShowBidModal] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Find the auction in the passed array
    const foundAuction = auctions.find(a => a.id === id);
    
    if (foundAuction) {
      setAuction(foundAuction);
      setLoading(false);
      
      // Calculate time left
      updateTimeLeft(foundAuction.endDate);
      const timer = setInterval(() => updateTimeLeft(foundAuction.endDate), 1000);
      
      return () => clearInterval(timer);
    } else {
      setError('Auction not found');
      setLoading(false);
    }
  }, [id, auctions]);

  const updateTimeLeft = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;
    
    if (diff <= 0) {
      setTimeLeft('Ended');
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  const handlePlaceBid = () => {
    const amount = parseFloat(bidAmount);
    if (isNaN(amount)) {
      setError('Please enter a valid bid amount');
      return;
    }
    
    if (amount <= auction.currentPrice) {
      setError(`Your bid must be higher than $${auction.currentPrice}`);
      return;
    }
    
    setShowBidModal(true);
  };

  const confirmBid = () => {
    handleBid(auction.id, parseFloat(bidAmount));
    setShowBidModal(false);
    setBidAmount('');
    setError(null);
  };

  const formatDate = (dateString) => {
    return format(parseISO(dateString), 'MMMM d, yyyy HH:mm');
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
        <Spinner animation="border" variant="success" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
        <Button variant="outline-primary" onClick={() => navigate('/auction')}>
          Back to Auctions
        </Button>
      </Container>
    );
  }

  if (!auction) {
    return null;
  }

  return (
    <Container className="py-4">
      <Button 
        variant="outline-secondary" 
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        Back
      </Button>
      
      <Row>
        <Col lg={6}>
          <Card className="mb-4">
            {auction.images && auction.images.length > 0 ? (
              <Carousel interval={null} indicators={auction.images.length > 1}>
                {auction.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={img.preview || img}
                      alt={`Auction item ${index + 1}`}
                      style={{ maxHeight: '500px', objectFit: 'contain' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '300px' }}>
                <span className="text-muted">No images available</span>
              </div>
            )}
            
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button 
                  variant={isWatching ? 'danger' : 'outline-danger'}
                  onClick={() => setIsWatching(!isWatching)}
                >
                  <FaHeart className="me-1" />
                  {isWatching ? 'Watching' : 'Watch'}
                </Button>
                <Button variant="outline-primary">
                  <FaShare className="me-1" />
                  Share
                </Button>
              </div>
              
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-3"
              >
                <Tab eventKey="details" title="Details">
                  <div className="mt-3">
                    <h5>Item Description</h5>
                    <div dangerouslySetInnerHTML={{ __html: auction.description }} />
                    
                    <h5 className="mt-4">Item Condition</h5>
                    <p>{auction.itemCondition}</p>
                    
                    <h5 className="mt-4">Return Policy</h5>
                    <p>{auction.returnPolicy}</p>
                  </div>
                </Tab>
                <Tab eventKey="shipping" title="Shipping">
                  <div className="mt-3">
                    <h5><FaShippingFast className="me-2" />Shipping Options</h5>
                    {auction.shippingOptions && auction.shippingOptions.length > 0 ? (
                      <ListGroup variant="flush">
                        {auction.shippingOptions.map((option, index) => (
                          <ListGroup.Item key={index}>
                            <div className="d-flex justify-content-between">
                              <span>
                                <strong>{option.name}</strong>: {option.deliveryTime}
                              </span>
                              <span>${option.cost}</span>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <p>No shipping options specified</p>
                    )}
                    
                    <h5 className="mt-4"><FaMapMarkerAlt className="me-2" />Item Location</h5>
                    {auction.location ? (
                      <div>
                        <p>{auction.location.address}</p>
                        {/* Would integrate with a map component here */}
                      </div>
                    ) : (
                      <p>Location not specified</p>
                    )}
                  </div>
                </Tab>
                <Tab eventKey="seller" title="Seller">
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <h4 className="m-0">{auction.seller.name.charAt(0)}</h4>
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">{auction.seller.name}</h5>
                        <div className="d-flex align-items-center">
                          <FaStar className="text-warning me-1" />
                          <span>{auction.seller.rating} (10 reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline-primary" className="me-2">
                      Contact Seller
                    </Button>
                    <Button variant="outline-success">
                      View Other Listings
                    </Button>
                    
                    <h5 className="mt-4">Seller Information</h5>
                    <p>Member since {formatDate(auction.createdAt)}</p>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <h2 className="mb-3">{auction.title}</h2>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="text-muted">Current Bid:</span>
                  <h3 className="mb-0">${auction.currentPrice || auction.startingPrice}</h3>
                </div>
                <Badge bg={timeLeft === 'Ended' ? 'danger' : 'success'} className="fs-6">
                  {timeLeft}
                </Badge>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Starting Price:</span>
                <span>${auction.startingPrice}</span>
              </div>
              
              {auction.reservePrice && (
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Reserve Price:</span>
                  <span>${auction.reservePrice}</span>
                </div>
              )}
              
              {auction.buyNowPrice && (
                <div className="d-flex justify-content-between mb-4">
                  <span className="text-muted">Buy It Now:</span>
                  <span>${auction.buyNowPrice}</span>
                </div>
              )}
              
              <div className="mb-4">
                <span className="text-muted">{auction.bids?.length || 0} bids</span>
                <div className="progress mt-2" style={{ height: '10px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ width: `${Math.min(auction.bids?.length * 10, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              {timeLeft !== 'Ended' && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Your Bid ($)</Form.Label>
                    <Form.Control
                      type="number"
                      min={auction.currentPrice ? auction.currentPrice + 1 : auction.startingPrice}
                      step="0.01"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder={`Minimum bid $${auction.currentPrice ? auction.currentPrice + 1 : auction.startingPrice}`}
                    />
                  </Form.Group>
                  
                  {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
                  
                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      size="lg"
                      onClick={handlePlaceBid}
                      disabled={!bidAmount}
                    >
                      Place Bid
                    </Button>
                    
                    {auction.buyNowPrice && (
                      <Button 
                        variant="success" 
                        size="lg"
                        onClick={() => handleBid(auction.id, auction.buyNowPrice)}
                      >
                        Buy It Now (${auction.buyNowPrice})
                      </Button>
                    )}
                  </div>
                </>
              )}
              
              {timeLeft === 'Ended' && (
                <Alert variant="info">
                  This auction has ended. {auction.bids?.length > 0 ? 
                    `Winning bid was $${auction.currentPrice}` : 
                    'No bids were placed.'}
                </Alert>
              )}
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h5 className="mb-3">Bid History</h5>
              {auction.bids && auction.bids.length > 0 ? (
                <ListGroup variant="flush">
                  {auction.bids.map((bid, index) => (
                    <ListGroup.Item key={index}>
                      <div className="d-flex justify-content-between">
                        <span>
                          <strong>{bid.bidder}</strong>
                          {bid.bidder === user?.name && <Badge bg="info" className="ms-2">You</Badge>}
                        </span>
                        <span>${bid.amount}</span>
                      </div>
                      <small className="text-muted">{formatDate(bid.timestamp)}</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No bids yet</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Bid Confirmation Modal */}
      <Modal show={showBidModal} onHide={() => setShowBidModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to place a bid of <strong>${bidAmount}</strong> on:</p>
          <h5>{auction.title}</h5>
          <p className="text-muted">This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBidModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmBid}>
            Confirm Bid
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AuctionDetail;