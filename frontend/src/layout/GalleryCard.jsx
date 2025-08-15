import React from "react";
import { useNavigate } from 'react-router-dom';

const GalleryCard = (props) => {
  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate(`/gallery/${props.id}`);
  };

  return (
    <div className="w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"  onClick={handleCardClick}>
      
      <div className="space-y-4">
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
          <img 
            src={`/api/${props.image}`}
            alt={props.description} 
            style={{
              width: '100%', 
              height: 'auto',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              padding: '10px',
            }}
          >
            <h3 style={{ fontSize: '20px', marginBottom: '10px', textAlign: 'center' }}>
              Location: {props.location}
            </h3>
            <h3 style={{ fontSize: '15px', textAlign: 'center' }}>
              {props.description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
