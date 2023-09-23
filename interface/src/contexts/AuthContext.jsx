import React, { useContext, useState, useEffect } from "react";
import auth from "../../firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };

  const sendIdTokenToServer = async (idToken) => {
    try {
      const response = await fetch("http://localhost:3000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (response.ok) {
        console.log("login success");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const idToken = await user.getIdToken();
        sendIdTokenToServer(idToken);
      }
    });

    return unsubscribe; 
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
