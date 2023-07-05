import Bcard from "@/components/Card/Bcard"
import Bar from "@/components/Card/Bar"
import Wind from "@/components/Card/Wind"
import React from 'react'

export default function BCards({data,medida}) {
    console.log(data)
  return (
    <div className="row gap-3 p-3 justify-content-center justify-content-md-between ">
        <Bcard titulo={"Wind Status"} valor={data.wind_speed} uniValor={medida=="metric" ? "mps" : "mph"}><Wind degree={data.wind_deg}/></Bcard>
        <Bcard titulo={"Humidity"} valor={data.humidity} uniValor={"%"}><Bar percent={data.humidity}/></Bcard>
        <Bcard titulo={"Visibility"} valor={medida=="metric" ? data.visibility/1000 : (data.visibility/1609).toFixed(1) } uniValor={medida=="metric" ? " km" : " milles"}></Bcard>
        <Bcard titulo={"Air Presure"} valor={data.pressure} uniValor={"mb"}></Bcard> 
            
    </div>  
  )
}
