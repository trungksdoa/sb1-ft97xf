import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FarmToursPage from './pages/FarmToursPage';
import BookingPage from './pages/BookingPage';
import ServiceManagementPage from './pages/ServiceManagementPage';
import CustomerProfilePage from './pages/CustomerProfilePage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/farm-tours" element={<FarmToursPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/service-management" element={<ServiceManagementPage />} />
            <Route path="/profile" element={<CustomerProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;