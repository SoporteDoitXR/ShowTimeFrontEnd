/*
  PAGINA PRINCIPAL DE SALA MEETING.
  SU FUNCION ES LA DE MOSTRAR LA LISTA DE CONFERENCIAS EN UNA VISTA DINAMICA POR HORAS
  
  ESTA PAGINA HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT

  TEMPORALMENTE HACE USO DE ESTADOS/STATES PARA DESPLEGAR MODAL DE CREACION DE CONFERENCIAS


  ------NOTA IMPORTANTE-------
  - SE ESTA TRABAJANDO EN ESTATICO, LA SECCION DE LISTA DE CONFERENCIAS ES SOLO UNA IMAGEN, ES DECIR, NO SE HA CREADO
*/

import React, { useState } from "react";
import Scene from "../components/canvas2d/scene";
import Div from "../components/canvas2d/div";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import placeHolder from "../assets/UI/placeholder_Conferencias.png";
import Button from "../components/UI/Button";
import { Outlet, useLocation } from "react-router-dom";
import IndexMiniModal from "../components/miniModal";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSlideshow2Fill,
} from "react-icons/ri";
import { IoAlarmSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const createMeeting = ({userMode}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Scene
      className={"bg-black"}
      aspect="ratio16-9"
      bgColor="#000"
      bgImage={plantilla1}
    >
      <Div
        className="bg-dark-transparent "
        width={1600}
        height={955}
        positionY={100}
        positionX={160}
      />
      <Div
        className="poppins-medium text-white d-flex flex-column justify-content-between"
        width={1500}
        height={150}
        positionY={150}
        positionX={220}
      >
        {userMode ?
          <div className="d-flex fs-2">
            Ingreso a salas
          </div>
          :
          <>
            <div className="d-flex ms-3 fs-2">
              <RiSlideshow2Fill className="fs-1 my-auto me-3" />
              Conferencias
            </div>
            <div className="d-flex justify-content-end">
              <Button
                className="btn light-bg text-white px-5 py-3 me-3 poppins-bold "
                size="small"
                text="Nueva conferencia"
                onClick={() => setShowModal(true)}
              />
            </div>
          </>
        }
      </Div>

      <Div
        className=" poppins-medium text-white"
        width={1500}
        height={600}
        positionY={240}
        positionX={220}
      >
        <div className="h-full">


          <div className="d-flex">
            {/*<Button
              className="btn btn-dark poppins-bold text-white fs-1"
              size="small"
              rounded="semi"
              icon={RiArrowLeftSLine}
              />*/}

            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6 py-3">
                Dom<span className="poppins-light"> 13 de junio</span>
              </span>
            </div>
            <div className="col text-white primary-bg rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Lun<span className="poppins-light"> 14 de junio</span>
              </span>
            </div>
            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Mar<span className="poppins-light"> 15 de junio</span>
              </span>
            </div>
            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Mie<span className="poppins-light"> 16 de junio</span>
              </span>
            </div>
            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Jue<span className="poppins-light"> 17 de junio</span>
              </span>
            </div>
            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Vir<span className="poppins-light"> 17 de junio</span>
              </span>
            </div>
            <div className="col text-white dark-bg-1 rounded-2xl mx-3 text-center d-flex justify-content-center">
              <span className="align-middle poppins-bold my-auto fs-6">
                Sab<span className="poppins-light"> 17 de junio</span>
              </span>
            </div>

            {/*<Button
              className="btn btn-dark poppins-bold text-white fs-1"
              size="small"
              rounded="semi"
              icon={RiArrowRightSLine}
            />*/}
          </div>
            <Div
              className=" poppins-medium text-white"
              width={1500}
              height={600}
              positionY={70}
              positionX={-5}
            >
              <div className="row g-4 my-3 mx-auto my-auto h-full">

                <div className="col h-full">
                  <span className="fs-1 poppins-medium ms-2">Foros</span>
                  <div className="row my-3 mx-auto my-auto custom-calendar-scroll h-full">
                    <div class="col">
                      <div className="text-white primary-bg dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill bg-body 
                          text-black py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-white primary-bg dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill bg-body 
                          text-black py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-white primary-bg dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill bg-body 
                          text-black py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-white primary-bg dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill bg-body 
                          text-black py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                  </div>
                </div>

              
                <div className="col h-full">
                  <span className="fs-1 poppins-medium ms-2">Charlas</span>
                  <div className="row my-3 mx-auto my-auto custom-calendar-scroll h-full">
                    <div class="col">
                      <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                          text-white py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                          text-white py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                          text-white py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                          text-white py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                    <div class="col">
                      <div className="text-black bg-body dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2"> 
                        <div className="text-truncate row col-9">
                          <div className="poppins-medium fs-4 py-1">Conferencia: "Titulo" 2021</div>
                          <span className="fs-6 py-1">Expositor: John Doe</span>
                          <span className="fs-5 py-1">Comenzó hace 3 min</span>
                        </div>
                        <div className="d-flex justify-content-center align-self-center poppins-bold my-auto fs-5 col text-truncate rounded-pill primary-bg  
                          text-white py-3 px-1 text-center">Unirse</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Div>

        </div>
      </Div>
      {showModal && (
        <IndexMiniModal type={"addMeeting"} setShowModal={setShowModal} />
      )}
      <Outlet />
    </Scene>
  );
};
export default createMeeting;