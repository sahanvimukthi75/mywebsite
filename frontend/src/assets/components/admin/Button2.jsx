import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button2 = ({ linkTo, onClick, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (linkTo) {
      navigate(linkTo);
    }
  };

  return (
    <button style={{
        marginTop: "-30px",
        marginLeft: "300px",
        backgroundColor: "#f34f0a",
        color: "white",
        border: "none",
        padding: "8px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "15px",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleClick}
    >Update
      
    </button>
  );
};

export default Button2;
