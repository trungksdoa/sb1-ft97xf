import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import OrderHistory from '../components/OrderHistory';
import Feedback from '../components/Feedback';

const CustomerProfilePage: React.FC = () => {
  return (
    <div className="customer-profile-page">
      <div className="container">
        <h1>Customer Profile</h1>
        <div className="profile-grid">
          <ProfileInfo />
          <OrderHistory />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfilePage;