import React from 'react'

export default function Arrow({degree}) {
  return (
    <svg style={{ transform: `rotate(${degree}deg)` }}  className='rounded-circle bg-secondary p-1' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
      <path d="m190-120-30-30 320-730 320 730-30 30-290-132-290 132" fill="#E7E7EB" />
    </svg>
  )
}
