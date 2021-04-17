import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
    <Navbar className="color-nav" varient="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand className='nav-text' href="/">ገበያ</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className='nav-text' href="/cart"><i className= 'fas fa-shopping-cart'></i>Cart</Nav.Link>
                    <Nav.Link className='nav-text'href="/login"><i className= 'fas fa-user'></i>Sign In</Nav.Link>  
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
        </header>
    )
}

export default Header
