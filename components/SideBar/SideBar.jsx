import { useEffect, useState } from "react";
import React from 'react'
import Image from "next/image"
import SearchPais from "./SearchPais";
import SearchCiudad from "./SearchCiudad";




export default function SideBar({data,medida,setCoord}) {

  const [Data, setData] = useState([]);
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [search, setsearch] = useState(false);

  let hoy = new Date();
  let fecha = `${hoy.toLocaleString('en-US', { weekday: 'short' })}, ${hoy.getDate()} ${hoy.toLocaleString('en-US', { month: 'short' })}`;
  

  const getData = async () => {
    try {
      const res = await fetch("Ciudades.json");
      const resJson = await res.json();
      setData(resJson);
      // console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const funcionInit = () => {
    const calculateFlatDistance = (lat1, lon1, lat2, lon2) => Math.sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2);
      
    const onUbicacionConcedida = (ubicacion) => {
      let minDistance = Number.MAX_VALUE;
      let coord = null;
  
      for (const dato of Data) {
        
        const distance = calculateFlatDistance(
          ubicacion.coords.latitude,
          ubicacion.coords.longitude,
          dato.city.coord.lat,
          dato.city.coord.lon
        );
  
        if (distance < minDistance) {
          minDistance = distance;
          console.log("nueva ciudad cercana",dato.city.name,distance)
          coord = dato.city.coord;
        }
      }
  
      setCoord(coord);
    };
  
    navigator.geolocation.getCurrentPosition(onUbicacionConcedida);
  };
  const equis = (
    <div className="btn btn-link btn-outline-light p-0" onClick={() => setsearch(!search)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-x" viewBox="0 0 16 16" > <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg> 
    </div>
  );
  const iconTarg = (
  <svg onClick={funcionInit} xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="white" viewBox="0 -960 960 960">
   <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Z" /></svg>
  );


  if(search)
  return(
    <div className="sideBar col-sm-4 d-flex px-0 py-1 flex-column text-center min-vh-100" style={{background:"#1e213a"}}> 
      <div className="d-flex justify-content-end pe-3">{equis}</div>
      <SearchPais fun={setPais}/>
      <SearchCiudad pais={pais} setCoord={setCoord} setCiudad={setCiudad}/>
    </div>
  )
  
  return (
    <div className="sideBar col-sm-4 d-flex px-0 py-1 flex-column text-center" style={{background:"#1e213a"}}> 
            <div className='d-flex justify-content-between p-4'>
              <button className="btn btn-secondary rounded-0" onClick={() => setsearch(!search)} >Search for places</button>
              <div className="">{iconTarg}</div>
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
