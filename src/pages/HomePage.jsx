
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CopySection from '../components/CopySection';
import Events from '../components/Events';
import Footer from '../components/Footer';
import FirstEventCard from '../components/FirstEventCard';
import UpcomingEvents from '../components/UpcomingEvents';
import ContactSection from '../components/ContactSection'; 
import eventImage1 from '../assets/images/event1.jpg'; 

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="copy">
        <CopySection />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="first-event">
        <FirstEventCard
          day="Sat"
          date="27"
          monthYear="July 2024"
          image={eventImage1}
          title="Whiskey Wonderland Tasting"
          host="Host: Faadiel"
          description="Embark on a sensory journey through a selection of rare and unique whiskeys from around the globe, guided by expert connoisseurs."
        />
      </div>
      <div id="upcoming-events">
        <UpcomingEvents />
      </div>
      <div id="contact">
        <ContactSection /> 
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
