// services/priceFeed.js
import { db } from '../firebase/database';
import { collection, onSnapshot } from 'firebase/firestore';

export function subscribeToPrices(callback) {
  const q = collection(db, 'commodityPrices');
  return onSnapshot(q, (snapshot) => {
    const latestPrices = {};
    snapshot.forEach((doc) => {
      latestPrices[doc.id] = doc.data().price;
    });
    callback(latestPrices);
  });
}

// Simulate price updates (in a real app, this would come from an API)
export function simulatePriceUpdates() {
  const commodities = ['wheat', 'corn', 'soy', 'rice'];
  
  setInterval(() => {
    commodities.forEach(commodity => {
      const currentPrice = Math.random() * 10 + 5; // Random price between 5-15
      updatePrice(commodity, parseFloat(currentPrice.toFixed(2)));
    });
  }, 5000);
}

function updatePrice(commodity, price) {
  // In a real app, you would update Firestore here
  console.log(`${commodity} price updated to ${price}`);
}