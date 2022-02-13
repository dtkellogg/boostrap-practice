import React from 'react'
import { Dropdown, DropdownButton, SplitButton } from 'react-bootstrap'


export default function Dropdowns() {
  return (
    <div>
      <h1 className="mx-auto" style={{"height": "200px"}}>Dropdowns</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success">Dropdown Button</Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#">Num 1</Dropdown.Item>
          <Dropdown.Item href="#">Num 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* An easier pattern to adding title with DropdownButton (instead of Toggle and Menu): */}

      <Dropdown className="my-3">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button" variant="info" size="lg" align="end">
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Dropdown>

      {
        <div>
          {['up', 'down', 'start', 'end'].map((direction) => (
            <SplitButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={`Drop ${direction}`}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
          ))}
        </div>
      }

      {
        <Dropdown className="my-3">
          <Dropdown.Toggle variant="success">Dropdown Button</Dropdown.Toggle>
          <Dropdown.Menu show>
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }

    </div>
  )
}
