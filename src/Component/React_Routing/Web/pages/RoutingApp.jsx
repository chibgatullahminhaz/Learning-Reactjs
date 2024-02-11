import React from 'react'
import { BrowserRouter, Link, Route, Routes,useLocation, } from 'react-router-dom'

// import pages
import Home from './Home'
import Contact from './Contact'
import About from './About'

function RoutingApp() {
  return (
    <BrowserRouter>
    <Link to="">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about" >About</Link>

      <Routes>

        <Route index element = {<Home />}  />
        <Route path="/contact" element={ <Contact />}  />
        <Route path="/about" element ={<About />} />

      </Routes> 

    </BrowserRouter>
  )
}

export default RoutingApp
