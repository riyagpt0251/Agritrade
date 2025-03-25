import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
`;

const FAQHeader = styled.h1`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const FAQIntro = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const FAQCategory = styled.h2`
  color: #1b5e20;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e0e0e0;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: left;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e8f5e9;
  }
`;

const FAQAnswer = styled.div`
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  line-height: 1.6;
  color: #555;
`;

const ContactPrompt = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #e8f5e9;
  border-radius: 8px;
  text-align: center;

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const ContactLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #2e7d32;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1b5e20;
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'General Questions',
      items: [
        {
          question: 'What is Agritrade?',
          answer: 'Agritrade is a platform connecting agricultural producers with traders and buyers worldwide. We facilitate transparent and efficient trade of agricultural products.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Sign Up" button in the top right corner of the page and follow the registration process. You\'ll need to provide some basic information and verify your email address.'
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Currently, Agritrade is only available as a web application. We plan to release mobile apps in the future.'
        }
      ]
    },
    {
      category: 'Buying & Selling',
      items: [
        {
          question: 'How do I list my products for sale?',
          answer: 'After logging in, go to the "Market" section and click "Add Listing". Fill in the details about your product including quantity, price, and quality specifications.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'We support various payment methods including bank transfers, escrow services, and in some cases, cash on delivery. Payment options are agreed upon between buyers and sellers.'
        },
        {
          question: 'How are disputes resolved?',
          answer: 'Agritrade provides a mediation service for disputes. Both parties can submit evidence, and our team will help facilitate a fair resolution.'
        }
      ]
    },
    {
      category: 'Account & Security',
      items: [
        {
          question: 'How do I reset my password?',
          answer: 'Go to the login page and click "Forgot Password". You\'ll receive an email with instructions to reset your password.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we use industry-standard encryption and security measures to protect your data. Read our Privacy Policy for more details.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion in your profile settings. Note that this action is irreversible.'
        }
      ]
    }
  ];

  return (
    <FAQContainer>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <FAQIntro>
        Find answers to common questions about Agritrade below. If you can't find what you're looking for, 
        feel free to contact our support team.
      </FAQIntro>

      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <FAQCategory>{category.category}</FAQCategory>
          {category.items.map((item, itemIndex) => {
            const globalIndex = faqData.slice(0, categoryIndex).reduce((acc, curr) => acc + curr.items.length, 0) + itemIndex;
            return (
              <FAQItem key={globalIndex}>
                <FAQQuestion onClick={() => toggleFAQ(globalIndex)}>
                  {item.question}
                  <span>{activeIndex === globalIndex ? '−' : '+'}</span>
                </FAQQuestion>
                {activeIndex === globalIndex && <FAQAnswer>{item.answer}</FAQAnswer>}
              </FAQItem>
            );
          })}
        </div>
      ))}

      <ContactPrompt>
        <p>Still have questions? We're here to help!</p>
        <ContactLink to="/contact">Contact Our Support Team</ContactLink>
      </ContactPrompt>
    </FAQContainer>
  );
};

export default FAQ;