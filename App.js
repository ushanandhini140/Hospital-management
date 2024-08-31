import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Login from './Login';

function App() {
  return (
    <Router>
      {/* Header */}
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">ABC HOSPITALS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div>
          <p>Email: hospital@example.com | Contact: (123) 456-7890</p>
          <p>
            <a href="#!" className="text-white">Facebook</a> | 
            <a href="#!" className="text-white"> Twitter</a>
          </p>
          <p>© 2024 Hospital Management. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
