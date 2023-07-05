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
    
    const limpiar =() =>{
      fun("");
      setLocalValue("")
      setFiltrado([]);
    }

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
    const equis = (
      <div className="btn btn-link btn-outline-light  ms-auto p-0" onClick={limpiar} >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x" viewBox="0 0 16 16" > <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg> 
      </div>
    );
    
    if(!active){
      return null
    }
      
    return(
      
     <div className="mt-2 px-1  d-flex flex-column h-100 flex-wrap align-items-center" >
            <label style={{maxWidth:"344px"}}className=" border border-light d-flex p-1 w-100 active" htmlFor="location" >
            {search}
            <input
              placeholder="Filtro por pais"
              value={localValue}
              onChange={InputChange}
              type="text"
              className="outline-none text-white-50  w-100 bg-transparent border border-0 ms-2 "
              style={{ outline: "none" }}
            />
            {localValue == "" ? null : equis}
          </label>

          
          <div className="w-100 " style={{maxWidth:"344px"}} >
            {filtrado.map((dato, index) => {
              if(index > 10) return null;
            
              return (
                <div key={index}  className=" d-flex cursor justify-content-between m-3 p-1 border  border-light border-opacity-50">
                  <span className="pe-auto text-white " onClick={(e) => inputClick(e,dato.abrev)}>{dato.nombre}</span>
                </div>
              );
          })}

        </div>

    </div>
  
  
  
    
    )
}
