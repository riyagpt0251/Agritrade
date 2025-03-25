// services/auth.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "agritrade-auth.firebaseapp.com",
  projectId: "agritrade-auth",
  storageBucket: "agritrade-auth.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => toast.success('Account created successfully!'))
      .catch(error => toast.error(error.message));
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => toast.success('Logged in successfully!'))
      .catch(error => toast.error(error.message));
  }

  function logout() {
    return signOut(auth)
      .then(() => toast.success('Logged out successfully!'));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}