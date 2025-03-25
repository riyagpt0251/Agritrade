import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { subscribeToPrices } from '../services/priceFeed';

const PriceTicker = () => {
  const [prices, setPrices] = useState({
    wheat: [],
    corn: [],
    soy: [],
    rice: [],
    timestamps: []
  });

  useEffect(() => {
    const unsubscribe = subscribeToPrices((newPrices) => {
      setPrices(prev => ({
        wheat: [...prev.wheat.slice(-9), newPrices.wheat],
        corn: [...prev.corn.slice(-9), newPrices.corn],
        soy: [...prev.soy.slice(-9), newPrices.soy],
        rice: [...prev.rice.slice(-9), newPrices.rice],
        timestamps: [...prev.timestamps.slice(-9), new Date().toLocaleTimeString()]
      }));
    });

    return () => unsubscribe();
  }, []);

  const data = {
    labels: prices.timestamps,
    datasets: [
      {
        label: 'Wheat ($/bushel)',
        data: prices.wheat,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Corn ($/bushel)',
        data: prices.corn,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      },
      {
        label: 'Soy ($/bushel)',
        data: prices.soy,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Rice ($/cwt)',
        data: prices.rice,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Global Commodity Prices (Live)</h3>
      <div style={styles.chartContainer}>
        <Line data={data} options={chartOptions} />
      </div>
    </div>
  );
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '20px',
    color: '#2c3e50',
  },
  chartContainer: {
    height: '300px',
  },
};

export default PriceTicker;