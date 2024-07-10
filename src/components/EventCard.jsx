import React from 'react';
import '../styles/EventCard.css'; 

const EventCard = ({ day, date, monthYear, title, host, description }) => (
  <div className="event-card">
    <div className="event-date-box">
      <div className="event-day">{day}</div>
      <div className="event-date">{date}</div>
      <div className="event-month-year">{monthYear}</div>
    </div>
    <div className="event-info">
      <div className="event-title">{title}</div>
      <div className="event-host">{host}</div>
      <div className="event-description">{description}</div>
    </div>
  </div>
);

export default EventCard;
