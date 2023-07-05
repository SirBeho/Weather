import React from "react";
import { useEffect, useState } from "react";

export default function SearchCiudad({ pais, setCoord, setCiudad ,setsearchPais,searchPais,setsearch }) {
  const [Data, setData] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [localValue, setLocalValue] = useState("");
  const [coord_, setCoord_] = useState([]);
  const [ciudad_, setCiudad_] = useState("");
  const [disabled, setDisabled] = useState(true);
 

  const getData = async () => {
    try {
      const res = await fetch("Ciudades.json");
      const resJson = await res.json();
      setData(resJson);
      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterList(localValue);
    setLocalValue("");
  }, [pais]);

  function filterList(nombre) {
    if (!nombre) {
      setFiltrado([]);
      return;
    }

    const STARTS = [];
    const CONTAINS = [];

    Data.forEach((dato) => {
      const nombreLowerCase = dato.city.name.toLowerCase();
      if (dato.city.country == pais || pais == "") {
        if (nombreLowerCase.startsWith(nombre.toLowerCase())) {
          STARTS.push(dato);
        } else if (nombreLowerCase.includes(nombre.toLowerCase())) {
          CONTAINS.push(dato);
        }
      }
    });

    const FILTERED = [...STARTS, ...CONTAINS];
    setFiltrado(FILTERED);
  }

  const inputClick = ( city) => {
    setCoord_(city.coord);
    setCiudad_(city.name+" , "+city.country);
    setDisabled(false);
    setFiltrado([]);
    setLocalValue(city.name+" , "+city.country);
  };

  const buscar = () => {
    setsearch(false);
    setCoord(coord_);
    setCiudad(ciudad_);
    setLocalValue("");
  };



  const InputChange = (event) => {
    setLocalValue(event.target.value);
    filterList(event.target.value);
    setDisabled(true);
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
  const paisActive = (
    <span className={"d-flex align-items-center cursor"} style={{height:"30px", width:"30px"}} >
      {pais == "" ? 
      (<svg onClick={() => setsearchPais(!searchPais)} className="mundo" xmlns="http://www.w3.org/2000/svg"  height="30" viewBox="0 -960 960 960" width="30"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-43-61v-82q-35 0-59-26t-24-61v-44L149-559q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437-141Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607-799v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393-568h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z"/></svg>) 
      : 
      (<span >{pais}</span>)}
    </span>
  );

  return (
    <section>
      <div className="d-flex gap-2 px-1 justify-content-center">
        <label className=" border border-light p-1 d-flex active" htmlFor="location">
          {search}
          <input
            placeholder="Escriba una ciudad"
            value={localValue}
            onChange={InputChange}
            type="text"
            className="outline-none text-white-50  w-100 bg-transparent border border-0 ms-2 "
            style={{ outline: "none" }}
          />
          {paisActive}
          
        </label>
        <button onClick={buscar}type="button" className="btn rounded-0 btn-primary" disabled={disabled}>Search</button>
      </div>
      <div className="px-2">
      {filtrado.map((dato, index) => {
        if (index > 10) return null;
        return (
          <div key={index} onClick={() => inputClick( dato.city)} className=" d-flex cursor justify-content-between m-3 p-2 border  border-light border-opacity-50">
            <span className="pe-auto text-white ">
              {dato.city.name}
              {pais == "" ? " , " + dato.city.country : null}
            </span>
            <span>&gt;</span>
          </div>
        );
      })}
      </div>
    </section>
  );
}
