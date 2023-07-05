import React from 'react'


export default function Wind({degree}) {

   
const direccion = (degree) => {
    const grados = {
        0: 'N',
        22.5: 'NNE',
        45: 'NE',
        67.5: 'ENE',
        90: 'E',
        112.5: 'ESE',
        135: 'SE',
        157.5: 'SSE',
        180: 'S',
        202.5: 'SSW',
        225: 'SW',
        247.5: 'WSW',
        270: 'W',
        292.5: 'WNW',
        315: 'NW',
        337.5: 'NNW',
      };
      return grados[Math.round(degree / 22.5) * 22.5] || 'N';
    }

  return (
    <div className='d-flex justify-content-center align-items-center gap-2'>
        
        <svg style={{ transform: `rotate(${degree}deg)` }}  className='rounded-circle bg-secondary p-1' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="m190-120-30-30 320-730 320 730-30 30-290-132-290 132" fill="#E7E7EB" />
        </svg>
       <div>{direccion(degree)}</div>
    </div>
  )
}
