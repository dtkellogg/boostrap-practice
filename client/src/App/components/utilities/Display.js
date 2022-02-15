// Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

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

      <h1>Hiding elements</h1>:
      <p>To hide elements simply use the .d-none class or one of the .d-sm,md,lg,xl,xxl-none classes for any responsive screen // variation.

      To show an element only on a given interval of screen sizes you can combine one .d-*-none class with a .d-*-* class, for example .d-none .d-md-block .d-xl-none .d-xxl-none will hide the element for all screen sizes except on medium and large devices.
      </p>


      <h1>Dispaly on Print:</h1>

      <div class="d-print-none">Screen Only (Hide on print only)</div>
      <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
      <div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>

    </div>
  )
}