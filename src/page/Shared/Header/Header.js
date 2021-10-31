import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Header.css"
// import logo from '../../images/logo.png';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    const { user, logOut } = useAuth();
    return (
        <>
            <div className="header">
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand to="/home">Study Tour</Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>

                            <NavLink to="/addnew" activeStyle={activeStyle}>Add Place</NavLink>
                            {/* <NavLink to="/booking" activeStyle={activeStyle}>Book Now</NavLink> */}
                            <NavLink to="/manageselection" activeStyle={activeStyle}>Manage Booking</NavLink>
                            <NavLink to="/managetour" activeStyle={activeStyle}>Manage All Tours</NavLink>

                            {user.email && <span style={{ color: 'white' }}>  {user.displayName}  </span>}
                            {
                                user.email ?
                                    <button onClick={logOut}>log Out</button> :
                                    <NavLink to="/login">Log in</NavLink>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;

/*   <div className="header w-100">
          <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
              <Container>
                  <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse className="justify-content-end" />
                  <img style={{ width: "35px" }} className="position-absolute top-0 start-5" alt="" />
                  <Navbar.Brand className="position-absolute top-0 start-50 text-info ">e-Hospital</Navbar.Brand>
                  <Nav className="me-0">
                      <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>

                      <NavLink to="/enroll" activeStyle={activeStyle}>Enroll Now</NavLink>
                      <NavLink to="/booking" activeStyle={activeStyle}>Enroll Now</NavLink>
                      <NavLink to="/management" activeStyle={activeStyle}>Enroll Now</NavLink>

                      {user.email && <span style={{ color: 'white' }}>  {user.displayName} </span>}
                      {
                          user.email ?
                              <button onClick={logOut}>log Out</button> :
                              <NavLink to="/login">Log in</NavLink>
                      }
                  </Nav>
              </Container>
          </Navbar>

      </div> */