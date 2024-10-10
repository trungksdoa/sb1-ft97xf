import React from 'react';

const OrderHistory: React.FC = () => {
  const orders = [
    { id: 1, date: '2024-03-15', total: 250000, status: 'Completed' },
    { id: 2, date: '2024-02-28', total: 180000, status: 'Shipped' },
    { id: 3, date: '2024-01-10', total: 320000, status: 'Completed' },
  ];

  return (
    <div className="order-history card">
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total (¥)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total.toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;