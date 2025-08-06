import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const Homea = () => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    image: null,
    subImages: [],
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from URL parameters

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3002/homea/${id}`)
        .then(result => {
          const post = result.data;
          setFormData({
            location: post.location,
            description: post.description,
            image: post.image,
            subImages: post.subImages || [],
          });
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubImagesChange = (e) => {
    setFormData({
      ...formData,
      subImages: [...e.target.files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('location', formData.location);
    data.append('description', formData.description);
    if (formData.image instanceof File) {
      data.append('image', formData.image);
    }
    formData.subImages.forEach((subImage) => {
      if (subImage instanceof File) {
        data.append('subImages', subImage);
      }
    });

    if (id) {
      axios.put(`http://localhost:3002/update/${id}`, data)
        .then(res => {
          console.log('Updated:', res.data);
          navigate('/details');
        })
        .catch(err => console.log(err));
    } else {
      axios.post('http://localhost:3002/addpost', data)
        .then(res => {
          console.log('Added:', res.data);
          navigate('/details');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <h1 style={{ fontSize: "30px" }}>{id ? 'Update Post' : 'Add A Post'}</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              required
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "30%",
                boxSizing: "border-box",
                marginLeft: "30px",
                marginTop: "150px",
              }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              required
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "30%",
                boxSizing: "border-box",
                marginLeft: "15px",
              }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="image">Main Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "30%",
                boxSizing: "border-box",
                marginLeft: "15px",
              }}
              onChange={handleImageChange}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="subImages">Sub Images:</label>
            <input
              type="file"
              id="subImages"
              name="subImages"
              accept="image/*"
              multiple
              style={{
                padding: "10px",
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "30%",
                boxSizing: "border-box",
                marginLeft: "15px",
              }}
              onChange={handleSubImagesChange}
            />
          </div>
          <button
            style={{
              marginTop: "20px",
              marginLeft: "100px",
              backgroundColor: "#f34f0a",
              color: "white",
              border: "none",
              padding: "10px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "background-color 0.3s ease",
            }}
            type="submit"
          >
            {id ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homea;
