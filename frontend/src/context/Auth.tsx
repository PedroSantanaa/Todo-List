import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { PayloadToken } from "../pages/Login";
import jwt_decode from "jwt-decode";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (user: User, token?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const decoded: PayloadToken = jwt_decode(token);
      const user = {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
      };
      login(user);
    }
  }, []);
  const login = (newUser: User, token?: string) => {
    if (token) {
      localStorage.setItem("jwtToken", token);
    }
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
