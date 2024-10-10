import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  return (
    <div className="booking-page">
      <div className="container">
        <h1>Book Your Koi Fish Purchasing Service</h1>
        <p className="intro">Ready to start your Koi collection or add to your existing one? Our expert consultants are here to help you find and purchase the perfect Koi fish.</p>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;