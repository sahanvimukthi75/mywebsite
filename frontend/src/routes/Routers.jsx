import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Login from '../assets/components/Login'
import Register from '../assets/components/Register'
import Home from '../assets/components/user/Home'
import Homea from '../assets/components/admin/Homea'
import Gallery from '../assets/components/user/Gallery'
import About from '../assets/components/user/About'

import GalleryDetail from '../assets/components/user/GalleryDetail'
import { Contact } from '../assets/components/user/Contact'
import Details from '../assets/components/admin/Details'
import Update from '../assets/components/admin/Update'

function Routers() {
  return ( <Routes>

<Route path='/' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/homea' element={<Homea/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path="/gallery" element={<Gallery />} />
<Route path="/gallery/:id" element={<GalleryDetail />} />
<Route path="/details" element={<Details />} />
<Route path="/update/:id" element={<Update />} />







  </Routes>
    
  )
}

export default Routers