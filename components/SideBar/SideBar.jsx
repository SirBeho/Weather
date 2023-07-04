import React from 'react'
import Image from "next/image"

export default function SideBar() {
  return (
    <div className="sideBar col-sm-4 d-flex px-0 py-1 flex-column text-center" style={{background:"#1e213a"}}> 
            <div className='d-flex justify-content-between p-4'>
              <button>Search for places</button>
              <div>taget</div>
            </div>
            <div  className='d-flex align-items-center justify-content-center ' style={{ 
              backgroundImage: "linear-gradient(rgba(30, 33, 58, 0.9), rgba(30, 33, 58, 0.9)), url(/Cloud-background.png)",
              backgroundSize: "150%",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              padding: "10% 25%"
             }}>
                  <Image src="/Shower.png" alt="tiempos" width={"1200"} height={"1200"} layout="responsive" />
            </div>
            <span className='px-4 'style={{fontSize:"120px"}}>15 c</span>
            <span className='p-5 fs-2'>Shower</span>
            <span className='p-4'>Today . Fri. 5 Jun</span>
           <div className=''>
              
              <span>Helsinki</span>
           </div>
    </div>
  )
}
