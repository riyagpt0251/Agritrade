import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  Carousel,
  Badge
} from 'react-bootstrap';
import { 
  FaSearch, 
  FaMoneyBillWave, 
  FaTruck, 
  FaChartLine,
  FaLeaf,
  FaUserTie,
  FaMapMarkedAlt,
  FaHandshake,
  FaShieldAlt,
  FaMobileAlt,
  FaPercentage,
  FaArrowRight
} from 'react-icons/fa';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const NewHeroSection = styled.section`
  padding: 5rem 0 8rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ea 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: #2e7d32;
    
    span {
      color: #1b5e20;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 12px;
        background: rgba(76, 175, 80, 0.3);
        z-index: -1;
        border-radius: 4px;
      }
    }
  }
  
  .lead {
    font-size: 1.3rem;
    color: #555;
    margin-bottom: 2rem;
    max-width: 600px;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  
  .main-image {
    position: absolute;
    width: 80%;
    right: 0;
    top: 0;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    z-index: 2;
    animation: ${float} 6s ease-in-out infinite;
  }
  
  .secondary-image {
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    z-index: 1;
    animation: ${float} 6s ease-in-out infinite 1s;
  }
  
  .pattern {
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: url('https://www.transparenttextures.com/patterns/rice-paper-3.png');
    opacity: 0.1;
    z-index: 0;
  }
`;

const FeatureHighlight = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: #e8f5e9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: #2e7d32;
    font-size: 1.2rem;
  }
  
  .text {
    font-weight: 500;
    color: #444;
  }
`;

const FeatureCard = styled(Card)`
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.1);
  }
  
  .card-body {
    padding: 2rem;
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${props => props.color || '#e8f5e9'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${props => props.iconColor || '#2e7d32'};
  font-size: 1.75rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  color: #2e7d32;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #2e7d32, #81c784);
    border-radius: 2px;
  }
`;

const CommunitySection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`;

const CommunityImages = styled.div`
  position: relative;
  height: 450px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const FarmerImg = styled.img`
  position: absolute;
  width: 60%;
  left: 0;
  top: 0;
  z-index: 1;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 12px;
  transform: rotate(-3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0deg) scale(1.02);
  }
`;

const TraderImg = styled.img`
  position: absolute;
  width: 60%;
  right: 0;
  bottom: 0;
  z-index: 2;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 12px;
  transform: rotate(3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(0deg) scale(1.02);
  }
`;

const MemberBadge = styled(Badge)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #2e7d32, #4caf50);
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
  animation: ${pulse} 2s infinite;
`;

const CommunityList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 2rem;

  li {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateX(5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }
    
    svg {
      margin-right: 1rem;
      font-size: 1.5rem;
    }
  }
`;

const MarketplaceSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const MarketStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
`;

const StatItem = styled.div`
  flex: 1;
  min-width: 150px;
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e8f5e9;
    transform: translateY(-5px);
  }
  
  h3 {
    color: #2e7d32;
    font-weight: 800;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ea 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #2e7d32, #81c784);
  }
`;

const TestimonialItem = styled.div`
  padding: 3rem;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  margin: 0 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
  
  p {
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.6;
    color: #444;
    margin-bottom: 2rem;
    position: relative;
    
    &::before, &::after {
      content: '"';
      font-size: 2rem;
      color: #81c784;
      opacity: 0.5;
    }
    
    &::before {
      margin-right: 0.5rem;
    }
    
    &::after {
      margin-left: 0.5rem;
    }
  }
  
  .blockquote-footer {
    font-size: 1.1rem;
    color: #2e7d32;
    font-weight: 600;
    
    &::before {
      content: '— ';
    }
  }
`;

const CtaSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0d3b0f 0%, #1b5e20 50%, #2e7d32 100%);
  background-size: 200% 200%;
  animation: ${gradientBackground} 10s ease infinite;
  color: white;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png');
    opacity: 0.1;
    pointer-events: none;
  }
  
  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .lead {
    font-size: 1.4rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  background: linear-gradient(to right, #4caf50, #81c784);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
    background: linear-gradient(to right, #43a047, #66bb6a);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const SecondaryButton = styled(Button)`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  background: transparent;
  border: 2px solid #2e7d32;
  color: #2e7d32;
  transition: all 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    background: rgba(46, 125, 50, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(46, 125, 50, 0.2);
  }
`;

const Home = () => {
  const features = [
    {
      icon: <FaSearch size={30} />,
      title: "Discover Products",
      description: "Find agricultural products from across India with our advanced search",
      color: '#e3f2fd',
      iconColor: '#1976d2'
    },
    {
      icon: <FaMoneyBillWave size={30} />,
      title: "Competitive Pricing",
      description: "Get the best prices with our real-time auction system",
      color: '#e8f5e9',
      iconColor: '#2e7d32'
    },
    {
      icon: <FaTruck size={30} />,
      title: "Secure Logistics",
      description: "Reliable shipping and delivery options with tracking",
      color: '#fff3e0',
      iconColor: '#ef6c00'
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Market Insights",
      description: "Real-time trading data and analytics dashboard",
      color: '#f3e5f5',
      iconColor: '#8e24aa'
    }
  ];

  const testimonials = [
    {
      quote: "This platform has transformed my farming business! I've doubled my income since joining.",
      author: "Rajesh Kumar, Farmer from Punjab"
    },
    {
      quote: "Best prices for my produce with minimal effort. The mobile app makes trading so convenient.",
      author: "Priya Sharma, Farmer from Maharashtra"
    },
    {
      quote: "Efficient trading platform with great support. The quality verification gives me confidence in every purchase.",
      author: "Amit Patel, Trader from Gujarat"
    }
  ];

  const stats = [
    {
      value: "10,000+",
      label: "Daily Transactions",
      icon: <FaHandshake size={24} className="text-success mb-2" />
    },
    {
      value: "₹500Cr+",
      label: "Annual Trade Volume",
      icon: <FaMoneyBillWave size={24} className="text-success mb-2" />
    },
    {
      value: "28",
      label: "States Covered",
      icon: <FaMapMarkedAlt size={24} className="text-success mb-2" />
    },
    {
      value: "99%",
      label: "Satisfaction Rate",
      icon: <FaPercentage size={24} className="text-success mb-2" />
    }
  ];

  // Inline images
  const farmerImage = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const traderImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const marketplaceImage = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const heroImage1 = "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const heroImage2 = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

  return (
    <div className="overflow-hidden">
      {/* New Hero Section */}
      <NewHeroSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <HeroContent>
                <h1>Empowering <span>Farmers</span>, Connecting <span>Traders</span></h1>
                <p className="lead">
                  India's most trusted agricultural marketplace with transparent pricing, secure transactions, and nationwide reach.
                </p>
                
                <div className="mb-4">
                  <FeatureHighlight>
                    <div className="icon">
                      <FaMoneyBillWave />
                    </div>
                    <div className="text">Get 20-30% better prices for your produce</div>
                  </FeatureHighlight>
                  <FeatureHighlight>
                    <div className="icon">
                      <FaTruck />
                    </div>
                    <div className="text">Verified logistics partners across India</div>
                  </FeatureHighlight>
                  <FeatureHighlight>
                    <div className="icon">
                      <FaShieldAlt />
                    </div>
                    <div className="text">100% secure payment protection</div>
                  </FeatureHighlight>
                </div>
                
                <div className="d-flex">
                  <PrimaryButton size="lg">
                    Start Trading <FaArrowRight />
                  </PrimaryButton>
                  <SecondaryButton size="lg">
                    How It Works
                  </SecondaryButton>
                </div>
              </HeroContent>
            </Col>
            <Col lg={6}>
              <HeroImageContainer>
                <img src={heroImage1} alt="Farmers trading" className="main-image" />
                <img src={heroImage2} alt="Agricultural products" className="secondary-image" />
                <div className="pattern"></div>
              </HeroImageContainer>
            </Col>
          </Row>
        </Container>
      </NewHeroSection>

      {/* Features Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Why Choose Agritrade?</SectionTitle>
          <Row>
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <FeatureCard delay={`${index * 0.1}s`}>
                  <Card.Body className="text-center">
                    <FeatureIcon color={feature.color} iconColor={feature.iconColor}>
                      {feature.icon}
                    </FeatureIcon>
                    <h5 className="mb-3">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </Card.Body>
                </FeatureCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Community Section */}
      <CommunitySection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <CommunityImages>
                <FarmerImg src={farmerImage} alt="Indian farmer" />
                <TraderImg src={traderImage} alt="Agricultural trader" />
                <MemberBadge bg="success">
                  50,000+ Members
                </MemberBadge>
              </CommunityImages>
            </Col>
            <Col lg={6}>
              <h2 className="mb-4" style={{ fontSize: '2.2rem', fontWeight: 700 }}>Join Our Growing Community</h2>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                Connect with thousands of farmers and traders across India
              </p>
              <CommunityList>
                <li>
                  <FaLeaf className="me-2 text-success" />
                  Direct access to agricultural producers
                </li>
                <li>
                  <FaUserTie className="me-2 text-primary" />
                  Verified traders and buyers network
                </li>
                <li>
                  <FaMapMarkedAlt className="me-2 text-info" />
                  Nationwide coverage with local support
                </li>
                <li>
                  <FaShieldAlt className="me-2 text-warning" />
                  Secure transactions with escrow protection
                </li>
                <li>
                  <FaMobileAlt className="me-2 text-secondary" />
                  Mobile app for trading on the go
                </li>
              </CommunityList>
              <PrimaryButton className="mt-3 px-4">
                Become a Member
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </CommunitySection>

      {/* Marketplace Preview */}
      <MarketplaceSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700 }}>Explore Our Digital Marketplace</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our platform offers a seamless trading experience with real-time 
                pricing, secure transactions, quality assurance and dedicated support.
              </p>
              <MarketStats>
                {stats.map((stat, index) => (
                  <StatItem key={index}>
                    {stat.icon}
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </StatItem>
                ))}
              </MarketStats>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={marketplaceImage} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body className="text-center">
                  <PrimaryButton className="px-5 py-3">
                    Visit Marketplace
                  </PrimaryButton>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </MarketplaceSection>

      {/* Testimonials */}
      <TestimonialsSection>
        <Container>
          <SectionTitle style={{ color: '#2e7d32' }}>What Our Community Says</SectionTitle>
          <Carousel indicators={false} className="mx-auto" style={{ maxWidth: '800px' }}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <TestimonialItem>
                  <blockquote className="blockquote">
                    <p>"{testimonial.quote}"</p>
                    <footer className="blockquote-footer mt-4">
                      {testimonial.author}
                    </footer>
                  </blockquote>
                </TestimonialItem>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </TestimonialsSection>

      {/* Call to Action */}
      <CtaSection>
        <Container>
          <h2>Ready to Transform Your Agricultural Business?</h2>
          <p className="lead">
            Join thousands of farmers and traders who are already benefiting from our platform
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <PrimaryButton size="lg" className="px-5">
              Sign Up Now
            </PrimaryButton>
            <SecondaryButton size="lg" className="px-5" variant="outline-light">
              Learn How It Works
            </SecondaryButton>
          </div>
        </Container>
      </CtaSection>
    </div>
  );
};

export default Home;