import React from 'react';

const PaymentManagement: React.FC = () => {
  const payments = [
    { id: 1, customer: 'Alice Johnson', amount: 150000, status: 'Paid', date: '2024-04-03' },
    { id: 2, customer: 'Bob Smith', amount: 200000, status: 'Pending', date: '2024-04-08' },
    { id: 3, customer: 'Carol White', amount: 100000, status: 'Paid', date: '2024-04-01' },
  ];

  return (
    <div className="payment-management card">
      <h2>Payment Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount (¥)</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.customer}</td>
              <td>{payment.amount.toLocaleString()}</td>
              <td>{payment.status}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;