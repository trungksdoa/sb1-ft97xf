import React from 'react';
import TourSearch from '../components/TourSearch';
import TourResults from '../components/TourResults';

const FarmToursPage: React.FC = () => {
  return (
    <div className="farm-tours-page">
      <div className="container">
        <h1>Koi Fish Farm Tours</h1>
        <p className="intro">Experience the art of Koi breeding firsthand with our exclusive farm tours. Discover the beauty of Japan's finest Koi farms and learn from expert breeders.</p>
        <TourSearch />
        <TourResults />
      </div>
    </div>
  );
};

export default FarmToursPage;