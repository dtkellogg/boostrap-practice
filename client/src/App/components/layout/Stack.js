// Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.

// Basically, they're a shortcut for a flexbox colum


import React from 'react'
// import { Stack } from 'react-bootstrap'


export default function Stack() {
  return (
    <div>
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Stack</h1>

      {/* <Stack gap={3}>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
      </Stack> */}
      
    </div>
  )
}
