import React, { createContext, useState, useContext, useEffect } from 'react';

type User = { email: string; password: string } | null;
interface AuthContextType {
  user: User;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const mappedUser: User = JSON.parse(storedUser);
      setUser(mappedUser);
    }
  }, []);

  const login = (userData: User) => {
    if (!userData || !userData.email || !userData.password) {
      console.error('Les données utilisateur sont incomplètes');
      return;
    }
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte d'authentification
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur d'un AuthProvider"
    );
  }
  return context;
}
