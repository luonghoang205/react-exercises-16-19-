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
    <div style={{ padding: '20px' }}> 
      <h1>Animals</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}> 
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
            image={animal.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Exercise19;

//exe 19 
