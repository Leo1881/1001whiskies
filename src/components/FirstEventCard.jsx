// src/components/FirstEventCard.jsx
import React from 'react';
import '../styles/FirstEventCard.css';

const FirstEventCard = ({ day, date, monthYear, image, title, host, description }) => (
  <div className="first-event-card">
    <div className="image-container">
      <img src={image} alt="Event" className="event-image" />
      <div className="event-date-box">
        <div className="event-day">{day}</div>
        <div className="event-date">{date}</div>
        <div className="event-month-year">{monthYear}</div>
      </div>
    </div>
    <div className="event-details">
      <div className="event-info">
        <div className="event-title">{title}</div>
        <div className="event-host">{host}</div>
        <div className="event-description">{description}</div>
      </div>
    </div>
  </div>
);

export default FirstEventCard;
