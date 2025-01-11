import { createContext, useEffect, useState } from "react";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store authenticated user info
  const [loading, setLoading] = useState(true); // State to manage loading state

  const auth = getAuth(app); // Firebase Auth instance

  // Function to create a new user
  const createUser = (email, password) => {
    setLoading(true); // Set loading state during the async operation
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log in an existing user
  const loginUser = (email, password) => {
    setLoading(true); // Set loading state during the async operation
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to log out the user
  const logoutUser = () => {
    setLoading(true); // Set loading state during the async operation
    return signOut(auth).finally(() => setLoading(false)); // Reset loading state after sign-out
  };

  // Set up a listener to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state when authentication state changes
      setLoading(false); // Set loading to false after the auth state is determined
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [auth]);

  // Context value to provide authentication-related methods and state
  const authInfo = {
    user, // The authenticated user object
    loading, // Loading state to indicate authentication process
    createUser, // Method to create a new user
    loginUser, // Method to log in a user
    logoutUser, // Method to log out the user
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
