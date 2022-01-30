import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header>
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Compumundohipermegared</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Computadoras</Nav.Link>
          <Nav.Link href="#features">Consolas</Nav.Link>
          <Nav.Link href="#pricing">Accesorios</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
      </header>
    )
}

export default NavBar;
