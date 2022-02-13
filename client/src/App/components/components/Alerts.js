import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'


export default function Alerts() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Alerts</h1>
      {
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))
      }

      {show && (
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant} dismissible onClose={() => setShow(false)}>
            This is a {variant} alert—check it out!
          </Alert>
        ))
      )}
    </div>
  )
}