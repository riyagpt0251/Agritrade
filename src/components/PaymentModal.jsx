import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
`;

const PaymentOption = styled.div`
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #2e7d32;
    background: #f8f9fa;
  }
`;

const PaymentModal = ({ amount, onClose, onSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      onSuccess({
        amount,
        method: selectedMethod,
        transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString()
      });
    }, 1500);
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>Complete Payment (${amount})</h2>
        
        <h3>Select Payment Method</h3>
        
        <PaymentOption onClick={() => setSelectedMethod('e-money')}>
          <h4>E-Money Wallet</h4>
          <p>Pay using your Agritrade e-money balance</p>
        </PaymentOption>
        
        <PaymentOption onClick={() => setSelectedMethod('credit-card')}>
          <h4>Credit/Debit Card</h4>
          <p>Pay with Visa, Mastercard, or other cards</p>
        </PaymentOption>
        
        <button 
          onClick={handlePayment}
          disabled={!selectedMethod}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: selectedMethod ? '#2e7d32' : '#cccccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: selectedMethod ? 'pointer' : 'not-allowed'
          }}
        >
          Confirm Payment
        </button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default PaymentModal;