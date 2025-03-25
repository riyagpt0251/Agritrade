import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Typography, Card, CardContent, Chip } from '@mui/material';

const AuctionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AuctionItem = styled(Card)`
  margin-bottom: 2rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Auction = ({ biddingMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auctions, setAuctions] = useState([
    {
      id: '1',
      title: 'Organic Wheat Harvest',
      description: 'Premium quality organic wheat from local farms',
      currentBid: 1500,
      endTime: '2023-12-31T23:59:59',
      image: '/wheat.jpg'
    },
    // More auction items...
  ]);

  const handleBidClick = (auctionId) => {
    if (biddingMode) {
      // Handle bid submission
    } else {
      navigate(`/auction/bid/${auctionId}`);
    }
  };

  return (
    <AuctionContainer>
      <Typography variant="h4" gutterBottom>
        {biddingMode ? 'Place Your Bid' : 'Current Auctions'}
      </Typography>

      {auctions.map(auction => (
        <AuctionItem key={auction.id}>
          <CardContent>
            <Typography variant="h5">{auction.title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {auction.description}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Current Bid: ${auction.currentBid}
            </Typography>
            <Chip 
              label={`Ends: ${new Date(auction.endTime).toLocaleString()}`} 
              color="primary" 
              sx={{ mt: 1, mb: 2 }}
            />
            
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleBidClick(auction.id)}
            >
              {biddingMode ? 'Place Bid' : 'View & Bid'}
            </Button>
          </CardContent>
        </AuctionItem>
      ))}
    </AuctionContainer>
  );
};

export default Auction;