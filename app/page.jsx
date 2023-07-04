import SideBar from "@/components/SideBar/SideBar"
import Card from "@/components/Card/Card"
import Bcard from "@/components/Card/Bcard"
import Bar from "@/components/Card/Bar"
import Wind from "@/components/Card/Wind"


export default function Home() {
    return (
        <div className=" d-flex row min-vh-100 vw-100 m-0 text-white">
           <SideBar/>
           <div className="col-sm-8 d-flex justify-content-center" style={{background:"#100e1d"}}>
            <div className="p-3" style={{ maxWidth:"700px"}}>
                <div className="d-flex mb-3 py-2 gap-2 justify-content-end">
                    botones
                    botones
                </div>
                <div className="d-flex gap-4 my-5 justify-content-center flex-wrap" >
                    cartas
                    cartas
                    cartas
                    cartas
                </div>
                <div className="p-2">
                    <span className="fs-4 fw-semibold">Today&apos;s Hightlights</span>
                    <div className="row gap-3 p-3 justify-content-center justify-content-md-between ">
                        bigcartas
                        bigcartas
                        bigcartas
                        bigcartas
                    </div>
                </div>
                <footer>
                    <span>Create by Benjamin</span>
                </footer>
            </div>    
            </div>
        </div>
    )
} 