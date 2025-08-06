import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const GalleryDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/gallery/${id}`)
      .then(result => setPost(result.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div> <Navbar/>
    
      
      <h2 className='mt-20 mb-20 text-3xl '>More Images</h2>

      <div className="flex flex-wrap gap-4 justify-center">
      <img src={`http://localhost:3002/${post.image}`}  className="w-full lg:w-1/5 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"/>
        {post.subImages.map((subImage, index) => (
          <div key={index} className="w-full lg:w-1/5 p-5 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg">
           
            <img 
              src={`http://localhost:3002/${subImage}`} 

              alt={`Sub Image ${index + 1}`} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            /> 
          </div>
        ))}
      </div>
      <div style={{marginTop:"120px"}}><Footer/></div>
    </div>
  );
};

export default GalleryDetail;
