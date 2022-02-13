import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Btns() {
  return (
    <Container fluid className="h-100">
      <h1 className="mx-auto mt-5" style={{"width": "250px"}}>Predefined Btns</h1>  {/* mx-auto needs width specified */}
      <Row className="mx-3">
        <Button className="btn" size="lg" href="#">btn</Button>
      </Row>
      <Row className="p-4">
        <Button variant="primary" as={Col}>primary</Button>
        <Button variant="secondary" as={Col}>secondary</Button>
        <Button variant="success" as={Col}>success</Button>
        <Button variant="danger" as={Col}>danger</Button>
        <Button variant="link" as={Col}>link</Button>
      </Row>
      <Row className="mt-3 d-flex flex-column justify-content-start align-items-end">
        <Button variant="warning" as={Col}>warning</Button>
        <Button variant="info" as={Col}>info</Button>
        <Button variant="dark" as={Col}>dark</Button>
        <Button variant="light" as={Col}>light</Button>
      </Row>
      <h2 className="mx-auto mt-5" style={{"width": "200px"}}>Outline btns</h2>
      <Row className="p-4">
        <Button variant="outline-primary" as={Col} active>Primary</Button>
        <Button variant="outline-secondary" as={Col} disabled>secondary</Button>
        <Button variant="outline-success" as={Col}>success</Button>
        <Button variant="outline-danger" as={Col}>danger</Button>
        <Button variant="outline-link" as={Col}>link</Button>
      </Row>
      <Row className="mt-3">
        <Button variant="outline-warning" as={Col}>warning</Button>
        <Button variant="outline-info" as={Col}>info</Button>
        <Button variant="outline-dark" as={Col}>dark</Button>
        <Button variant="outline-light" as={Col} size="sm">light</Button>
      </Row>
    </Container>
  )
}

// margin's