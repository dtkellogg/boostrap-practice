import React, { useState, useRef } from 'react'
import { Container, Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap'


export default function Tooltips() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Tooltips</h1>
      <Container fluid className="100vw d-flex justify-content-center">


        {/* Two different ways */}

        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>

        

        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary">Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}

        {/* Or you can hover over text (Need to come back and figure this out as the docs don't show how) */}
      </Container>
    </div>
  )
}
