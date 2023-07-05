import Image from "next/image"
export default function Card({dato,id,medida}) {


  let hoy = new Date();
 
  hoy.setDate(hoy.getDate() + id);
  let fecha = `${hoy.toLocaleString('en-US', { weekday: 'short' })}, ${hoy.getDate()} ${hoy.toLocaleString('en-US', { month: 'short' })}`;
  

 console.log(id,dato)
  return (
        <div className="p-3 text-center" style={{ backgroundColor: "#1e213a",width:"7rem"}} >
            <span style={{ fontSize: "15px"}}>{id== 1? "Tomorrow" : fecha}</span>
            
            <div className="p-3">
               
              <Image src={`/${dato.weather[0].icon.replace("n", "d")}.png`} alt="tiempo" width={"1200"} height={"1200"} layout="responsive" />
            </div>
            <div className="d-flex justify-content-between">  
              <span>{Math.round(dato.temp.min)}{medida=="metric" ? "°C" : "°F"}</span>
              <span>{Math.round(dato.temp.max)}{medida=="metric" ? "°C" : "°F"}</span>
            </div>
        </div>
  );
}
