import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <div className="booking-form card">
      <h2>Book Your Koi Purchasing Service</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="preferred-date">Preferred Date:</label>
          <input type="date" id="preferred-date" name="preferred-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Estimated Budget (in Yen):</label>
          <input type="number" id="budget" name="budget" min="10000" step="10000" required />
        </div>
        <div className="form-group">
          <label htmlFor="preferences">Koi Preferences:</label>
          <textarea id="preferences" name="preferences" rows={4} placeholder="Describe your preferred Koi varieties, sizes, or any specific requirements"></textarea>
        </div>
        <button type="submit">Submit Booking Request</button>
      </form>
    </div>
  );
};

export default BookingForm;