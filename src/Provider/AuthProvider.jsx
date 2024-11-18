import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const handleRegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogOutUser = () => {
    signOut(auth);
  };

  const handleGoogleSignInUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    setLoading(false);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }

      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    handleRegisterUser,
    handleLogInUser,
    handleLogOutUser,
    handleGoogleSignInUser,
    setUser,
    user,
    manageProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
