import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import BSNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ name }) => {
  return (
    <BSNavbar data-testid="navbar" collapseOnSelect expand="sm" variant="custom" fixed="top">
      <Container>
      <BSNavbar.Brand as="h1">{name}</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={faBars} /></BSNavbar.Toggle>
      <BSNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <LinkContainer to='/'>
            <Nav.Link>Info</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/projects'>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/blog'>
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
        </Nav>
      </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

export default Navbar
