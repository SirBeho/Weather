import React from 'react'
import Image from "next/image";

export default function Loading({activo}) {
  return (
    <div className={`sideBar ${activo ? "activa" : ""
                    } d-flex vh-100  flex-column justify-content-center align-items-center`}
                style={{ background: "#33495f", zIndex: "2", position: "absolute" }}
            >
                <div className="col-12 col-sm-6" >
                    <Image
                        src="/fondo.gif"
                        alt="tiempo"
                        width={"1200"}
                        height={"1200"}
                        layout="responsive"
                    />
                </div>
                <div className='col-4 col-sm-2'>
                    <Image
                        src="/loading-12.gif"
                        alt="tiempo"
                        width={"1200"}
                        height={"1200"}
                        layout="responsive"
                    />
                </div>
            </div>
  )
}
