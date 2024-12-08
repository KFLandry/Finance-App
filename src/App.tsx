import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Invoices from './pages/dashboard/InvoicePage';
import Home from './pages/dashboard/HomePage';
import Customer from './pages/dashboard/CustomerPage';
import Page from './Page';
import LoginPage from './pages/LoginPage';
import NoPage from './NoPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider } from './Components/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Home />}></Route>
            <Route path="/dashboard/invoices" element={<Invoices />}></Route>
            <Route path="/dashboard/customers" element={<Customer />}></Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
