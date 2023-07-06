import React from 'react';
import Image from "next/image";

export default function Loading({ activo }) {
    return (
        <div className={`sideBar ${activo ? "activa" : ""} d-flex vh-100 fixed-top flex-column  align-items-center`} style={{ background: "#33495f", zIndex: "2"}}>
            <div className="w-100 h-50">
                <Image className="h-100" style={{objectFit:"contain"}} src="/fondo.gif" alt="tiempo" width={"1200"} height={"1200"} layout="responsive" />
            </div>
            <div className='w-25' style={{height:"15%"}}>
                <Image className="h-100"  style={{objectFit:"contain"}} src="/loading-12.gif" alt="tiempo" width={"1200"} height={"1200"} layout="responsive" />
            </div>
        </div>
    );
}
