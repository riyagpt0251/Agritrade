import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      // On successful login:
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setErrors({ general: 'Invalid credentials. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login to Agritrade</h2>
        
        {errors.general && (
          <div style={styles.errorAlert}>{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
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
              placeholder="Enter your password"
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          <div style={styles.forgotPassword}>
            <Link to="/forgot-password" style={styles.link}>Forgot password?</Link>
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div style={styles.signupLink}>
          Don't have an account? <Link to="/register" style={styles.link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

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
  forgotPassword: {
    textAlign: 'right',
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
  signupLink: {
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

export default Login;