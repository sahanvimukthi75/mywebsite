
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import './Home.css';


const images =[
  'bg-image-1',
  'bg-image-2',
  'bg-image-3',
  'bg-image-4',
  'bg-image-5',
]

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  const containerClassName = `home-container ${images[currentImageIndex]}`;

 
  return (

    <div className={containerClassName}>
      <h1 className='h1'>Every Memories With You....</h1>
      <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
        Illo fugit accusantium est doloribus asperiores dolore iure laudantium </p>
      <Navbar/>
    </div>
   
  )
}

export default Home