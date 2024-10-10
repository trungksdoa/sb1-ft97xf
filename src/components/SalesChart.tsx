import React from 'react';

const SalesChart: React.FC = () => {
  return (
    <div className="sales-chart card">
      <h2>Sales Chart</h2>
      <div className="chart-placeholder">
        <p>Sales chart visualization goes here.</p>
        <p>Total Sales: ¥1,500,000</p>
        <p>Growth: +15% from last month</p>
      </div>
    </div>
  );
};

export default SalesChart;