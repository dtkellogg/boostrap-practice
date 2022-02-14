import React from 'react'
import { Spinner } from 'react-bootstrap'


export default function Spinners() {
  return (
    <div className="h-100" >
      <h1 className="mx-auto mt-2" style={{"width": "100px"}}>Spinners</h1>
      <div className="h-100 mt-5">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" size="sm" />
        <Spinner animation="border" variant="danger" size="lg" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  )
}