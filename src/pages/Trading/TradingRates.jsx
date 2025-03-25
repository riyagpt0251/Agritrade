import React from 'react';
import { Container, Card, Table, Badge } from 'react-bootstrap';
import { FaExchangeAlt, FaHistory } from 'react-icons/fa';

const TradingRates = ({ rates }) => {
  const rateHistory = [
    { time: '1 hour ago', buy: 1.0215, sell: 0.9812 },
    { time: '3 hours ago', buy: 1.0198, sell: 0.9825 },
    { time: '6 hours ago', buy: 1.0182, sell: 0.9831 },
    { time: '12 hours ago', buy: 1.0175, sell: 0.9840 },
    { time: '24 hours ago', buy: 1.0160, sell: 0.9852 }
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-4 d-flex align-items-center">
        <FaExchangeAlt className="me-2" />
        Trading Rates
      </h2>
      
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-around text-center">
            <div>
              <h5>Current Buying Rate</h5>
              <Badge bg="success" className="fs-4 p-3">
                ${rates.buyingRate.toFixed(4)}
              </Badge>
              <p className="text-muted mt-2">For purchasing goods</p>
            </div>
            <div>
              <h5>Current Selling Rate</h5>
              <Badge bg="danger" className="fs-4 p-3">
                ${rates.sellingRate.toFixed(4)}
              </Badge>
              <p className="text-muted mt-2">For selling goods</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="d-flex align-items-center">
          <FaHistory className="me-2" />
          Rate History (Last 24 Hours)
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Buy Rate</th>
                <th>Sell Rate</th>
                <th>Spread</th>
              </tr>
            </thead>
            <tbody>
              {rateHistory.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.time}</td>
                  <td>${rate.buy.toFixed(4)}</td>
                  <td>${rate.sell.toFixed(4)}</td>
                  <td>{(rate.buy - rate.sell).toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TradingRates;