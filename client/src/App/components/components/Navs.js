import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function Navs() {
  return (
    <div className="h-100" >
      <h1 className="mx-auto" style={{"width": "100px"}}>Navs</h1>
      <Navbar className="" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Toshi's Navs</Navbar.Brand>
          <Navbar.Toggle aria-controls="bootstrap nav practice nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="mt-5" bg="warning" variant="warning">
        <Container className="d-flex justify-content-space-between">
          <Navbar.Brand>Toshi's Navs</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="bootstrap nav practice nav" /> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
