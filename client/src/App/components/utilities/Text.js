import React from 'react'

export default function Text() {
  return (
    <div className="100vw d-flex flex-column justify-content-center">
      <h1 className="mx-auto mt-2" style={{"width": "min-content"}}>Text</h1>

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Alignment</h2>

      <p className="text-start">Start aligned text on all viewport sizes.</p>
      <p className="text-center">Center aligned text on all viewport sizes.</p>
      <p className="text-end">End aligned text on all viewport sizes.</p>

      <p className="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
      <p className="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
      <p className="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
      <p className="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Sizes</h2>

      <p className="fs-1">fs-1 text</p>
      <p className="fs-2">fs-2 text</p>
      <p className="fs-3">fs-3 text</p>
      <p className="fs-4">fs-4 text</p>
      <p className="fs-5">fs-5 text</p>
      <p className="fs-6">fs-6 text</p>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Word Breaks</h2>

      <p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
      

      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Wrapping</h2>

      <div className="badge bg-primary text-wrap" style={{"width": "6rem"}}>
        This text should wrap.
      </div>
      <div className="text-nowrap bd-highlight" style={{"width": "6rem"}}>
        This text should overflow the parent.
      </div>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Transforms</h2>

      <p className="text-lowercase">Lowercased text.</p>
      <p className="text-uppercase">Uppercased text.</p>
      <p className="text-capitalize">CapiTaliZed text.</p>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Weight and Italics</h2>

      <p className="fw-bold">Bold text.</p>
      <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
      <p className="fw-normal">Normal weight text.</p>
      <p className="fw-light">Light weight text.</p>
      <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
      <p className="fst-italic">Italic text.</p>
      <p className="fst-normal">Text with normal font style</p>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Line Height</h2>

      <p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p className="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p className="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>


      <h2 className="mx-auto mt-2" style={{"width": "max-content", "borderBottom": "1px solid black"}}>Text Decordation</h2>

      <p className="text-decoration-underline">This text has a line underneath it.</p>
      <p className="text-decoration-line-through">This text has a line going through it.</p>
      <a href="#" className="text-decoration-none">This link has its text decoration removed</a>

            
    </div>
  )
}
