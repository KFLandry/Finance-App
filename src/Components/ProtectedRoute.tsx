import { Navigate } from 'react-router-dom';

type ProtectedRouteProp = { children: React.ReactNode };

export default function ProtectedRoute({ children }: ProtectedRouteProp) {
  // Simule l'utilisateur connecté
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
