// Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.

import React from 'react'


export default function Colors() {
  return (
    <div className="100vw d-flex flex-column justify-content-center">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Colors</h1>

      <p class="text-primary">.text-primary</p>
      <p class="text-secondary">.text-secondary</p>
      <p class="text-success">.text-success</p>
      <p class="text-danger">.text-danger</p>
      <p class="text-warning bg-dark">.text-warning</p>
      <p class="text-info bg-dark">.text-info</p>
      <p class="text-light bg-dark">.text-light</p>
      <p class="text-dark">.text-dark</p>
      <p class="text-body">.text-body</p>
      <p class="text-muted">.text-muted</p>
      <p class="text-white bg-dark">.text-white</p>
      <p class="text-black-50">.text-black-50</p>
      <p class="text-white-50 bg-dark">.text-white-50</p>
    </div>
  )
}