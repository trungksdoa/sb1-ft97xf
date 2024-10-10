import React from 'react';
import FarmInfo from '../components/FarmInfo';
import FamousBreeds from '../components/FamousBreeds';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Welcome to Koi Fish Purchasing Services</h1>
        <p className="intro">Discover the beauty and elegance of Japanese Koi fish. Our expert services help you find and purchase the perfect Koi for your collection.</p>
        <FarmInfo />
        <FamousBreeds />
      </div>
    </div>
  );
};

export default HomePage;