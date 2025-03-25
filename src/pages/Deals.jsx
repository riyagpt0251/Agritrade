import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Generate mock data for 100+ agricultural deals
const generateMockDeals = () => {
  const commodities = [
    'Wheat', 'Corn', 'Soybeans', 'Rice', 'Barley', 'Oats', 'Cotton',
    'Coffee', 'Cocoa', 'Sugar', 'Palm Oil', 'Canola', 'Sunflower Oil',
    'Potatoes', 'Tomatoes', 'Onions', 'Apples', 'Oranges', 'Bananas'
  ];
  
  const regions = [
    'North America', 'South America', 'Europe', 'Africa', 
    'Asia', 'Australia', 'Middle East'
  ];
  
  const traders = Array.from({ length: 50 }, (_, i) => ({
    id: `trader-${i + 1}`,
    name: `Trader ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
    company: `AgriTrade ${['Global', 'International', 'Solutions', 'Partners'][i % 4]}`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    dealsCompleted: Math.floor(Math.random() * 500),
    distance: `${(Math.random() * 300).toFixed(1)} km`,
    contact: `contact@trader${i + 1}.com`,
    phone: `+1 ${Math.floor(Math.random() * 900000000) + 100000000}`
  }));

  return Array.from({ length: 120 }, (_, i) => ({
    id: `deal-${i + 1}`,
    commodity: commodities[i % commodities.length],
    quantity: `${Math.floor(Math.random() * 1000) + 50} MT`,
    price: `$${(Math.random() * 500 + 50).toFixed(2)}/MT`,
    location: regions[i % regions.length],
    quality: ['Premium', 'Grade A', 'Commercial', 'Feed Grade'][i % 4],
    harvestDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    expiry: `${Math.floor(Math.random() * 30) + 5} days remaining`,
    seller: `Farm ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
    certification: i % 3 === 0 ? 'Organic Certified' : i % 5 === 0 ? 'Fair Trade' : 'Standard',
    nearestTraders: traders.slice(
      Math.floor(Math.random() * 40), 
      Math.floor(Math.random() * 40) + 3
    )
  }));
};

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    commodity: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    certification: '',
    sortBy: 'newest'
  });
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 10;
  const navigate = useNavigate();

  // Initialize with mock data
  useEffect(() => {
    const mockDeals = generateMockDeals();
    setDeals(mockDeals);
    setFilteredDeals(mockDeals);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...deals];
    
    if (filters.search) {
      result = result.filter(deal => 
        deal.commodity.toLowerCase().includes(filters.search.toLowerCase()) ||
        deal.seller.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.commodity) {
      result = result.filter(deal => deal.commodity === filters.commodity);
    }
    
    if (filters.location) {
      result = result.filter(deal => deal.location === filters.location);
    }
    
    if (filters.minPrice) {
      result = result.filter(deal => 
        parseFloat(deal.price.replace('$', '')) >= parseFloat(filters.minPrice)
      );
    }
    
    if (filters.maxPrice) {
      result = result.filter(deal => 
        parseFloat(deal.price.replace('$', '')) <= parseFloat(filters.maxPrice)
      );
    }
    
    if (filters.certification) {
      result = result.filter(deal => deal.certification === filters.certification);
    }
    
    // Apply sorting
    switch(filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => 
          parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        );
        break;
      case 'price-high':
        result.sort((a, b) => 
          parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
        );
        break;
      case 'quantity':
        result.sort((a, b) => 
          parseFloat(b.quantity.replace(' MT', '')) - parseFloat(a.quantity.replace(' MT', ''))
        );
        break;
      case 'newest':
      default:
        // Already sorted by default
        break;
    }
    
    setFilteredDeals(result);
    setCurrentPage(1);
  }, [filters, deals]);

  // Get unique values for filter dropdowns
  const commodities = [...new Set(deals.map(deal => deal.commodity))];
  const locations = [...new Set(deals.map(deal => deal.location))];
  const certifications = [...new Set(deals.map(deal => deal.certification))];

  // Pagination logic
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  const currentDeals = filteredDeals.slice(indexOfFirstDeal, indexOfLastDeal);
  const totalPages = Math.ceil(filteredDeals.length / dealsPerPage);

  const handleContactTrader = (trader, deal) => {
    // In a real app, this would open a chat/modal
    alert(`Contacting ${trader.name} about ${deal.commodity} deal\nEmail: ${trader.contact}\nPhone: ${trader.phone}`);
  };

  const handleViewDetails = (deal) => {
    setSelectedDeal(deal);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Agricultural Commodity Deals</h1>
      <p style={styles.subHeader}>
        {filteredDeals.length} deals available • {deals.length} total in marketplace
      </p>

      {/* Filters */}
      <div style={styles.filterContainer}>
        <div style={styles.filterRow}>
          <div style={styles.filterGroup}>
            <input
              type="text"
              placeholder="Search deals or sellers..."
              style={styles.searchInput}
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </div>
          
          <div style={styles.filterGroup}>
            <select
              style={styles.filterSelect}
              value={filters.commodity}
              onChange={(e) => setFilters({...filters, commodity: e.target.value})}
            >
              <option value="">All Commodities</option>
              {commodities.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          
          <div style={styles.filterGroup}>
            <select
              style={styles.filterSelect}
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            >
              <option value="">All Locations</option>
              {locations.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={styles.filterRow}>
          <div style={styles.filterGroup}>
            <select
              style={styles.filterSelect}
              value={filters.certification}
              onChange={(e) => setFilters({...filters, certification: e.target.value})}
            >
              <option value="">All Certifications</option>
              {certifications.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          
          <div style={styles.filterGroup}>
            <select
              style={styles.filterSelect}
              value={filters.sortBy}
              onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
            >
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="quantity">Quantity Available</option>
            </select>
          </div>
          
          <div style={styles.priceRangeGroup}>
            <input
              type="number"
              placeholder="Min Price"
              style={styles.priceInput}
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            />
            <span style={styles.rangeSeparator}>to</span>
            <input
              type="number"
              placeholder="Max Price"
              style={styles.priceInput}
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            />
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div style={styles.dealsGrid}>
        {currentDeals.length > 0 ? (
          currentDeals.map(deal => (
            <div key={deal.id} style={styles.dealCard}>
              <div style={styles.dealHeader}>
                <h3 style={styles.commodityName}>{deal.commodity}</h3>
                <span style={styles.dealPrice}>{deal.price}</span>
              </div>
              
              <div style={styles.dealDetails}>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Quantity:</span>
                  <span>{deal.quantity}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Location:</span>
                  <span>{deal.location}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Quality:</span>
                  <span>{deal.quality}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Seller:</span>
                  <span>{deal.seller}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Harvest:</span>
                  <span>{deal.harvestDate}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Certification:</span>
                  <span style={{
                    color: deal.certification === 'Organic Certified' ? '#4CAF50' : 
                           deal.certification === 'Fair Trade' ? '#FF9800' : '#666'
                  }}>
                    {deal.certification}
                  </span>
                </div>
              </div>
              
              <div style={styles.dealFooter}>
                <span style={styles.expiryBadge}>{deal.expiry}</span>
                <button 
                  style={styles.viewButton}
                  onClick={() => handleViewDetails(deal)}
                >
                  View Details
                </button>
              </div>
              
              {/* Nearest Traders */}
              <div style={styles.tradersSection}>
                <h4 style={styles.tradersHeading}>Nearest Traders:</h4>
                {deal.nearestTraders.map(trader => (
                  <div key={trader.id} style={styles.traderCard}>
                    <div style={styles.traderInfo}>
                      <span style={styles.traderName}>{trader.name}</span>
                      <span style={styles.traderCompany}>{trader.company}</span>
                      <div style={styles.traderStats}>
                        <span>⭐ {trader.rating}</span>
                        <span>📞 {trader.phone}</span>
                        <span>📍 {trader.distance}</span>
                      </div>
                    </div>
                    <button
                      style={styles.contactButton}
                      onClick={() => handleContactTrader(trader, deal)}
                    >
                      Contact
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            No deals match your current filters. Try adjusting your search criteria.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={styles.pagination}>
          <button
            style={styles.paginationButton}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                style={{
                  ...styles.paginationButton,
                  ...(currentPage === pageNum ? styles.activePage : {})
                }}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            style={styles.paginationButton}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Deal Detail Modal */}
      {selectedDeal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button 
              style={styles.closeButton}
              onClick={() => setSelectedDeal(null)}
            >
              ×
            </button>
            
            <h2 style={styles.modalTitle}>{selectedDeal.commodity} Deal Details</h2>
            
            <div style={styles.modalContent}>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Seller:</span>
                <span>{selectedDeal.seller}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Quantity:</span>
                <span>{selectedDeal.quantity}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Price:</span>
                <span>{selectedDeal.price}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Location:</span>
                <span>{selectedDeal.location}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Quality:</span>
                <span>{selectedDeal.quality}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Harvest Date:</span>
                <span>{selectedDeal.harvestDate}</span>
              </div>
              <div style={styles.modalRow}>
                <span style={styles.modalLabel}>Certification:</span>
                <span>{selectedDeal.certification}</span>
              </div>
            </div>
            
            <div style={styles.modalTraders}>
              <h3 style={styles.modalSubtitle}>Recommended Traders</h3>
              {selectedDeal.nearestTraders.map(trader => (
                <div key={trader.id} style={styles.modalTraderCard}>
                  <div>
                    <h4 style={styles.traderName}>{trader.name}</h4>
                    <p style={styles.traderCompany}>{trader.company}</p>
                    <div style={styles.traderDetails}>
                      <span>⭐ {trader.rating} ({trader.dealsCompleted} deals)</span>
                      <span>📍 {trader.distance} away</span>
                    </div>
                  </div>
                  <button
                    style={styles.modalContactButton}
                    onClick={() => handleContactTrader(trader, selectedDeal)}
                  >
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// JSX Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    color: '#2e7d32',
    marginBottom: '10px',
  },
  subHeader: {
    color: '#666',
    marginBottom: '20px',
  },
  filterContainer: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  filterRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '10px',
    ':last-child': {
      marginBottom: 0,
    },
  },
  filterGroup: {
    flex: 1,
    minWidth: '200px',
  },
  priceRangeGroup: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    minWidth: '300px',
  },
  searchInput: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '16px',
    ':focus': {
      outline: 'none',
      borderColor: '#2e7d32',
    },
  },
  filterSelect: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    backgroundColor: 'white',
    fontSize: '14px',
  },
  priceInput: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '14px',
  },
  rangeSeparator: {
    color: '#666',
  },
  dealsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  dealCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    border: '1px solid #eee',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
  },
  dealHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#f9f9f9',
  },
  commodityName: {
    margin: 0,
    color: '#2e7d32',
    fontSize: '18px',
  },
  dealPrice: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#333',
  },
  dealDetails: {
    padding: '15px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '14px',
  },
  detailLabel: {
    fontWeight: '600',
    color: '#666',
  },
  dealFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderTop: '1px solid #eee',
  },
  expiryBadge: {
    backgroundColor: '#ffeb3b',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  viewButton: {
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#1b5e20',
    },
  },
  tradersSection: {
    padding: '15px',
    borderTop: '1px solid #eee',
    backgroundColor: '#fafafa',
  },
  tradersHeading: {
    margin: '0 0 10px 0',
    fontSize: '16px',
    color: '#333',
  },
  traderCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #eee',
  },
  traderInfo: {
    flex: 1,
  },
  traderName: {
    margin: 0,
    fontSize: '14px',
    fontWeight: '600',
  },
  traderCompany: {
    margin: '2px 0',
    fontSize: '12px',
    color: '#666',
  },
  traderStats: {
    display: 'flex',
    gap: '10px',
    fontSize: '12px',
    color: '#666',
    marginTop: '5px',
  },
  contactButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#0b7dda',
    },
  },
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    color: '#666',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    marginTop: '20px',
  },
  paginationButton: {
    padding: '8px 12px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
    ':hover': {
      backgroundColor: '#f5f5f5',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  activePage: {
    backgroundColor: '#2e7d32',
    color: 'white',
    borderColor: '#2e7d32',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '20px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    ':hover': {
      color: '#333',
    },
  },
  modalTitle: {
    color: '#2e7d32',
    marginBottom: '20px',
  },
  modalContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginBottom: '20px',
  },
  modalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
  },
  modalLabel: {
    fontWeight: '600',
    color: '#666',
  },
  modalTraders: {
    marginTop: '20px',
  },
  modalSubtitle: {
    color: '#333',
    marginBottom: '15px',
  },
  modalTraderCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
  },
  traderDetails: {
    display: 'flex',
    gap: '15px',
    fontSize: '14px',
    color: '#666',
    marginTop: '5px',
  },
  modalContactButton: {
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#1b5e20',
    },
  },
};

export default Deals;