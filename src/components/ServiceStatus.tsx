import React from 'react';

const ServiceStatus: React.FC = () => {
  const services = [
    { id: 1, customer: 'Alice Johnson', type: 'Farm Tour', status: 'In Progress', date: '2024-04-05' },
    { id: 2, customer: 'Bob Smith', type: 'Koi Purchase', status: 'Scheduled', date: '2024-04-10' },
    { id: 3, customer: 'Carol White', type: 'Consultation', status: 'Completed', date: '2024-04-02' },
  ];

  return (
    <div className="service-status card">
      <h2>Service Status</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Service Type</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.customer}</td>
              <td>{service.type}</td>
              <td>{service.status}</td>
              <td>{service.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceStatus;