import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userAction'

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

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = ()=>{
        dispatch(logout)
    }
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
                    {userInfo ? (
                        <NavDropdown title ={userInfo.name} id='userInfo'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>

                    ): <LinkContainer to='/login'>
                    <Nav.Link className='nav-text' style={navText}><i style={icons} className= 'fas fa-sign-in-alt'></i>ይግቡ</Nav.Link>  
                </LinkContainer> }
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
        </header>
    )
}

export default Header
