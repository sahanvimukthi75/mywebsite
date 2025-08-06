import React from 'react'
import Navbar from './Navbar'
import img from '../../../assets/person.jpg'
import Footer from './Footer'

function About() {
  return (
    <div> <Navbar/>
    <div style={{marginTop:"100px",fontSize:"50px",marginLeft:"150px"}}>About Me</div>
    <div style={{display:"flex",alignItems:"flex-start"}} >
      <img src={img} alt="" style={{width:"25%",height:"auto",marginLeft:"150px",marginTop:"20px",borderRadius:"50px"}} />
    <p style={{marginTop:"150px",marginLeft:"70px",fontSize:"20px"}}> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis odit, <br/> 
       aperiam autem repudiandae? Perspiciatis quidem accusamus maiores, deleniti <br/>
       odio ullam placeat praesentium reprehenderit esse, corrupti vero molestias rem.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis odit, <br/> 
       aperiam autem repudiandae? Perspiciatis quidem accusamus maiores, deleniti <br/>
       odio ullam placeat praesentium reprehenderit esse, corrupti ....."</p>
    </div>
    <div className='mt-10'><Footer/></div>
    
    </div>
  )
}

export default About