import React from 'react';

const TourResults: React.FC = () => {
  const mockTours = [
    { id: 1, name: 'Niigata Koi Farm Experience', date: '2024-05-15', price: 15000, availability: 5 },
    { id: 2, name: 'Hiroshima Koi Breeding Insights', date: '2024-06-20', price: 18000, availability: 3 },
    { id: 3, name: 'Okayama Koi Varieties Tour', date: '2024-07-10', price: 12000, availability: 8 },
  ];

  return (
    <div className="tour-results">
      <h2>Available Tours</h2>
      {mockTours.map(tour => (
        <div key={tour.id} className="tour-item">
          <h3>{tour.name}</h3>
          <p><strong>Date:</strong> {tour.date}</p>
          <p><strong>Price:</strong> ¥{tour.price.toLocaleString()}</p>
          <p><strong>Availability:</strong> {tour.availability} spots left</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default TourResults;