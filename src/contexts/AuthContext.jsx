import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

// Detectar se estamos no GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io') ||
                      import.meta.env.VITE_USE_MOCK_API === 'true';

// Funções de socket opcionais para GitHub Pages
let initSocket = () => {
  if (!isGitHubPages) {
    console.warn('Socket.IO não disponível no modo mock');
  }
};
let disconnectSocket = () => {};

// Importar socket apenas se não estivermos no GitHub Pages
if (!isGitHubPages) {
  import("../services/socket").then(socketModule => {
    initSocket = socketModule.initSocket;
    disconnectSocket = socketModule.disconnectSocket;
  }).catch(err => {
    console.warn('Socket service não disponível:', err);
  });
}

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);

        // Inicializar socket (apenas se disponível)
        if (initSocket && !isGitHubPages) {
          initSocket(token);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  };

  const login = async (email, password, userType) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
        userType,
      });

      // Compatibilidade com mockApi e API real
      const responseData = response.data.data || response.data;
      const { user: userData, token } = responseData;

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);

      // Inicializar socket (apenas se disponível)
      if (initSocket) {
        initSocket(token);
      }

      return true;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (formData) => {
    try {
      const response = await api.post("/auth/register", formData);

      // Compatibilidade com mockApi e API real
      const responseData = response.data.data || response.data;
      const { user: userData, token } = responseData;

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);

      // Inicializar socket (apenas se disponível)
      if (initSocket) {
        initSocket(token);
      }

      return true;
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Desconectar socket (apenas se disponível)
    if (disconnectSocket && !isGitHubPages) {
      disconnectSocket();
    }
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
