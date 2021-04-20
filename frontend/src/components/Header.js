import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container } from 'react-bootstrap'

const navText = {
    color: 'white',
    paddingLeft: "10px",
    
  };
const icons = {
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
            <LinkContainer to='/'>
                <Navbar.Brand className='nav-text'  style={navText}>ገበያ</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle style={toggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link className='nav-text' style={navText}><i style={icons} className= 'fas fa-cart-plus'></i>ጋሪ</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link className='nav-text' style={navText}><i style={icons} className= 'fas fa-sign-in-alt'></i>ይግቡ</Nav.Link>  
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
        </header>
    )
}

export default Header
