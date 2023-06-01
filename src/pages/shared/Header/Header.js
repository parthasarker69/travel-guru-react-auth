import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Header.css'
import { AuthContext } from '../../../Context/AuthCnotext/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar className='navbar pt-4 pb-4' collapseOnSelect expand="lg" bg="" variant="white">
            <Container>
                <Link to='/'><Navbar.Brand className='text-white fs-3 fw-bold'>Travel Guru</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>

                    <Nav className="d-flex justify-content-around">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Your Dstination"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                        <Link to="/news">News</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="login">Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;