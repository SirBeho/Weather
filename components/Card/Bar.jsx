import React from 'react'

export default function Bar({percent}) {
  return (
    <div className='bar'>   
        <div className='d-flex justify-content-between'>
            <span>0</span>
            <span>50</span>
            <span>100</span>
        </div>
        <div className="progress " role="progressbar" aria-label="Example "  aria-valuemin="0" aria-valuemax="100" style={{height:"0.5rem",background:"white"}}>
            <div className="progress-bar" style={{width:percent+"%",background:"#ffec65"}}></div>
        </div> 
        <p className="text-end m-0">%</p>
    </div>
  )
}
