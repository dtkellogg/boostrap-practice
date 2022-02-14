// Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.

import React from 'react'

export default function Position() {
  return (
    <div className="vw-100 vh-100">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Position</h1>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Values</h2>
      <div className="position-static">...</div>
      <div className="position-relative">...</div>
      <div className="position-absolute">...</div>
      <div className="position-fixed">...</div>
      <div className="position-sticky">...</div>

      <h2 className="mx-auto my-5" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Arrange Elements</h2>
      <div className="position-relative ">
        <div className="position-absolute top-0 start-0">X</div>
        <div className="position-absolute top-0 end-0">X</div>
        <div className="position-absolute top-50 start-50">X</div>
        <div className="position-absolute bottom-50 end-50">X</div>
        <div className="position-absolute bottom-0 start-0">X</div>
        <div className="position-absolute bottom-0 end-0">X</div>
      </div>

      <h2 className="mx-auto my-5" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Center Elements</h2>
      <div className="position-relative">
        <div className="position-absolute top-0 start-0 translate-middle">X</div>
        <div className="position-absolute top-0 start-50 translate-middle">X</div>
        <div className="position-absolute top-0 start-100 translate-middle">X</div>
        <div className="position-absolute top-50 start-0 translate-middle">X</div>
        <div className="position-absolute top-50 start-50 translate-middle">X</div>
        <div className="position-absolute top-50 start-100 translate-middle">X</div>
        <div className="position-absolute top-100 start-0 translate-middle">X</div>
        <div className="position-absolute top-100 start-50 translate-middle">X</div>
        <div className="position-absolute top-100 start-100 translate-middle">X</div>
      </div>

      <div className="position-relative">
        <div className="position-absolute top-0 start-0">X</div>
        <div className="position-absolute top-0 start-50 translate-middle-x">X</div>
        <div className="position-absolute top-0 end-0">X</div>
        <div className="position-absolute top-50 start-0 translate-middle-y">X</div>
        <div className="position-absolute top-50 start-50 translate-middle">X</div>
        <div className="position-absolute top-50 end-0 translate-middle-y">X</div>
        <div className="position-absolute bottom-0 start-0">X</div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x">X</div>
        <div className="position-absolute bottom-0 end-0">X</div>
      </div>

    </div>
  )
}
