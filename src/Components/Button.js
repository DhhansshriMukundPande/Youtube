import React from 'react';

const Button = ({ name, isActive, onClick }) => {
  return (
    <button 
      className={`px-5 py-2 rounded-lg transition-all 
        ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'} 
        focus:outline-none`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
