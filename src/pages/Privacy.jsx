import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie } from 'react-icons/fa';

const PrivacyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const PrivacyHeader = styled.h1`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-style: italic;
`;

const PrivacySection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #1b5e20;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionContent = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const PrivacyList = styled.ul`
  padding-left: 1.5rem;
  margin: 1rem 0;
`;

const PrivacyListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const HighlightBox = styled.div`
  background-color: #e8f5e9;
  border-left: 4px solid #2e7d32;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

const ContactLink = styled(Link)`
  color: #2e7d32;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PolicyUpdateNotice = styled.div`
  background-color: #fff3cd;
  padding: 1rem;
  border-radius: 4px;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
`;

const Privacy = () => {
  const lastUpdatedDate = "June 10, 2023";

  return (
    <PrivacyContainer>
      <PrivacyHeader>Privacy Policy</PrivacyHeader>
      <LastUpdated>Last updated: {lastUpdatedDate}</LastUpdated>

      <PrivacySection>
        <SectionTitle>
          <FaShieldAlt /> Introduction
        </SectionTitle>
        <SectionContent>
          <p>
            Agritrade ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our agricultural trading platform (the "Service").
          </p>
          <p>
            By accessing or using our Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </SectionContent>
      </PrivacySection>

      <PrivacySection>
        <SectionTitle>
          <FaDatabase /> Information We Collect
        </SectionTitle>
        <SectionContent>
          <p>We collect several types of information from and about users:</p>
          
          <h3>Personal Data</h3>
          <PrivacyList>
            <PrivacyListItem>Name and contact information (email, phone number, address)</PrivacyListItem>
            <PrivacyListItem>Business information (company name, tax ID, license numbers)</PrivacyListItem>
            <PrivacyListItem>Payment and transaction details</PrivacyListItem>
            <PrivacyListItem>Communication preferences</PrivacyListItem>
          </PrivacyList>

          <h3>Usage Data</h3>
          <PrivacyList>
            <PrivacyListItem>IP address, browser type, and device information</PrivacyListItem>
            <PrivacyListItem>Pages visited, time spent, and navigation paths</PrivacyListItem>
            <PrivacyListItem>Search queries and transaction history</PrivacyListItem>
          </PrivacyList>

          <HighlightBox>
            <strong>Note:</strong> We do not store sensitive payment information like credit card numbers. All payments are processed through secure third-party payment processors.
          </HighlightBox>
        </SectionContent>
      </PrivacySection>

      <PrivacySection>
        <SectionTitle>
          <FaCookie /> Cookies and Tracking
        </SectionTitle>
        <SectionContent>
          <p>
            We use cookies and similar tracking technologies to:
          </p>
          <PrivacyList>
            <PrivacyListItem>Authenticate users and maintain sessions</PrivacyListItem>
            <PrivacyListItem>Remember user preferences</PrivacyListItem>
            <PrivacyListItem>Analyze website traffic and usage patterns</PrivacyListItem>
            <PrivacyListItem>Deliver targeted advertisements (through third-party services)</PrivacyListItem>
          </PrivacyList>
          <p>
            You can control cookies through your browser settings, but disabling them may affect certain features of our Service.
          </p>
        </SectionContent>
      </PrivacySection>

      <PrivacySection>
        <SectionTitle>
          <FaUserLock /> Data Protection
        </SectionTitle>
        <SectionContent>
          <p>
            We implement appropriate security measures to protect your personal information:
          </p>
          <PrivacyList>
            <PrivacyListItem>SSL/TLS encryption for all data transmissions</PrivacyListItem>
            <PrivacyListItem>Regular security audits and vulnerability testing</PrivacyListItem>
            <PrivacyListItem>Access controls and employee training</PrivacyListItem>
            <PrivacyListItem>Data minimization principles</PrivacyListItem>
          </PrivacyList>
          <p>
            While we strive to protect your data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
          </p>
        </SectionContent>
      </PrivacySection>

      <PrivacySection>
        <SectionTitle>Your Rights</SectionTitle>
        <SectionContent>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <PrivacyList>
            <PrivacyListItem>Access and receive a copy of your personal data</PrivacyListItem>
            <PrivacyListItem>Request correction of inaccurate data</PrivacyListItem>
            <PrivacyListItem>Request deletion of your personal data</PrivacyListItem>
            <PrivacyListItem>Object to or restrict processing of your data</PrivacyListItem>
            <PrivacyListItem>Withdraw consent (where processing is based on consent)</PrivacyListItem>
          </PrivacyList>
          <p>
            To exercise these rights, please <ContactLink to="/contact">contact us</ContactLink>.
          </p>
        </SectionContent>
      </PrivacySection>

      <PolicyUpdateNotice>
        <h3>Policy Updates</h3>
        <p>
          We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acknowledgment of the modified policy.
        </p>
      </PolicyUpdateNotice>

      <PrivacySection>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
          </p>
          <p>
            Email: <a href="mailto:privacy@agritrade.com" style={{color: '#2e7d32'}}>privacy@agritrade.com</a><br />
            Mail: Agritrade Privacy Office, 123 Agriculture Avenue, Farmville, FP 12345
          </p>
        </SectionContent>
      </PrivacySection>
    </PrivacyContainer>
  );
};

export default Privacy;