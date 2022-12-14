import React from "react";
import { auth } from "services/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthLoading(true);
      setUser(user);
      setAuthLoading(false);
    });

    return unsubscribe;
  });

  const value = { user, authLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
