import React from 'react';
import Divider from "../components/Divider";
import EventCard from './EventCard'; 
import '../styles/UpcomingEvents.css'; 

const UpcomingEvents = () => (
  <div className="upcoming-events">
    <Divider />
    <EventCard
      day="Sat"
      date="21"
      monthYear="August 2024"
      title="Special Whiskey Tasting"
      host="Host: Gaba"
      description="Discover exclusive whiskey selections with our resident whiskey sommelier."
    />
    <Divider />
    <EventCard
      day="Sat"
      date="26"
      monthYear="October 2024"
      title="Whiskey and Food Pairing"
      host="Host: Bradley"
      description="Explore the art of pairing whiskey with gourmet dishes in this culinary adventure."
    />
    <Divider />
    <EventCard
      day="Fri"
      date="30"
      monthYear="November 2024"
      title="Summer Whiskey Fest"
      host="Group Bust Up : Dullstroom"
      description="Celebrate summer with a variety of whiskey tastings and live entertainment."
    />
  </div>
);

export default UpcomingEvents;
