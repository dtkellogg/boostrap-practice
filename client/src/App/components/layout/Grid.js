import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function Grid() {
  return (
    <div>
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Grid</h1>
      <h1>Responsive Grids</h1>
      <Container className='bg-primary'>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  )
}
