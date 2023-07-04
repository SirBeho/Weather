'use client'
import SideBar from "@/components/SideBar/SideBar"
import Card from "@/components/Card/Card"

import { useEffect, useState } from "react"
import BCars from "@/components/Card/BCars";


export default function Home() {

    const [Data, setData] = useState([]);

    const getUsers = async () => {
      try {
        const res = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=18.35&lon=-71.58&appid=86494431ca9876c4d8464ba7fed2349a");
        const resJson = await res.json();
        setData(resJson);
        console.log(resJson);

      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, []);

    console.log(Data.daily);
    if(Data.length == 0){
        return (<h1>No hay datos</h1>);
    }
    
    return (
        <div className=" d-flex row min-vh-100 vw-100 m-0 text-white">
           <SideBar data={Data.daily[0]}/>
           <div className="col-sm-8 d-flex justify-content-center" style={{background:"#100e1d"}}>
            <div className="p-3" style={{ maxWidth:"700px"}}>
                <div className="d-flex mb-3 py-2 gap-2 justify-content-end">
                    <button className="rounded-circle" style={{width:"2rem" ,height:"2rem"}}>C</button>
                    <button className="rounded-circle" style={{width:"2rem" ,height:"2rem"}}>F</button>
                </div>
                <div className="d-flex gap-4 my-5 justify-content-center flex-wrap" >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="p-2">
                    <span className="fs-4 fw-semibold">Today&apos;s Hightlights</span>
                    <BCars data={Data.daily[0]}/>
                </div>
                <footer>
                    <span>Create by Benjamin</span>
                </footer>
            </div>    
            </div>
        </div>
    )
} 