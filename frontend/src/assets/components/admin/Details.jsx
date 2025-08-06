import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";

import axios from "axios";
import Navbar from "./Navbar";


function Details() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/details')
      .then(result => setPosts(result.data))
      .catch(err => console.log(err));
  }, []);


  
  return (
    <div> <Navbar/>
    < div><h1 style={{fontSize:"30px",marginTop:"80px",marginBottom:"50px"}}>Details</h1></div>

    <div className="flex flex-wrap gap-8 justify-center ">
        {posts.map((post) => (
          <DetailCard
          key={post._id} 
          id={post._id}
            location={post.location}
            description={post.description}
            image={post.image}
            
          />
        ))}
      </div>
      
    
    </div>
  )
}

export default Details