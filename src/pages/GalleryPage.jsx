import React, { useState } from 'react';
import '../styles/GalleryPage.css'; 
import sampleImages from '../assets/galleryImages'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openImage = (index) => setCurrentImageIndex(index);
  const closeImage = () => setCurrentImageIndex(null);
  const showNextImage = () => setCurrentImageIndex((index) => (index + 1) % sampleImages.length);
  const showPreviousImage = () => setCurrentImageIndex((index) => (index - 1 + sampleImages.length) % sampleImages.length);

  return (
    <div className="gallery-page">
      <Navbar /> 
      
      <h2>Gallery</h2>
      <p className="header-p">Explore our collection of memorable moments.</p>
      
      <div className="gallery-grid">
        {sampleImages.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => openImage(index)}>
            <img src={image.src} alt={image.description} />
            <div className="image-info">
              <span className="image-date">{image.date}</span>
              <span className="image-description">{image.description}</span>
            </div>
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className="lightbox" onClick={closeImage}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={sampleImages[currentImageIndex].src} alt={sampleImages[currentImageIndex].description} />
            <button className="close-button" onClick={closeImage}>&times;</button>
            <button className="arrow left-arrow" onClick={showPreviousImage}>&larr;</button>
            <button className="arrow right-arrow" onClick={showNextImage}>&rarr;</button>
          </div>
        </div>
      )}

      <Footer /> 
    </div>
  );
};

export default GalleryPage;
