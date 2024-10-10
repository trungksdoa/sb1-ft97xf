import React from 'react';

const CustomerStats: React.FC = () => {
  return (
    <div className="customer-stats card">
      <h2>Customer Statistics</h2>
      <ul>
        <li>Total Customers: 1,250</li>
        <li>New Customers (This Month): 75</li>
        <li>Repeat Customers: 60%</li>
        <li>Average Order Value: ¥200,000</li>
      </ul>
    </div>
  );
};

export default CustomerStats;