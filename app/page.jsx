import SideBar from "@/components/SideBar/SideBar"
import Card from "@/components/Card/Card"
import Bcard from "@/components/Card/Bcard"
import Bar from "@/components/Card/Bar"
import Wind from "@/components/Card/Wind"


export default function Home() {
    return (
        <div className=" d-flex row min-vh-100 vw-100 text-white">
           <SideBar/>
           <div className="col-sm-8 d-flex justify-content-center" style={{background:"#100e1d"}}>
             
            </div>
        </div>
    )
} 