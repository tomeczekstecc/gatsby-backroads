import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './layout.css'
const Layout = (props) => {
  return (
    <div>
<Navbar/>
{props.children}
<Footer/>
    </div>
  )
}

export default Layout
