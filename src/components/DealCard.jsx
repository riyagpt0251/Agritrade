import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../services/database';
import DealCard from '../components/DealCard';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'deals'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dealsData = [];
      querySnapshot.forEach((doc) => {
        dealsData.push({ id: doc.id, ...doc.data() });
      });
      setDeals(dealsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Current Agricultural Deals</h2>
      
      {loading ? (
        <div style={styles.loading}>Loading deals...</div>
      ) : (
        <div style={styles.dealsGrid}>
          {deals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#7f8c8d',
  },
  dealsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '10px',
  },
};

export default Deals;