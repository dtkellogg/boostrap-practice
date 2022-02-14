// The classes are named using the format:
// .d-{value} for xs
// .d-{breakpoint}-{value} for sm, md, lg, xl, and xxl.

// Where value is one of:
// none
// inline
// inline-block
// block
// grid
// table
// table-cell
// table-row
// flex
// inline-flex


import React from 'react'


export default function Display() {
  return (
    <div className="100vw d-flex flex-column justify-content-center">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Display</h1>

      
    </div>
  )
}