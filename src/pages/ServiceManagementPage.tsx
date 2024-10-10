import React from 'react';
import ServiceStatus from '../components/ServiceStatus';
import PaymentManagement from '../components/PaymentManagement';

const ServiceManagementPage: React.FC = () => {
  return (
    <div className="service-management-page">
      <div className="container">
        <h1>Service Management</h1>
        <div className="service-management-grid">
          <ServiceStatus />
          <PaymentManagement />
        </div>
      </div>
    </div>
  );
};

export default ServiceManagementPage;