import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Form, 
  Button, 
  Card, 
  Container, 
  Alert, 
  Spinner, 
  Row, 
  Col,
  Tab,
  Tabs,
  Accordion,
  Badge
} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { validateAuctionForm } from '../utils/validation';
import ImagePreview from './ImagePreview';
import RichTextEditor from './RichTextEditor';
import LocationPicker from './LocationPicker';
import ShippingOptions from './ShippingOptions';
import AuctionPreview from './AuctionPreview';
import { FaInfoCircle, FaShippingFast, FaMapMarkerAlt, FaImages } from 'react-icons/fa';

const CreateAuction = ({ onCreateAuction }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startingPrice: '',
    reservePrice: '',
    category: 'general',
    endDate: '',
    images: [],
    termsAgreed: false,
    shippingOptions: [],
    location: null,
    auctionType: 'standard',
    buyNowPrice: '',
    itemCondition: 'new',
    returnPolicy: 'none'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [showPreview, setShowPreview] = useState(false);

  const categories = [
    'general',
    'electronics',
    'art',
    'collectibles',
    'jewelry',
    'furniture',
    'vehicles'
  ];

  const conditions = [
    { value: 'new', label: 'New' },
    { value: 'like_new', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' }
  ];

  const returnPolicies = [
    { value: 'none', label: 'No returns accepted' },
    { value: '14_days', label: '14 days return policy' },
    { value: '30_days', label: '30 days return policy' },
    { value: 'seller_discretion', label: 'Seller discretion' }
  ];

  const auctionTypes = [
    { value: 'standard', label: 'Standard Auction' },
    { value: 'buy_now', label: 'Buy It Now' },
    { value: 'both', label: 'Auction with Buy It Now' }
  ];

  useEffect(() => {
    // Set default end date to 7 days from now
    const defaultEndDate = new Date();
    defaultEndDate.setDate(defaultEndDate.getDate() + 7);
    setFormData(prev => ({
      ...prev,
      endDate: defaultEndDate.toISOString().slice(0, 16)
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const newImages = Array.from(files).map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return {
          file,
          preview: URL.createObjectURL(file)
        };
      });
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleDescriptionChange = (content) => {
    setFormData(prev => ({
      ...prev,
      description: content
    }));
  };

  const handleLocationSelect = (location) => {
    setFormData(prev => ({
      ...prev,
      location
    }));
  };

  const handleShippingChange = (options) => {
    setFormData(prev => ({
      ...prev,
      shippingOptions: options
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => {
      const newImages = [...prev.images];
      newImages.splice(index, 1);
      return {
        ...prev,
        images: newImages
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateAuctionForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setActiveTab('basic'); // Switch to first tab if errors
      return;
    }

    setIsSubmitting(true);
    
    try {
      const auctionData = new FormData();
      auctionData.append('title', formData.title);
      auctionData.append('description', formData.description);
      auctionData.append('startingPrice', formData.startingPrice);
      auctionData.append('reservePrice', formData.reservePrice || 0);
      auctionData.append('category', formData.category);
      auctionData.append('endDate', formData.endDate);
      auctionData.append('sellerId', currentUser.id);
      auctionData.append('auctionType', formData.auctionType);
      auctionData.append('itemCondition', formData.itemCondition);
      auctionData.append('returnPolicy', formData.returnPolicy);
      
      if (formData.buyNowPrice) {
        auctionData.append('buyNowPrice', formData.buyNowPrice);
      }
      
      if (formData.location) {
        auctionData.append('location', JSON.stringify(formData.location));
      }
      
      formData.shippingOptions.forEach((option, index) => {
        auctionData.append(`shippingOptions[${index}]`, JSON.stringify(option));
      });
      
      formData.images.forEach((image, index) => {
        auctionData.append(`images[${index}]`, image.file);
      });

      const newAuction = await onCreateAuction(auctionData);
      navigate(`/auction/${newAuction.id}`);
    } catch (error) {
      console.error('Auction creation failed:', error);
      setErrors({ form: 'Failed to create auction. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="create-auction-container py-4">
      {showPreview ? (
        <AuctionPreview 
          formData={formData} 
          onBack={() => setShowPreview(false)}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      ) : (
        <Card className="shadow">
          <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Create New Auction</h2>
            <Badge bg="light" text="dark" className="fs-6">
              Step {activeTab === 'basic' ? 1 : activeTab === 'details' ? 2 : 3} of 3
            </Badge>
          </Card.Header>
          
          <Card.Body>
            {errors.form && <Alert variant="danger">{errors.form}</Alert>}
            
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-4"
              fill
            >
              <Tab eventKey="basic" title="Basic Info">
                <Form onSubmit={handleSubmit} className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Title*</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      isInvalid={!!errors.title}
                      placeholder="Enter a descriptive title"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description*</Form.Label>
                    <RichTextEditor 
                      value={formData.description}
                      onChange={handleDescriptionChange}
                      isInvalid={!!errors.description}
                    />
                    {errors.description && (
                      <Form.Text className="text-danger">
                        {errors.description}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Starting Price ($)*</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          step="0.01"
                          name="startingPrice"
                          value={formData.startingPrice}
                          onChange={handleChange}
                          isInvalid={!!errors.startingPrice}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.startingPrice}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Reserve Price ($)</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          step="0.01"
                          name="reservePrice"
                          value={formData.reservePrice}
                          onChange={handleChange}
                          placeholder="Optional minimum price"
                        />
                        <Form.Text muted>
                          Hidden from bidders
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Category*</Form.Label>
                        <Form.Select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>End Date/Time*</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          isInvalid={!!errors.endDate}
                          min={new Date().toISOString().slice(0, 16)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.endDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-end mt-4">
                    <Button
                      variant="primary"
                      onClick={() => setActiveTab('details')}
                    >
                      Next: Item Details
                    </Button>
                  </div>
                </Form>
              </Tab>

              <Tab eventKey="details" title="Item Details">
                <Form onSubmit={handleSubmit} className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaImages className="me-2" />
                      Item Images (Max 10)
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="images"
                      onChange={handleChange}
                      className="mb-2"
                      multiple
                    />
                    <Form.Text muted>
                      First image will be used as the main image. Max file size: 5MB each.
                    </Form.Text>
                    
                    <div className="d-flex flex-wrap mt-3">
                      {formData.images.map((image, index) => (
                        <div key={index} className="position-relative me-2 mb-2">
                          <img 
                            src={image.preview} 
                            alt={`Preview ${index}`}
                            style={{ 
                              width: '100px', 
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '4px'
                            }}
                          />
                          <Button
                            variant="danger"
                            size="sm"
                            className="position-absolute top-0 end-0"
                            style={{ transform: 'translate(50%, -50%)' }}
                            onClick={() => removeImage(index)}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Auction Type</Form.Label>
                        <Form.Select
                          name="auctionType"
                          value={formData.auctionType}
                          onChange={handleChange}
                        >
                          {auctionTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      {formData.auctionType !== 'standard' && (
                        <Form.Group>
                          <Form.Label>Buy It Now Price ($)</Form.Label>
                          <Form.Control
                            type="number"
                            min="0"
                            step="0.01"
                            name="buyNowPrice"
                            value={formData.buyNowPrice}
                            onChange={handleChange}
                            placeholder="Enter price for instant purchase"
                          />
                        </Form.Group>
                      )}
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Item Condition</Form.Label>
                        <Form.Select
                          name="itemCondition"
                          value={formData.itemCondition}
                          onChange={handleChange}
                        >
                          {conditions.map(condition => (
                            <option key={condition.value} value={condition.value}>
                              {condition.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Return Policy</Form.Label>
                        <Form.Select
                          name="returnPolicy"
                          value={formData.returnPolicy}
                          onChange={handleChange}
                        >
                          {returnPolicies.map(policy => (
                            <option key={policy.value} value={policy.value}>
                              {policy.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaMapMarkerAlt className="me-2" />
                      Item Location
                    </Form.Label>
                    <LocationPicker 
                      onLocationSelect={handleLocationSelect}
                      initialLocation={formData.location}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      <FaShippingFast className="me-2" />
                      Shipping Options
                    </Form.Label>
                    <ShippingOptions 
                      options={formData.shippingOptions}
                      onChange={handleShippingChange}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      variant="outline-secondary"
                      onClick={() => setActiveTab('basic')}
                    >
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setActiveTab('final')}
                    >
                      Next: Review & Submit
                    </Button>
                  </div>
                </Form>
              </Tab>

              <Tab eventKey="final" title="Review & Submit">
                <div className="mt-3">
                  <Accordion defaultActiveKey="0" className="mb-4">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Basic Information</Accordion.Header>
                      <Accordion.Body>
                        <p><strong>Title:</strong> {formData.title}</p>
                        <p><strong>Description:</strong></p>
                        <div dangerouslySetInnerHTML={{ __html: formData.description }} />
                        <p><strong>Starting Price:</strong> ${formData.startingPrice}</p>
                        {formData.reservePrice && (
                          <p><strong>Reserve Price:</strong> ${formData.reservePrice}</p>
                        )}
                        <p><strong>Category:</strong> {formData.category}</p>
                        <p><strong>End Date:</strong> {new Date(formData.endDate).toLocaleString()}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Item Details</Accordion.Header>
                      <Accordion.Body>
                        <p><strong>Auction Type:</strong> {
                          auctionTypes.find(t => t.value === formData.auctionType)?.label
                        }</p>
                        {formData.auctionType !== 'standard' && formData.buyNowPrice && (
                          <p><strong>Buy It Now Price:</strong> ${formData.buyNowPrice}</p>
                        )}
                        <p><strong>Item Condition:</strong> {
                          conditions.find(c => c.value === formData.itemCondition)?.label
                        }</p>
                        <p><strong>Return Policy:</strong> {
                          returnPolicies.find(p => p.value === formData.returnPolicy)?.label
                        }</p>
                        {formData.location && (
                          <p>
                            <strong>Location:</strong> {formData.location.address}
                          </p>
                        )}
                        {formData.shippingOptions.length > 0 && (
                          <>
                            <p><strong>Shipping Options:</strong></p>
                            <ul>
                              {formData.shippingOptions.map((option, index) => (
                                <li key={index}>
                                  {option.name}: ${option.cost} ({option.deliveryTime})
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="termsAgreed"
                      label={
                        <>
                          I agree to the <a href="/terms" target="_blank">terms and conditions</a> of selling on this platform
                        </>
                      }
                      checked={formData.termsAgreed}
                      onChange={handleChange}
                      isInvalid={!!errors.termsAgreed}
                    />
                    {errors.termsAgreed && (
                      <Form.Text className="text-danger">
                        {errors.termsAgreed}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      variant="outline-secondary"
                      onClick={() => setActiveTab('details')}
                    >
                      Back
                    </Button>
                    <div>
                      <Button
                        variant="outline-primary"
                        className="me-2"
                        onClick={() => setShowPreview(true)}
                      >
                        Preview Auction
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting || !formData.termsAgreed}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Creating...
                          </>
                        ) : (
                          'Create Auction'
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default CreateAuction;