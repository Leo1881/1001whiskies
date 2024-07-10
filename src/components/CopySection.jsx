import React from 'react';
import '../styles/CopySection.css';
import heroImage from '../assets/images/about_us.jpg';


const CopySection = () => {
    return (
      <div className="copy-section">
        <div className="copy-section-content">
          <h2>About The Group</h2>
          <p>
            Welcome to 1001 Whiskies, where our love for whiskey knows no bounds. Founded by a group of friends with a shared passion for the intricate flavours and rich histories of whiskey, our club is more than just a gathering place—it's a community united by the spirit of exploration and camaraderie.
          </p>
          <p>
            From casual tastings to spirited discussions, we come together to celebrate the artistry of whiskey-making and to deepen our understanding of this beloved beverage. Our mission is simple: to create memorable experiences, forge lasting friendships, and elevate our appreciation for whiskey one sip at a time. So whether you're a seasoned aficionado or just beginning your journey into the world of whiskey, we invite you to join us on this adventure.
          </p>
        </div>
        <div className="copy-section-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    );
  };
  
  export default CopySection;