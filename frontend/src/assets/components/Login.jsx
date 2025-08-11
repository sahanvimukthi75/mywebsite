import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/background3.jpg';
import { Link } from 'react-router-dom';

function Login ()  {
  const [name ,setName]=useState();
  const [password ,setPassword]=useState();
  const navigate =useNavigate();

  const handleSubmit= (e)=>{
  
    e.preventDefault()
    axios.post('http://192.168.43.90/login',{name,password})
    .then (result=>{
      console.log(result)
      if(result.data ==="success"){
          navigate('/home')

      }else {
        navigate('/homea')
      }
    
  
   })
    .catch (err=>console.log(err))

  }

  return (
     <div style={{ position: "relative", minHeight: "100vh" }}>
      <img 
        src={img} 
        alt="" 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          height: "100%", 
          width: "100%", 
          objectFit: "cover",
          filter: "blur(3px)", 
          zIndex: -1
        }} 
      />
      <div style={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        padding: "20px", 
        borderRadius: "10px",
        zIndex: 1
      }}> 
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Enter User Name:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required 
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box"
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box"
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "#f34f0a",
              color: "white",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease"
            }} 
            type="submit"
          >
            Login
          </button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <span>Create Account </span>
            <Link to="/" style={{ color: "#f34f0a", textDecoration: "none" }}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;