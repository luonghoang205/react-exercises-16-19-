// src/AnimalCard.js

import React from 'react';
import PropTypes from 'prop-types';

// Thêm prop 'image' vào danh sách props nhận vào
function AnimalCard({ name, scientificName, size, diet, additional, showAdditional, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      width: '200px', // Tăng chiều rộng một chút để ảnh đẹp hơn
      backgroundColor: '#fbc02d',
      textAlign: 'center',
      overflow: 'hidden', // Giữ cho ảnh không tràn ra ngoài
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Thêm thẻ ảnh vào đây */}
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '100%',
          height: '200px', // Đặt chiều cao cố định cho ảnh
          objectFit: 'cover', // Ảnh tự điều chỉnh cho khớp khung, không bị méo
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />

      {/* Cập nhật nội dung văn bản */}
      <h2 style={{ margin: '10px 0' }}>{name}</h2>
      
      {/* Thêm nhãn "Scientific Name:" và đơn vị "kg" cho chính xác */}
      <p>Scientific Name: <i>{scientificName}</i></p>
      <p>{size} kg</p>
      
      {/* Định dạng lại danh sách diet một chút */}
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
          width: '100%' // Cho nút rộng bằng card
        }}
      >
        More Info
      </button>
    </div>
  );
}

// Cập nhật kiểu dữ liệu props cho hình ảnh
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  showAdditional: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired, // Cần thêm dòng này
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  })
};

// Giá trị mặc định nếu props không được truyền (cho trường hợp con Lion)
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};

export default AnimalCard;

//exe 19 