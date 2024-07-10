import React from 'react';
import '../styles/Popup.css';

const Popup = ({ image, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        
        <div className="popup-content-inner">
          <div className="popup-image">
            <img src={image.src} alt={image.alt} />
          </div>
          <div className="popup-details">
            <h2>{image.alt}</h2>
            <div className="rating">
              {renderStars(image.rating)}
            </div>
            {/* Map over paragraphs array to render each paragraph */}
            {image.paragraphs.map((paragraph, index) => (
              <p key={index} className={`paragraph${index + 1}`}>{paragraph}</p>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Function to render star rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }
  return stars;
};

export default Popup;
