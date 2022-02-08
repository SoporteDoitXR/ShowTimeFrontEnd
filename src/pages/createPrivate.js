import React, { useState } from "react";
import Scene from "../components/canvas2d/scene";
import Div from "../components/canvas2d/div";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import { FaCalendarAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/UI/Button";
import IndexMiniModal from "../components/miniModal";
import placeHolder from "../assets/UI/placeholder_Conferencias.png";

const createPrivate = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <Scene
      className={"bg-black"}
      aspect="ratio16-9"
      bgColor="#000"
      bgImage={plantilla1}
    >
      <Div
        className="bg-dark-transparent"
        width={1600}
        height={900}
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
        <div className="d-flex ms-3 fs-2">
          <FaCalendarAlt className="fs-1 my-auto me-3" />
          Calendario
        </div>
        <div className="d-flex justify-content-end">
          <Button
            className="btn light-bg text-white px-5 py-3 me-3 poppins-bold "
            size="small"
            text="Nueva conferencia privada"
            onClick={() => setShowModal(true)}
          />
        </div>
      </Div>
      <Div
        className=" poppins-medium text-white"
        width={1500}
        height={600}
        positionY={350}
        positionX={220}
      >
        <div className="d-flex">
          <Button
            className="btn btn-dark poppins-bold text-white fs-1"
            size="small"
            rounded="semi"
            icon={RiArrowLeftSLine}
          />

          <div className="col text-white dark-bg-1 rounded-2xl mx-4 text-center d-flex justify-content-center">
            <span className="align-middle poppins-bold my-auto fs-5">
              Domingo<span className="poppins-medium"> 13 de junio</span>
            </span>
          </div>
          <div className="col text-white primary-bg  rounded-2xl mx-4 text-center d-flex justify-content-center">
            <span className="align-middle poppins-bold my-auto fs-5">
              Domingo<span className="poppins-medium"> 13 de junio</span>
            </span>
          </div>
          <div className="col text-white dark-bg-1 rounded-2xl mx-4 text-center d-flex justify-content-center">
            <span className="align-middle poppins-bold my-auto fs-5">
              Domingo<span className="poppins-medium"> 13 de junio</span>
            </span>
          </div>

          <Button
            className="btn btn-dark poppins-bold text-white fs-1"
            size="small"
            rounded="semi"
            icon={RiArrowRightSLine}
          />
        </div>

        {/* LISTA DINAMICA DE MEETINGS */}
        <div className="d-flex flex-column h-85 custom-scroll p-0 mt-3">
          {/* IMAGEN PLACEHOLDER */}
          <img className="h-full" src={placeHolder} alt="" />
        </div>
      </Div>

      {showModal && (
        <IndexMiniModal type={"addMeeting"} setShowModal={setShowModal} />
      )}
      <Outlet />
    </Scene>
  );
};
export default createPrivate;
