import React from 'react';

interface Farm {
  name: string;
  prefecture: string;
  specialties: string[];
  description: string;
  imageUrl: string;
}

const farms: Farm[] = [
  {
    name: "Niigata Koi Farm",
    prefecture: "Niigata",
    specialties: ["Kohaku", "Sanke", "Showa"],
    description: "Renowned for producing champion Koi, our Niigata farm specializes in the three major Koi varieties. The pristine water from melted snow of the Japanese Alps contributes to the vibrant colors and robust health of our Koi.",
    imageUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hiroshima Koi Center",
    prefecture: "Hiroshima",
    specialties: ["Showa", "Utsurimono", "Asagi"],
    description: "Our Hiroshima farm is famous for its Showa and Utsurimono varieties. The moderate climate and mineral-rich water of the region contribute to the development of deep, lustrous colors in our Koi.",
    imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Okayama Koi Gardens",
    prefecture: "Okayama",
    specialties: ["Asagi", "Shusui", "Koromo"],
    description: "Specializing in Asagi and Shusui, our Okayama farm is known for producing Koi with exceptional quality scales. The farm's innovative breeding techniques result in Koi with unique patterns and colorations.",
    imageUrl: "https://images.unsplash.com/photo-1595840635571-5d6844384b82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const FarmInfo: React.FC = () => {
  return (
    <div className="farm-info">
      <h2>Our Koi Farms</h2>
      <p className="intro">Discover the origins of our high-quality Koi. Each farm specializes in specific varieties and employs unique breeding techniques.</p>
      <div className="farm-list">
        {farms.map((farm, index) => (
          <div key={index} className="farm-card">
            <img src={farm.imageUrl} alt={farm.name} className="farm-image" />
            <div className="farm-details">
              <h3>{farm.name}</h3>
              <p className="farm-location"><strong>Location:</strong> {farm.prefecture} Prefecture</p>
              <p><strong>Specialties:</strong> {farm.specialties.join(", ")}</p>
              <p>{farm.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmInfo;