import React, { useRef, useState } from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';

const list = [
  "All", "Gaming", "Songs", "News", "Spiritual",
  "Manifestation", "Horror", "Bhakti", "Love",
  "Comedy", "Netflix", "Ramayan", "Power", "Secret", "TMKOC", "ddlj"
];

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const scrollRef = useRef(null);
  const [activeButton, setActiveButton] = useState('All'); // State for the active button

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative flex items-center pt-24 transition-all duration-300 ${isMenuOpen ? 'ml-48' : ''}`}>
      {/* Left arrow button */}
      <button 
        className="absolute left-2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"
        onClick={() => scroll('left')}
      >
        &lt;
      </button>

      {/* Button list with hidden scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 p-2 mx-10 border-b border-gray-300 scrollbar-hide"
        style={{ maxWidth: '100vw' }}
      >
        {list.map((item, index) => (
          <Button 
            key={index} 
            name={item} 
            isActive={activeButton === item} 
            onClick={() => setActiveButton(item)} // Set active button on click
          />
        ))}
      </div>

      {/* Right arrow button */}
      <button 
        className="absolute right-2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"
        onClick={() => scroll('right')}
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;

