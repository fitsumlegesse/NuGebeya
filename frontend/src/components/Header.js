import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'

const navText = {
    color: 'white',
    paddingLeft: "10px",
    
  };
const icons = {
    color: 'white',
    paddingRight: "10px",
  };
const toggle = {
    backgroundColor: 'white',
    
  };

const Header = () => {
    return (
        <header>
    <Navbar className="color-nav" varient="" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand className='nav-text' href="/" style={navText}>ገበያ</Navbar.Brand>
            <Navbar.Toggle style={toggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                
                    <Nav.Link className='nav-text' href="/cart" style={navText}><i style={icons} className= 'fas fa-cart-plus'></i>ጋሪ</Nav.Link>
                    <Nav.Link className='nav-text'href="/login" style={navText}><i style={icons} className= 'fas fa-sign-in-alt'></i>ይግቡ</Nav.Link>  
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
        </header>
    )
}

export default Header
