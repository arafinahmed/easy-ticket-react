import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
const Head = () => {
    return (
        <Navbar className="container" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">Easy Ticket</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/destination">Destination</Link></Nav.Link>
                    <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Head;