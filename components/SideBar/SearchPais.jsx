import { useEffect, useState } from "react";
import React from 'react'

export default function SearchPais({fun,active}) {
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
    
    const inputClick = (event,abr) => {
      console.log("click",abr)
      fun(abr);
      setFiltrado([]);
      setLocalValue(event.target.textContent);
    };

    const InputChange = (event) => {
      fun("");
      console.log(event.target.value)
      setLocalValue(event.target.value);
      filterList(event.target.value)
    };

    const search = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 -960 960 960"
        fill="#616475"
        width="30"
      >
        <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
      </svg>
    );
    
    if(!active){
      return null
    }
      
    return(
      
     <div className="mt-2 " >
            <label className=" border border-light p-2 w-75 active" htmlFor="location" >
            {search}
            <input
              placeholder="Filtro por pais"
              value={localValue}
              onChange={InputChange}
              type="text"
              className="outline-none text-white-50 bg-transparent border border-0 ms-2 "
              style={{ outline: "none" }}
            />
            
          </label>

          
  
          {filtrado.map((dato, index) => {
            if(index > 10) return null;
          return (
              <div key={index} className="pe-auto d-flex m-3 ">
                  {/* <span className="pe-auto material-symbols-outlined ">search</span> */}
              <a className="pe-auto text-white link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={(e) => inputClick(e,dato.abrev)} >{dato.nombre}</a>
          </div>
          )})}
    </div>
  
  
  
    
    )
}
