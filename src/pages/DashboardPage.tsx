import React from 'react';
import SalesChart from '../components/SalesChart';
import CustomerStats from '../components/CustomerStats';
import ServicePerformance from '../components/ServicePerformance';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Dashboard</h1>
        <div className="dashboard-grid">
          <SalesChart />
          <CustomerStats />
          <ServicePerformance />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;