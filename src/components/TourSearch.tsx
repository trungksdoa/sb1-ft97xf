import React from 'react';

const TourSearch: React.FC = () => {
  return (
    <div className="tour-search card">
      <h2>Search for Koi Farm Tours</h2>
      <form>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location">
            <option value="">Select Prefecture</option>
            <option value="niigata">Niigata</option>
            <option value="hiroshima">Hiroshima</option>
            <option value="okayama">Okayama</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Tour Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="participants">Number of Participants:</label>
          <input type="number" id="participants" name="participants" min="1" max="10" />
        </div>
        <button type="submit">Search Tours</button>
      </form>
    </div>
  );
};

export default TourSearch;