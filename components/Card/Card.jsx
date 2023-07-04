import Image from "next/image"
export default function Card() {
 
  return (
        <div className="p-3 text-center" style={{ backgroundColor: "#1e213a",width:"7rem"}} >
            <span>Tomorrow</span>
            <div className="p-3">
              <Image src="/Shower.png" alt="tiempo" width={"1200"} height={"1200"} layout="responsive" />
            </div>
            <div className="d-flex justify-content-between">  
              <span>16*C</span>
              <span>11*C</span>
            </div>
        </div>


  );
}
