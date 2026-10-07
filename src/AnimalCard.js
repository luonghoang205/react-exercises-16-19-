// src/AnimalCard.js

import React from 'react';
import PropTypes from 'prop-types';


function AnimalCard({ name, scientificName, size, diet, additional, showAdditional, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      width: '200px', 
      backgroundColor: '#fbc02d',
      textAlign: 'center',
      overflow: 'hidden', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '100%',
          height: '200px', 
          objectFit: 'cover', 
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />

      
      <h2 style={{ margin: '10px 0' }}>{name}</h2>
      
      
      <p>Scientific Name: <i>{scientificName}</i></p>
      <p>{size} kg</p>
      
      
      <p>{diet.join(', ')}.</p> 

      <button 
        onClick={() => showAdditional(additional)}
        style={{
          backgroundColor: '#d32f2f',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
          width: '100%' 
        }}
      >
        More Info
      </button>
    </div>
  );
}


AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  showAdditional: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired, 
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  })
};


AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};

export default AnimalCard;

//exe 19 
