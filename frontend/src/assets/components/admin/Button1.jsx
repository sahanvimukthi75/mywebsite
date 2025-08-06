import React from 'react';

const Button1 = ({ onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    window.location.reload();
  };

  return (
    <button
    style={{
        marginTop: "70px",
        marginLeft: "-300px",
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
    >Delete
      
    </button>
  );
};

export default Button1;
