import React, { useState, useEffect } from "react";
import Div from "../canvas2d/div";
import { Link, Outlet } from "react-router-dom";
import { getMeetings } from "../../providers/apiMeeting";

const Schedule = ({  }) => {
  const [selectedDate, setSelectedDate] = useState("Thu Jun 23");
  const [forums, setForums] = useState([]);
  const [talks, setTalks] = useState([]);
  const [dates, setDates] = useState([
    { dayName:"Jue", day: "23 de junio", simpleDate: "Thu Jun 23" }, 
    { dayName:"Vir", day: "24 de junio", simpleDate: "Fri Jun 24" }
  ]);

  const onSelectDevice = (element) => {
    setSelectedDate(element);
  }
  
  const getHour = (meetingTime) => {
    let fechaHora = new Date();
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();

    var hora1 = (horas+':'+minutos).split(":"),
    hora2 = meetingTime.split(":"),
    t1 = new Date(),
    t2 = new Date();
 
    t1.setHours(hora1[0], hora1[1]);
    t2.setHours(hora2[0], hora2[1]);

    t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes());
    
    let final = (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? " y " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "");

    return `Comienza en ${final}`;
  }

  useEffect(() => {
      let forum = [];
      let talk = [];
      getMeetings()
        .then((data) => data.json())
          .then((response) => {
            response.map((element) => {
              if(element.type === "forum"){
                element.date = element.date.split("T")[0];
                forum.push(element);
              }else{
                element.date = element.date.split("T")[0];
                talk.push(element);
              }
            })
            setForums(forum);
            setTalks(talk);
          });
  },[])
  
  /*useEffect(() => {
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const weekdays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vir', 'Sab'];
    let curr = new Date;
    let week = []
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i 
      let day = new Date(curr.setDate(first)).toDateString().slice(0, 10);
      let dayName = weekdays[curr.getDay()];
      let day2 = ' ' + curr.getDate() + ' de ' + months[curr.getMonth()];
      week.push({
        dayName : dayName,
        day : day2,
        simpleDate: day
      })
    }
    setDates(week);
  },[])*/

  return (
    <>
      <Div
        className=" poppins-medium text-white"
        width={1500}
        height={62}
        positionY={0}
        positionX={0}
      >
        <div className="h-full">
            <div className="d-flex">
                {dates ? ( 
                    dates?.map((element, i) => {
                        return( 
                            <div onClick={() => onSelectDevice(element.simpleDate)} key={i} 
                                className={`col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center ${element.simpleDate == selectedDate ? "primary-bg":""}`}>
                                <span className="align-middle poppins-bold my-auto fs-6 py-3">
                                   {element.dayName} <span className="poppins-light">{element.day}</span>
                                </span>
                            </div>
                        )})
                        
                        
                ):
                    <p>No meetings</p>
                }
                                
            </div>
            <Div
              className="h-full poppins-medium text-white"
              width={1500}
              height={80}
              positionY={45}
            >
              <div className="row g-4 gap-4 my-3 mx-auto my-auto h-full">
                <div className="col h-full">
                  <span className="fs-1 poppins-medium ms-2">Foros</span>
                </div>
                <div className="col h-full">
                  <span className="fs-1 poppins-medium ms-2">Conferencias</span>
                </div>
              </div>
            </Div>
            <Div
              className="h-full poppins-medium text-white"
              width={1500}
              height={445}
              positionY={105}
            >
              <div className="row g-4 gap-4 my-3 mx-auto my-auto h-full">
                <div className="col h-full">
                  <div className="row my-3 mx-auto my-auto custom-calendar-scroll h-full">
                    {forums ? ( 
                        forums?.map((element, i) => {
                            return(
                              (element.date.split("-")[2] === selectedDate.split(" ")[2]) &&
                                <div className="col me-3" key={i}>
                                    <div className="text-white primary-bg dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                                        <div className="text-truncate row col-9">
                                            <div className="poppins-medium fs-4 py-1">Conferencia: {element.name} 2021</div>
                                                <span className="fs-6 py-1">Expositor: {element.exhibitor}</span>
                                                <span className="fs-6 py-1">Hora: {element.hour} p.m</span>
                                            </div>
                                            <Link to={`/conference/${element.id}`} className="align-self-center" style={{ textDecoration: 'none' }}>
                                              <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill bg-body 
                                              text-black py-3 px-5 text-center border-0">Unirse</div>
                                            </Link>
                                    </div>
                                </div>
                            )
                        })
                    )
                        :
                        <p>No meetings</p>
                    }
                  </div>
                </div>
                <div className="col h-full">
                  <div className="row my-3 mx-auto my-auto custom-calendar-scroll h-full">
                    {talks ? ( 
                        talks?.map((element, i) => {
                            return(
                              (element.date.split("-")[2] === selectedDate.split(" ")[2]) &&
                                <div className="col me-3" key={i}>
                                    <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                                        <div className="text-truncate row col-9">
                                            <div className="poppins-medium fs-4 py-1">Conferencia: {element.name} 2021</div>
                                            <span className="fs-6 py-1">Expositor: {element.exhibitor}</span>
                                            <span className="fs-6 py-1">Hora: {element.hour} p.m</span>
                                        </div>
                                        <Link to={`/conference/${element.id}`} className="align-self-center" style={{ textDecoration: 'none' }}>
                                          <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                                          text-white py-3 px-5 text-center">Unirse</div>
                                        </Link>
                                    </div>
                                </div>
                    
                        )})
                    )
                        :
                        <p>No meetings</p>
                    }
                  </div>
                </div>
              </div>
            </Div>

        </div>
      </Div>
      <Outlet />
    </>
  );
};
export default Schedule;