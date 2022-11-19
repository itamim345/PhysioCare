import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const header = () => {
    return (
        <header>
            <Navbar
                collapseOnSelect="collapseOnSelect"
                expand="lg"
                bg="light"
                variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">PhysioCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">
                                <Button variant="danger">Login</Button>{' '}</Nav.Link>
                            <Nav.Link href="#deets">
                                <Button variant="success">Register</Button>{' '}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default header;
