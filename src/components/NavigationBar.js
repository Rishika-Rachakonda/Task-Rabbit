import React from 'react'
import './NavigationBar.css'
import {NavLink} from 'react-router-dom'
import {BiTimeFive} from 'react-icons/bi'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios'

function NavigationBar() {

  return (


    <div className='navi'>
      {/**Navbar */}
      <Navbar bg="light" expand="lg">
     
        <Navbar.Brand ><BiTimeFive></BiTimeFive> Task Rabbit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            
     <ul className="navbar-nav  p3 ">
         <li className="nav-item main">
          <NavLink className="nav-link main-link" 
           to='/'
           >
            
            Registartion</NavLink>
         </li> 
         <li className="nav-item today">
          <NavLink className="nav-link today-link" 
           to='/mainPage'
           >
            
            MainPage</NavLink>
         </li> 
         <li className="nav-item analytics">
          <NavLink className="nav-link analytics-link" 
           to='/img'
           >
            
            Uplaod Image</NavLink>
         </li>   

         <li className="nav-item analytics">
          <NavLink className="nav-link analytics-link" 
           to='/user'
           >
            
            User Profile </NavLink>
         </li>
      </ul>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
</div>
  )
}

export default NavigationBar