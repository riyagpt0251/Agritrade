import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
`;

const ContactHeader = styled.h1`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const ContactIntro = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #2e7d32;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  color: #1b5e20;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const ContactFormContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  color: #1b5e20;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #1b5e20;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <ContactHeader>Contact Us</ContactHeader>
      <ContactIntro>
        Have questions or feedback? We'd love to hear from you. Reach out through our contact form or 
        connect with us directly using the information below.
      </ContactIntro>

      <ContactGrid>
        <ContactCard>
          <ContactIcon><FaMapMarkerAlt /></ContactIcon>
          <ContactTitle>Our Location</ContactTitle>
          <ContactText>
            123 Agriculture Avenue<br />
            Farmville, FP 12345<br />
            United States
          </ContactText>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaPhone /></ContactIcon>
          <ContactTitle>Phone</ContactTitle>
          <ContactText>
            +1 (800) 123-4567<br />
            Monday - Friday, 9am - 5pm EST
          </ContactText>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaEnvelope /></ContactIcon>
          <ContactTitle>Email</ContactTitle>
          <ContactText>
            support@agritrade.com<br />
            inquiries@agritrade.com
          </ContactText>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaClock /></ContactIcon>
          <ContactTitle>Hours</ContactTitle>
          <ContactText>
            Monday - Friday: 9am - 6pm<br />
            Saturday: 10am - 4pm<br />
            Sunday: Closed
          </ContactText>
        </ContactCard>
      </ContactGrid>

      <ContactFormContainer>
        <FormTitle>Send Us a Message</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Your Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {submitSuccess && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
        </form>
      </ContactFormContainer>
    </ContactContainer>
  );
};

export default Contact;