import React from 'react'
import Arrow from './Arrow'

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
        <Arrow degree={degree}/>
       <div>{direccion(degree)}</div>
    </div>
  )
}
