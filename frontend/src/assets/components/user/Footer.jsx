import React from 'react'
import { FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
              <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
              <div className='w-full md:w-1/4'>
            <h1 className='font-semibold text-xl pb-4'>weddd web</h1>          
           
            
          <div className='flex flex-col gap-2'>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/home">Home</a>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/gallery">Gallery</a>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/about">About</a>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/contact">Contact</a>
          </div>
        </div>

             <div className='w-full md:w-1/4'>
      
        <h3 className='font-semibold text-xl pb-4 mr-5'>Social Media</h3>
        <div className='flex items-center gap-8 ml-20 mt-10'>
        <FaFacebook className='text-xl text-blue-500 hover:text-blue-700 cursor-pointer' />
        <FaInstagram className='text-xl text-pink-500 hover:text-pink-700 cursor-pointer' />
        <FaTwitter className='text-xl text-blue-400 hover:text-blue-600 cursor-pointer' />
      </div>
    </div>

        <div className='w-full md:w-1/4'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-xl pb-4'>Contact Me</h3>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/">078 235 4565</a>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/">No 06,Niyadagala Homagama</a>
            <a className='hover:text-[#f34f0a] transition-all cursor-pointer' href="/">example@gmail.com</a>
            
          </div>
          
        </div>
            </div>
        </div>
   
  )
}

export default Footer