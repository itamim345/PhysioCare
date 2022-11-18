import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const header = () => {
  return (
    <header>
      {/* <nav className="container">
        <div className="logo">
            <h3>LOGO</h3>
        </div>
        <div className="menu">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className="buttons">
            <button type="button" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-danger">Log In</button>
        </div>
      </nav> */}

      <Navbar collapseOnSelect expand="lg" style={{background:"#dff9fb"}} variant="light">
            <Container>
              <Navbar.Brand href="#home">PhysioCare</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets"><Button variant="danger">Login</Button>{' '}</Nav.Link>
                  <Nav.Link href="#deets"><Button variant="success">Register</Button>{' '}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </header>
  );
}

export default header;
