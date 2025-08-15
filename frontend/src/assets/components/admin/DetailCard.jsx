import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button1 from "./Button1";
import Navbar from "./Navbar";
import Button2 from "./Button2";

const DetailCard = ({ id, image, location, description }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios.delete(`/api/delete/${id}`)
      .then(res => {
        console.log(res);
        onDelete(id);
       
      })
      .catch(err => console.log(err));
  };


  const handleUpdate = () => {
    navigate(`/update/${id}`);
    console.log(id)
  };



 
  return (
    
    <div className="w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg" >
      
      <div className="space-y-4">
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
          <img 
            src={`/api/${image}`}
            alt={description} 
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
              Location: {location}
            </h3>
            <h3 style={{ fontSize: '15px', textAlign: 'center' }}>
              {description}
            </h3>
            <Button1  onClick={() => handleDelete(id)} />
            <Button2 linkTo={`/update/${id}`} onClick={handleUpdate}>Update</Button2>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default DetailCard;
