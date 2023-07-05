import { useEffect, useState } from "react";
import React from 'react'

export default function SearchPais({fun}) {
    const [Data, setData] = useState([]);
    const [filtrado,setFiltrado] = useState([]);
    const [localValue, setLocalValue] = useState("");
  
    // Optencion de los datos
    const getData = async () => {
      try {
        const res = await fetch("Paises.json");
        const resJson = await res.json();
        setData(resJson);
        // setFiltrado(resJson);  
        console.log(resJson);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
     }, []);
    
    function filterList(nombre) {
        if(!nombre){
            setFiltrado([]);
            return;
        }
            
      const STARTS = [];
      const CONTAINS = [];
    
      Data.forEach((dato) => {
        const nombreLowerCase = dato.nombre.toLowerCase();
        if (nombreLowerCase.startsWith(nombre.toLowerCase())) {
          STARTS.push(dato);
        } else if (nombreLowerCase.includes(nombre.toLowerCase())) {
          CONTAINS.push(dato);
        }
      });
    
      const FILTERED = [...STARTS, ...CONTAINS];
      setFiltrado(FILTERED);
    }
    
    const handleChange = (event,abr) => {
      console.log("click")
      fun(abr);
      setLocalValue(event.target.textContent);
    };

    const handleInputChange = (event) => {
      console.log(event.target.textContent)
      setLocalValue(event.target.value);
    };
  
    useEffect(() => {
      filterList(localValue)
    }, [localValue]);
  
    let hoy = new Date();
    let fecha = `${hoy.toLocaleString('en-US', { weekday: 'short' })}, ${hoy.getDate()} ${hoy.toLocaleString('en-US', { month: 'short' })}`;
  
    
    return(
      <>
        <section className="Pais">
        <label className="w-100 rounded-4 py-2 px-4 active" htmlFor="location">Pais
          <input  placeholder="Escriba una pais" value={localValue} onChange={handleInputChange} type="text" className="outline-none border border-0 ms-2 " style={{outline : "none"}} />
        </label>
          
          
          {filtrado.map((dato, index) => {
            if(index > 10) return null;
          return (
              <div key={index} className="pe-auto d-flex m-3 ">
                  {/* <span className="pe-auto material-symbols-outlined ">search</span> */}
              <a className="pe-auto text-white link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={(e) => handleChange(e,dato.abr)} >{dato.nombre}</a>
          </div>
          )})}
        </section>
  
  
  
      </>
    )
}
