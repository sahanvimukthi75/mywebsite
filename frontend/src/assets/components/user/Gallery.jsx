import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import GalleryCard from '../../../layout/GalleryCard'
import axios from "axios";
import Footer from "./Footer";

function Gallery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/gallery')
      .then(result => setPosts(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div><Navbar/>
    < div><h1 style={{fontSize:"30px",marginTop:"80px",marginBottom:"50px"}}>My Gallery</h1></div>

    <div className="flex flex-wrap gap-8 justify-center ">
        {posts.map((post) => (
          <GalleryCard
          key={post._id} 
          id={post._id}
            location={post.location}
            description={post.description}
            image={post.image}
            
          />
        ))}
      </div>
      <div className="mt-10"><Footer/></div>
    
    </div>
  )
}

export default Gallery