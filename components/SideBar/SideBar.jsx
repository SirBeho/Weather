import { useEffect, useState } from "react";
import React from 'react'
import Image from "next/image"
import SearchPais from "./SearchPais";
import SearchCiudad from "./SearchCiudad";


export default function SideBar({data,medida,setCoord}) {

  const [pais, setPais] = useState("");
 
  let hoy = new Date();
  let fecha = `${hoy.toLocaleString('en-US', { weekday: 'short' })}, ${hoy.getDate()} ${hoy.toLocaleString('en-US', { month: 'short' })}`;
  

  return(
    <div className="sideBar col-sm-4 d-flex px-0 py-1 flex-column text-center" style={{background:"#1e213a"}}> 
      <SearchPais fun={setPais}/>
      <SearchCiudad pais={pais} setCoord={setCoord}/>
    </div>
  )
  
  
  
  
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
            <div>
              <span className=''style={{fontSize:"120px"}}>{Math.round(data.temp.min)}</span>
              <span className='fs-1 text-secondary'>{medida=="metric" ? "°C" : "°F"}</span>
            </div>

            <span className='p-5 fs-2'>{data.weather[0].description}</span>
            <span className='p-4'>Today . {fecha }</span>
           <div className=''>
              <span>Helsinki</span>
           </div>
    </div>
  )
}
