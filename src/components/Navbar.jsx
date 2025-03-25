import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>Agritrade</Link>
        <nav style={styles.nav}>
          <Link to="/deals" style={styles.link}>Deals</Link>
          <Link to="/market" style={styles.link}>Market</Link>
          <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  navbar: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    ':hover': {
      textDecoration: 'underline'
    }
  }
}

export default Navbar