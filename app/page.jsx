"use client";
import SideBar from "@/components/SideBar/SideBar";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import BCards from "@/components/Card/BCards";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const [Data, setData] = useState([]);
  const [coord, setCoord] = useState({ lat: "18.35", lon: -"71.58" });
  const [medida, setMedida] = useState("metric");

  const getUsers = async (url) => {
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      resJson.daily[0].visibility = resJson.current.visibility;
      setData(resJson.daily);
      console.log(resJson.daily);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers(
      `https://api.openweathermap.org/data/3.0/onecall?lat=18.35&lon=-71.58&units=metric&appid=86494431ca9876c4d8464ba7fed2349a`
    );
  }, []);

  useEffect(() => {
    getUsers(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${medida}&appid=86494431ca9876c4d8464ba7fed2349a`
    );
  }, [medida, coord]);

  return (
    <div className="d-flex row min-vh-100  min-vw-100 vw-100 m-0 text-white">
      <Loading activo={Data.length === 0} />
      {Data.length === 0 ? null : (
        <>
          <SideBar data={Data[0]} medida={medida} setCoord={setCoord} />
          <div
            className="col-sm-8 d-flex justify-content-center"
            style={{ background: "#100e1d" }}
          >
            <div className="p-3" style={{ maxWidth: "700px" }}>
              <div className="d-flex mb-3 py-2 gap-3 justify-content-end">
                <div
                  onClick={() => setMedida("metric")}
                  className={`btn ${
                    medida === "metric" ? "btn-light" : "btn-secondary"
                  } rounded-circle fw-semibold d-flex align-items-center justify-content-center`}
                  style={{ width: "2rem", height: "2rem" }}
                >
                  °C
                </div>
                <div
                  onClick={() => setMedida("imperial")}
                  className={`btn ${
                    medida === "imperial" ? "btn-light" : "btn-secondary"
                  } rounded-circle fw-semibold d-flex align-items-center justify-content-center`}
                  style={{ width: "2rem", height: "2rem" }}
                >
                  °F
                </div>
              </div>
              <div className="d-flex gap-4 my-5 justify-content-center flex-wrap">
                {Data.slice(1, 6).map((dato, index) => (
                  <Card
                    key={index}
                    id={index + 1}
                    dato={dato}
                    medida={medida}
                  />
                ))}
              </div>
              <div className="p-2">
                <span className="fs-4 fw-semibold">Today's Highlights</span>
                <BCards data={Data[0]} medida={medida} />
              </div>
              <section className="text-center mt-5">
                <h3 className="fs-6 text-secondary">
                  created by <b>Benjamin Tavarez</b> - de devChallenges.io
                </h3>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
