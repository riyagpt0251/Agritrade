import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data generator for 100 agricultural products
const generateMockProducts = () => {
  const commodities = [
    'Wheat', 'Corn', 'Soybeans', 'Rice', 'Barley', 'Oats', 'Sorghum', 
    'Cotton', 'Coffee', 'Cocoa', 'Sugar', 'Palm Oil', 'Canola', 'Sunflower',
    'Beans', 'Peas', 'Lentils', 'Potatoes', 'Tomatoes', 'Onions'
  ];
  
  const grades = ['Grade A', 'Grade B', 'Commercial', 'Organic', 'Premium'];
  const regions = [
    'North America', 'South America', 'Europe', 'Africa', 
    'Asia', 'Australia', 'Middle East'
  ];
  
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `${commodities[i % commodities.length]} ${grades[i % grades.length]}`,
    type: commodities[i % commodities.length],
    price: (Math.random() * 500 + 50).toFixed(2),
    unit: ['MT', 'kg', 'lb', 'bushel'][i % 4],
    origin: regions[i % regions.length],
    supplier: `Supplier ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
    stock: Math.floor(Math.random() * 1000),
    quality: ['High', 'Medium', 'Low'][i % 3],
    lastUpdated: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    organic: i % 4 === 0,
    certified: i % 3 === 0
  }));
};

const Market = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    origin: '',
    minPrice: '',
    maxPrice: '',
    organic: false,
    certified: false
  });
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const navigate = useNavigate();

  // Initialize with mock data
  useEffect(() => {
    const mockProducts = generateMockProducts();
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    if (filters.search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.supplier.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }
    
    if (filters.origin) {
      result = result.filter(p => p.origin === filters.origin);
    }
    
    if (filters.minPrice) {
      result = result.filter(p => parseFloat(p.price) >= parseFloat(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(p => parseFloat(p.price) <= parseFloat(filters.maxPrice));
    }
    
    if (filters.organic) {
      result = result.filter(p => p.organic);
    }
    
    if (filters.certified) {
      result = result.filter(p => p.certified);
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, products]);

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Get unique values for filter dropdowns
  const productTypes = [...new Set(products.map(p => p.type))];
  const productOrigins = [...new Set(products.map(p => p.origin))];

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Agricultural Commodities Market</h1>
      <p style={styles.subHeader}>
        Showing {filteredProducts.length} products ({products.length} total available)
      </p>

      {/* Filters */}
      <div style={styles.filterContainer}>
        <div style={styles.filterGroup}>
          <input
            type="text"
            placeholder="Search products or suppliers..."
            style={styles.searchInput}
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
          />
        </div>

        <div style={styles.filterRow}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Commodity Type:</label>
            <select
              style={styles.filterSelect}
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">All Types</option>
              {productTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Origin:</label>
            <select
              style={styles.filterSelect}
              value={filters.origin}
              onChange={(e) => setFilters({...filters, origin: e.target.value})}
            >
              <option value="">All Regions</option>
              {productOrigins.map(origin => (
                <option key={origin} value={origin}>{origin}</option>
              ))}
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Price Range:</label>
            <div style={styles.priceRange}>
              <input
                type="number"
                placeholder="Min"
                style={styles.priceInput}
                value={filters.minPrice}
                onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              />
              <span style={styles.rangeSeparator}>-</span>
              <input
                type="number"
                placeholder="Max"
                style={styles.priceInput}
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              />
            </div>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={filters.organic}
                onChange={(e) => setFilters({...filters, organic: e.target.checked})}
              />
              Organic Only
            </label>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={filters.certified}
                onChange={(e) => setFilters({...filters, certified: e.target.checked})}
              />
              Certified Only
            </label>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('name')}
              >
                Product {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('type')}
              >
                Type {sortConfig.key === 'type' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('price')}
              >
                Price ({products[0]?.unit}) {sortConfig.key === 'price' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('origin')}
              >
                Origin {sortConfig.key === 'origin' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('supplier')}
              >
                Supplier {sortConfig.key === 'supplier' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th 
                style={styles.tableHeader}
                onClick={() => requestSort('stock')}
              >
                Stock {sortConfig.key === 'stock' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map(product => (
              <tr 
                key={product.id} 
                style={styles.tableRow}
                onClick={() => handleProductClick(product.id)}
              >
                <td style={styles.tableCell}>
                  <strong>{product.name}</strong>
                  {product.organic && <span style={styles.badgeOrganic}>Organic</span>}
                  {product.certified && <span style={styles.badgeCertified}>Certified</span>}
                </td>
                <td style={styles.tableCell}>{product.type}</td>
                <td style={styles.tableCell}>${product.price}</td>
                <td style={styles.tableCell}>{product.origin}</td>
                <td style={styles.tableCell}>{product.supplier}</td>
                <td style={styles.tableCell}>
                  <span style={{
                    color: product.stock > 500 ? '#2e7d32' : product.stock > 100 ? '#ff9800' : '#f44336'
                  }}>
                    {product.stock} {product.unit}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {currentProducts.length === 0 && (
          <div style={styles.noResults}>
            No products match your filters. Try adjusting your search criteria.
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
    </div>
  );
};

// JSX Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  header: {
    color: '#2e7d32',
    marginBottom: '10px',
  },
  subHeader: {
    color: '#666',
    marginBottom: '20px',
    fontSize: '14px',
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
    marginTop: '10px',
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
  },
  filterLabel: {
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#555',
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
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    fontSize: '14px',
  },
  priceRange: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  priceInput: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '80px',
    fontSize: '14px',
  },
  rangeSeparator: {
    color: '#777',
  },
  filterCheckbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  tableContainer: {
    overflowX: 'auto',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    padding: '12px 15px',
    textAlign: 'left',
    backgroundColor: '#2e7d32',
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#1b5e20',
    },
  },
  tableRow: {
    borderBottom: '1px solid #eee',
    ':hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    },
  },
  tableCell: {
    padding: '12px 15px',
    verticalAlign: 'middle',
  },
  badgeOrganic: {
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '10px',
    marginLeft: '8px',
  },
  badgeCertified: {
    backgroundColor: '#2196f3',
    color: 'white',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '10px',
    marginLeft: '5px',
  },
  noResults: {
    padding: '20px',
    textAlign: 'center',
    color: '#666',
    backgroundColor: '#fafafa',
    borderRadius: '4px',
    marginTop: '10px',
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
};

export default Market;