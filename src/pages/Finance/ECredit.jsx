import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Tab, Tabs } from 'react-bootstrap';
import { FaCoins, FaExchangeAlt, FaHistory } from 'react-icons/fa';

const ECredit = ({ user }) => {
  const [activeTab, setActiveTab] = useState('transfer');
  const [amount, setAmount] = useState('');
  const [transferType, setTransferType] = useState('toEcredit');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleTransfer = (e) => {
    e.preventDefault();
    const transferAmount = parseFloat(amount);
    
    if (isNaN(transferAmount) ){
      setError('Please enter a valid amount');
      return;
    }
    
    if (transferType === 'toEcredit' && transferAmount > user.balance) {
      setError('Insufficient cash balance');
      return;
    }
    
    if (transferType === 'toCash' && transferAmount > user.eCredit) {
      setError('Insufficient E-Credit balance');
      return;
    }
    
    // In a real app, this would be an API call
    setError(null);
    setSuccess(`Successfully transferred $${transferAmount} ${transferType === 'toEcredit' ? 'to E-Credit' : 'to Cash'}`);
    setAmount('');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 d-flex align-items-center">
        <FaCoins className="me-2" />
        E-Credit Account
      </h2>
      
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-around text-center">
            <div>
              <h5>Cash Balance</h5>
              <p className="fs-3">${user.balance.toLocaleString()}</p>
            </div>
            <div>
              <h5>E-Credit Balance</h5>
              <p className="fs-3 text-primary">${user.eCredit.toLocaleString()}</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        <Tab eventKey="transfer" title="Transfer Funds">
          <Card>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              
              <Form onSubmit={handleTransfer}>
                <Form.Group className="mb-3">
                  <Form.Label>Transfer Amount ($)</Form.Label>
                  <Form.Control
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Transfer Direction</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      id="toEcredit"
                      label="Cash to E-Credit"
                      name="transferType"
                      checked={transferType === 'toEcredit'}
                      onChange={() => setTransferType('toEcredit')}
                    />
                    <Form.Check
                      type="radio"
                      id="toCash"
                      label="E-Credit to Cash"
                      name="transferType"
                      checked={transferType === 'toCash'}
                      onChange={() => setTransferType('toCash')}
                    />
                  </div>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  <FaExchangeAlt className="me-2" />
                  Transfer Funds
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="history" title="Transaction History">
          <Card>
            <Card.Header className="d-flex align-items-center">
              <FaHistory className="me-2" />
              Recent Transactions
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No recent transactions</p>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ECredit;