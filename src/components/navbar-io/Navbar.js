import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import SaveButton from '../Button/Button';
import  logoAsset  from '../../assets/nav-logo.png';
import { BsChevronDown } from 'react-icons/bs';
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout.png";
import { useLocation } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
const NavbarComponent = (props) => {
    const location = useLocation();
    const [expanded, setExpanded] = useState('');
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    // useEffect(() => {
    //     if (location.pathname === "/" || location.pathname === "/login")
    //         setShowSignIn(true);
    //     else setShowSignIn(false);
    //     if (location.pathname === "/signup")
    //         setShowSignUp(true);
    //     else setShowSignUp(false);

    // }, [location])

    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          expanded={expanded}
          className="loginNavBar"
        >
          <Container
            fluid
            className="gap-4 nav-padding"
            
          >
            <div className="d-flex justify-content-between align-items-center collapseWidth">
              <Link to="/">
                <Navbar.Brand className="me-0">
                  <img src={logoAsset} alt=""  className='logoImg'/>
                </Navbar.Brand>
              </Link>
              {/* <Link to="/temporarySignUp" className='desktopScreenHide'>
                            <SaveButton label="Sign up" buttonStyle="navsignUp" />
                        </Link> */}
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() =>
                  setExpanded((prev) => (prev === "" ? "expanded" : ""))
                }
              />
            </div>
            <Navbar.Collapse
              id="responsive-navbar-nav "
              className="loginNavLinks"
            >
              <Nav className=" gap-5 p-0">
              
                <Link to='/get/virtual-number' className={location.pathname === "/get/virtual-number"?"active":""}>Get Virtual Number</Link>
                <Link to="/balance" className={location.pathname === "/balance" ? "active" : ""}>Balance</Link>
                <Link to="/activated-number" className={location.pathname === "/activated-number" ? "active" : ""} >Activated Numbers</Link>
                <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""} >Profile</Link>
                
              </Nav>
              
              <Nav className="">
                
                
                  <div className=" d-flex nav-right gap-5">
                    

                      <Link to='/login' >Login</Link>
                  <Link to='/signup'>Register</Link>


                  
                  </div> 
                  
                
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default NavbarComponent