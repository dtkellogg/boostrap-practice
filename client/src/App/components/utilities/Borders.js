// Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.

import React from 'react'

export default function Borders() {
  return (
    <div className="bg-primary">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Borders</h1>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Border (additive && subtractive)</h2>
      <span className="border"></span>
      <span className="border-top"></span>
      <span className="border-end"></span>
      <span className="border-bottom"></span>
      <span className="border-start"></span>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Color</h2>
      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Width</h2>
      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Border Radius</h2>
      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Sizes</h2>
      
    </div>
  )
}
