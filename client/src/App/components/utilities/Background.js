// Convey meaning through background-color and add decoration with gradients.


import React from 'react'


export default function Background() {
  return (
    <div className="100vw d-flex flex-column justify-content-center">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Background</h1>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Colors</h2>
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
        <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div className="p-3 mb-2 bg-body text-dark">.bg-body</div>
        <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
        <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Gradients</h2>
      <div class="p-3 mb-2 bg-primary text-white bg-gradient">.bg-primary</div>
      <div class="p-3 mb-2 bg-secondary text-white bg-gradient">.bg-secondary</div>
      <div class="p-3 mb-2 bg-success text-white bg-gradient">.bg-success</div>
      <div class="p-3 mb-2 bg-danger text-white bg-gradient">.bg-danger</div>
      <div class="p-3 mb-2 bg-warning text-dark bg-gradient">.bg-warning</div>
      <div class="p-3 mb-2 bg-info text-dark bg-gradient">.bg-info</div>
      <div class="p-3 mb-2 bg-light text-dark bg-gradient">.bg-light</div>
      <div class="p-3 mb-2 bg-dark text-white bg-gradient">.bg-dark</div>
      <div class="p-3 mb-2 bg-body text-dark bg-gradient">.bg-body</div>
      <div class="p-3 mb-2 bg-white text-dark bg-gradient">.bg-white</div>
      <div class="p-3 mb-2 bg-transparent text-dark bg-gradient">.bg-transparent</div>

    </div>
  )
}