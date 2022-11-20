import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
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
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/why-physio">WhyPhysio</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* Conditional render if userLoggedin then, logout, otherwise 2 button from 2condition */}
                            {
                                user ?
                                <Nav.Link>
                                    <Button variant="warning" onClick={handleSignOut}>Sign Out</Button>{' '}</Nav.Link>

                                    :
                                <Nav.Link as={Link} to="/login">
                                <Button variant="danger">Login</Button>{' '}</Nav.Link>
                            }

                            {
                                user ?
                                ""
                                :
                                <Nav.Link as={Link} to="/register">
                                <Button variant="success">Register</Button>{' '}</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
