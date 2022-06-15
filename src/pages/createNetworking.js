/*
  PAGINA PRINCIPAL DE SALA NETWORKING.
  SU FUNCION ES LA DE MOSTRAR LA LISTA DE USUARIOS O EMPRESAS PARA CHARLAR CON ELLOS,
  ASI COMO, LA CREACION DE USUARIOS Y EMPRESAS POR PARTE DEL ADMINISTRADOR
  ESTA PAGINA HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT

  TEMPORALMENTE HACE USO DE ESTADOS/STATES PARA DESPLEGAR MODAL DE CREACION DE USUARIO Y CARGA MASIVA
  LA PAGINA HACE USO DE PROPS PARA SABER SI MOSTRAR USUARIOS O EMPRESAS, ESTOS PROPS VIENEN DEFINIDOS
  POR UN LOCAL.STATE LLAMADO TYPE DEFINIDO EN LOS BOTONES DEL SIDEBAR "USUARIO" Y "EMPRESAS"


  ------NOTA IMPORTANTE-------
  SE ESTA TRABAJANDO EN ESTATICO, SOLO MOSTRANDO EL UI DE LA LISTA DE EMPRESAS Y USUARIOS
*/

import React, { useEffect, useState } from "react";
import Scene from "../components/canvas2d/scene";
import Div from "../components/canvas2d/div";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import { FaBuilding, FaPlus, FaSearch, FaTrash,FaUserAlt } from "react-icons/fa";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { Outlet, useLocation } from "react-router-dom";
import IndexMiniModal from "../components/miniModal";
import Cookies from "universal-cookie";
import { getUsers } from "../providers/apiUser";

const networking = () => {
  const location = useLocation();
  // la variable type viene por useLocation, depende del boton de usuario o empresas que toco el usuario
  // a partir de esta variable, se puede hacer la distincion entre los modulos de sala networking
  const type = location.state?.type;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [users, setUsers] = useState();
  const cookies = new Cookies();
  const tableTitles = (type === "company") ? ["Nombre", "Sitio Web", "Administradores", "Integrantes"] 
                      : ["Nombre completo","Nombre de usuario","Correo electrónico","Tipo de usuario"];

  useEffect(() => {
    let token = cookies.get("token");
    if(token){
      getUsers(token)
      .then((data) => data.json())
      .then((response) => {
        //console.log(response);
        setUsers(response);
      });
    }
  },[])

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
        height={900}
        positionY={100}
        positionX={160}
      />
      <Div
        className=" poppins-medium text-white d-flex flex-column justify-content-between"
        width={1500}
        height={150}
        positionY={150}
        positionX={220}
      >
        <div className="d-flex ms-3 fs-2">
          {type == "company" ? (
            <FaBuilding className="fs-1 my-auto me-3" />
          ) : (
            <FaUserAlt className="fs-1 my-auto me-3" />
          )}
          {type == "company" ? "Empresas" : "Usuarios"}
        </div>
        <div className="d-flex">
          <div className="col-3">
            <Input
              id={"search"}
              placeholder={"Buscar"}
              type={"text"}
              iconRight={FaSearch}
              color="dark"
            />
          </div>
          <div className="col d-flex justify-content-end">
            <Button
              className="btn light-bg text-white px-5 me-3 poppins-bold "
              size="small"
              text="Nuevo"
              onClick={() => {
                setShowModal(true);
                setModalType("addUser");
              }}
            />
            <Button
              className="btn primary-bg text-white px-5 poppins-bold "
              size="small"
              text="Carga masiva"
              iconLeft={FaPlus}
              onClick={() => {
                setShowModal(true);
                setModalType("addMasiveUser");
              }}
            />
          </div>
        </div>
      </Div>
      <Div
        className=" poppins-medium text-white"
        width={1500}
        height={600}
        positionY={350}
        positionX={220}
      >
        <div className="primary-bg d-flex py-3 px-4 rounded-2xl fs-5">
          {tableTitles.map((title, i) => (
            <div className="col text-truncate">{title}</div>
          ))
          }
          <div className="col-1 ">Acciones</div>
        </div>
        {/* LISTA DE USUARIOS O EMPRESAS */}
        <div className="d-flex flex-column h-85 custom-scroll p-0 mt-3">
          {users?.map((user, i) => (
            <div key={i} className="dark-bg-1 d-flex py-3 px-4 rounded-2xl fs-5 poppins-light my-2">
              <div className="col text-truncate me-5">{`${user.name} ${user.lastName}`}</div>
              <div className="col text-truncate me-5">{user.userName}</div>
              <div className="col text-truncate me-5">{user.email}</div>
              <div className="col text-truncate me-5">{user.showtimeIdRole}</div>
              <div className="col-1 d-flex justify-content-between">
                <IoChatbubbleEllipsesSharp className="cursor-pointer text-white fs-3" />
                <MdEdit className="cursor-pointer text-white fs-3" />
                <FaTrash className="cursor-pointer text-danger fs-3" />
              </div>
            </div>
          ))}
        </div>
      </Div>
      {showModal && (
        <IndexMiniModal type={modalType} setShowModal={setShowModal} />
      )}
      <Outlet />
    </Scene>
  );
};
export default networking;
