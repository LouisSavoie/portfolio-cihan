import React from 'react'
import Container from 'react-bootstrap/Container'
import BSNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
  return (
    <BSNavbar data-testid="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
      <Container>
      <BSNavbar.Brand>Placeholder</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BSNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#info">Info</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar
