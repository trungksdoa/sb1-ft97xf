import React from 'react';

const FamousBreeds: React.FC = () => {
  return (
    <div className="famous-breeds card">
      <h2>Famous Koi Breeds</h2>
      <ul>
        <li>
          <strong>Kohaku:</strong> White body with red markings
        </li>
        <li>
          <strong>Sanke:</strong> White body with red and black markings
        </li>
        <li>
          <strong>Showa:</strong> Black body with red and white markings
        </li>
        <li>
          <strong>Asagi:</strong> Blue reticulated scales and red belly
        </li>
        <li>
          <strong>Shusui:</strong> Doitsu-scaled version of Asagi
        </li>
      </ul>
      <p>Each breed has its unique characteristics and patterns, making them highly prized by collectors worldwide.</p>
    </div>
  );
};

export default FamousBreeds;