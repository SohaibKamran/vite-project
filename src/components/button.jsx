import { useState } from 'react';

const Button = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const btnStyle = {
    margin: '20px 5%',
    backgroundColor: isHovered ? '#7b031d' : '#CE0631',
    color: 'white',
    border: 'none',
    borderRadius: '22px',
    minWidth: '150px',
    padding: '10px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={btnStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default Button;
