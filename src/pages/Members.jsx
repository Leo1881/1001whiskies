import React from 'react';
import '../styles/Members.css';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import member1 from '../assets/members/faadiel.jpeg';
import member2 from '../assets/members/faadiel.jpeg';
import member3 from '../assets/members/faadiel.jpeg';
import member4 from '../assets/members/faadiel.jpeg';
import member5 from '../assets/members/faadiel.jpeg';
import member6 from '../assets/members/faadiel.jpeg';
import member7 from '../assets/members/faadiel.jpeg';
import member8 from '../assets/members/faadiel.jpeg';
import member9 from '../assets/members/faadiel.jpeg';
import member10 from '../assets/members/faadiel.jpeg';
import member11 from '../assets/members/faadiel.jpeg';
import member12 from '../assets/members/faadiel.jpeg';

const members = [
  { name: 'Brandon Van Der Haer', image: member1 },
  { name: 'Robin Goodall', image: member2 },
  { name: 'John Williams', image: member3 },
  { name: 'Roger Niken', image: member4 },
  { name: 'Leaveil Johnson', image: member5 },
  { name: 'Mark Rousseau', image: member6 },
  { name: 'Wayne Cannel', image: member7 },
  { name: 'Gaba Majola', image: member8 },
  { name: 'Shaun Beckett', image: member9 },
  { name: 'Bradley Jacobs', image: member10 },
  { name: 'Fabian Watson', image: member11 },
  { name: 'Kurt Damons', image: member12 },
];

const Members = () => {
  return (
    <div>
      <Navbar /> 
      <div className="members">
        <h1>The Whiskey Connoisseurs</h1>
        <p className='member-description'>A close-knit community of whiskey enthusiasts dedicated to sharing knowledge, enjoying tastings, and celebrating the rich heritage of whiskey. Our members relish in curated experiences and camaraderie centered around their passion for fine whiskies.</p>
        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Members;
