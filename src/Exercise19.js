// src/Exercise19.js

import React from 'react';
import animals from './data';
import AnimalCard from './AnimalCard';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  alert(alertInformation);
}

const Exercise19 = () => {
  return (
    <div style={{ padding: '20px' }}> {/* Thêm padding cho dễ nhìn */}
      <h1>Animals</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}> {/* Căn giữa các card */}
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
            image={animal.image} // Cần thêm dòng này để truyền ảnh
          />
        ))}
      </div>
    </div>
  );
};

export default Exercise19;

//exe 19 