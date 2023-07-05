import React from "react";
import { useEffect, useState } from "react";

export default function SearchCiudad({ pais, setCoord }) {
  const [Data, setData] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [localValue, setLocalValue] = useState("");

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

  const handleChange = (event,coord) => {
    console.log("click",coord);
    setCoord(coord);
    setFiltrado([]);
    setLocalValue(event.target.textContent);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setLocalValue(event.target.value);
    filterList(event.target.value);
  };

  return (
    <section className="Pais">
      <label className="w-100 rounded-4 py-2 px-4 active" htmlFor="location">
        Ciudad
        <input
          placeholder="Escriba una ciudad"
          value={localValue}
          onChange={handleInputChange}
          type="text"
          className="outline-none border border-0 ms-2 "
          style={{ outline: "none" }}
        />
        {pais =="" ?  null : " , "+pais}
      </label>

      {filtrado.map((dato, index) => {
        if (index > 10) return null;
        return (
          <div key={index} className="pe-auto d-flex m-3 ">
            {/* <span className="pe-auto material-symbols-outlined ">search</span> */}
            <a
              className="pe-auto text-white link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              onClick={(e) => handleChange(e,dato.city.coord)}
            >
              {dato.city.name}{pais =="" ? " , "+dato.city.country : null}
            </a>
          </div>
        );
      })}
    </section>
  );
}
