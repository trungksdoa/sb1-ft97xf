import React from 'react';

const ProfileInfo: React.FC = () => {
  return (
    <div className="profile-info card">
      <h2>Profile Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" defaultValue="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" defaultValue="john.doe@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" defaultValue="+1234567890" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" defaultValue="123 Koi Street, Pond City, 12345"></textarea>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileInfo;