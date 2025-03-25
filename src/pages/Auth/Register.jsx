import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer' // farmer or trader
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // On successful registration:
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Agritrade Account</h2>
        
        {errors.general && (
          <div style={styles.errorAlert}>{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.name && styles.inputError)
              }}
              placeholder="Enter your full name"
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email && styles.inputError)
              }}
              placeholder="Enter your email"
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.password && styles.inputError)
              }}
              placeholder="Create a password (min 6 characters)"
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.confirmPassword && styles.inputError)
              }}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <span style={styles.errorText}>{errors.confirmPassword}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="userType" style={styles.label}>I am a:</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="farmer">Farmer/Producer</option>
              <option value="trader">Trader/Buyer</option>
            </select>
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div style={styles.loginLink}>
          Already have an account? <Link to="/login" style={styles.link}>Log in</Link>
        </div>
      </div>
    </div>
  );
};

// Reuse the same styles from Login with minor additions
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '450px'
  },
  title: {
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  },
  input: {
    padding: '12px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'border-color 0.3s',
    ':focus': {
      outline: 'none',
      borderColor: '#2e7d32'
    }
  },
  inputError: {
    borderColor: '#e53935'
  },
  errorText: {
    color: '#e53935',
    fontSize: '12px',
    marginTop: '4px'
  },
  errorAlert: {
    backgroundColor: '#ffebee',
    color: '#e53935',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '14px'
  },
  submitButton: {
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#1b5e20'
    },
    ':disabled': {
      backgroundColor: '#81c784',
      cursor: 'not-allowed'
    }
  },
  loginLink: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#666'
  },
  link: {
    color: '#2e7d32',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

export default Register;