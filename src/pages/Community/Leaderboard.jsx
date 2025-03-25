import React, { useState, useEffect } from "react";
import { Container, Card, Table, Badge } from "react-bootstrap";
import { FaCrown, FaTrophy, FaMedal } from "react-icons/fa";
import { db } from "../../firebase/database"; // Ensure correct import path
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Leaderboard = () => {
  const [traders, setTraders] = useState([]);

  useEffect(() => {
    const tradersRef = collection(db, "traders");
    const q = query(tradersRef, orderBy("volume", "desc")); // Sort by trade volume

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const traderData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTraders(traderData);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const getMedal = (index) => {
    if (index === 0) return <FaCrown className="text-warning fs-4" />;
    if (index === 1) return <FaTrophy className="text-secondary fs-4" />;
    if (index === 2) return <FaMedal className="text-danger fs-4" />;
    return index + 1;
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 d-flex align-items-center">
        <FaCrown className="me-2" />
        Trading Leaderboard
      </h2>

      <Card>
        <Card.Header>
          <h5 className="mb-0">Top Traders This Month</h5>
        </Card.Header>
        <Card.Body>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Trader</th>
                <th>Trade Volume</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {traders.length > 0 ? (
                traders.map((trader, index) => (
                  <tr key={trader.id}>
                    <td className="align-middle">{getMedal(index)}</td>
                    <td className="align-middle">
                      <strong>{trader.name}</strong>
                      {index < 3 && (
                        <Badge bg="success" className="ms-2">Top Trader</Badge>
                      )}
                    </td>
                    <td className="align-middle">
                      ${trader.volume.toLocaleString()}
                    </td>
                    <td className="align-middle">
                      <Badge bg="info">{trader.rating} ★</Badge>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-3">
                    No traders available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Leaderboard;
