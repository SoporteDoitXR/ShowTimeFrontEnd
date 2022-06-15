import React, { useEffect, useState } from "react";
import Scene from "../canvas2d/scene";
import Button from "../UI/Button";
import { FaInfoCircle, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoIosListBox } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import  FachadaModal from "../modal/fachadaModal";
import PDF from "../userView/pdf";
import List from "../userView/lists";
import EmailForm from "../userView/emailForm";
import SideMenu from "../userView/sideMenuList";
import Div from "../canvas2d/div";
import Text from "../canvas2d/text";
import CategoryList from "../createPavilion/categoryList";
import { Outlet } from "react-router-dom";
import Schedule from "../createMeeting/schedule";
import { useNavigate } from "react-router";
import Questions from "../userView/questions";
import standsJSON from "../../data/stand.json";
import Iframe from "../userView/iframe";
//Stand Template

const StandTemplate = () => {
  let navigate = useNavigate();
  const [ show, setShow ] = useState(false);
  const [ modalTitle, setModalTitle ] = useState("");
  const [ showSideMenu, setShowSideMenu ] = useState(false);
  const [ stands, setStands ] = useState(null);
  const [ components, setComponents ] = useState([
        {name: "Recepción"}, 
        {name: "Programa"},
        {name: "Ingreso a salas"},
        {name: "Oficina BN Mujer"}, 
        {name: "Pabellón de stands"}, 
        {name: "Preguntas frecuente"}
  ]);
  const [ sideMenuList, setSideMenuList ] = useState();
  const [ showEmailForm, setShowEmailForm ] = useState(false);
  const [ modalToShow, setModalToShow ] = useState("");
  const [ type, setType ] = useState("");
  const [ contactList, setContactList ] = useState([]);
  const [ showSideModals, setShowSideModals ] = useState(false);
  const [ selectedStand, setSelectedStand] = useState(null);

  const handleClose = () => setShow(false);

  const toggleShowEmailForm = () => {
    setShowEmailForm(!showEmailForm);
  };

  const fillSideMenuList = (type) => {
    if(showSideMenu){
        setShowSideMenu(false);
        return;
    }
    if(type === "Pabellón de stands"){
        setSideMenuList(stands);
    }else{
        setSideMenuList(components);
    }
    setShowSideMenu(true);
  }

  const handleShow = (type) => {
    if(type === "info"){
        setModalTitle("Información");
        setType(type);
        setShow(true);
    }else if(type === "catalogue"){
        setModalTitle("Catálogo");
        setType(type);
        setShow(true);
    }else if(type === "dates"){
        setModalTitle("Citas");
        setType(type);
        setShow(true);
    }else{
        setModalTitle("Contacto");
        setType(type);
        setShow(true);
    }
  };

  useEffect(() => {
      if( type === "contact"){
        setContactList(selectedStand.contact);
      }
  }, [type]) 

  useEffect(() => {
    let selectedItem = standsJSON.find(item => item.id === 1);
    setSelectedStand(selectedItem);
  },[])

  useEffect(() => {
    setStands(standsJSON);
  },[])

  const showModals = (element) => {
    if(element.name === "Recepción"){
        navigate("../../pages/reception");
        return;
    }
    setModalToShow(element.name);
    setShowSideModals(true);
  }

  return (
    <>
        <Scene
            className={"bg-black"}
            aspect="ratio2-1"
            bgColor="#000"
            bgImage={selectedStand && selectedStand.background_image}
            
        > 
            {selectedStand?.element_image &&
                selectedStand?.element_image?.map((element, i) => {
                    return(
                        <Div
                            className={``}
                            width={element.width}
                            height={element.height}
                            positionY={element.top}
                            positionX={element.left}
                            zIndex={0}
                            key={i}
                        >
                            <img src={element.img} alt="yoast seo" height={element.height} width={element.width}/>
                        </Div>
                    )
                })
            }
            {selectedStand &&
                <Div
                    width={selectedStand?.video?.width}
                    height={selectedStand?.video?.height}
                    positionY={selectedStand?.video?.top}
                    positionX={selectedStand?.video?.left}
                    zIndex={0}
                >
                    <iframe width={selectedStand?.video?.width} height={selectedStand?.video?.height} 
                    src={selectedStand?.video?.url} 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                </Div>
            }
            {modalToShow !== "" && (
                <>
                    <Div
                        className="bg-dark-transparent rounded-xl"
                        width={(modalToShow === "Preguntas frecuente") ? 1000 : 1600}
                        height={modalToShow === "Preguntas frecuente" ? 500 : modalToShow === "Oficina BN Mujer" ? 840 : 700}
                        positionY={80}
                        positionX={modalToShow === "Preguntas frecuente" ? 460 : 160}
                    />
                    <Text
                        className={`ms-5 poppins-medium text-white d-flex justify-content-between fs-1 ${modalToShow === "Pabellón de stands" ? "text-center" : "text-end"}`}
                        width={modalToShow === "Preguntas frecuente" ? 900 : 1500}
                        positionX={modalToShow === "Preguntas frecuente" ? 460 : 163}
                        positionY={105}
                    >
                        {modalToShow}
                        <Button onClick={() => setModalToShow("")} iconLeft={AiOutlineClose} className="p-0 fs-1 d-flex align-self-start poppins-bold text-white rounded-0 border-0 bg-transparent" type="button"/> 
                    </Text>
                    <Div
                        className={`poppins-medium text-white ${modalToShow === "Pabellón de stands"  || modalToShow === "Preguntas frecuente" ? "custom-calendar-scroll" : ""}`}
                        width={modalToShow === "Preguntas frecuente" ? 900 : 1500}
                        height={modalToShow === "Preguntas frecuente" ? 340 : modalToShow === "Oficina BN Mujer" ? 700 : 500}
                        positionY={180}
                        positionX={modalToShow === "Preguntas frecuente" ? 500 : modalToShow === "Oficina BN Mujer" ? 200 : 220}
                    >
                        {/* SECCION DE COMPONENTES */}
                        
                        {modalToShow == "Pabellón de stands" && (
                            <CategoryList userMode={true} />
                        )}

                        {modalToShow == "Ingreso a salas" && (
                            <Schedule  />
                        )}

                        {modalToShow == "Preguntas frecuente" && (
                            <Questions  />
                        )}

                        {modalToShow == "Oficina BN Mujer" && (
                            <Iframe />
                        )}
                    </Div>
                </>
            )}
            {show && (
                <>
                    <Div
                        className="bg-modal shadow-none rounded-xl"
                        width={ type === "contact" ? 800 : type === "catalogue" ? 1100 : 800}
                        height={ type === "contact" ? 584 : type === "catalogue" ? 600 : 430 }
                        positionY={100}
                        positionX={ type === "catalogue" ? 400 : 580}
                    />
                    <Text
                        className={`d-flex justify-content-between text-white fs-1 poppins-medium ${type === "catalogue" ? "ps-5" : "ps-2"}`}
                        width={ type === "catalogue" ? 1097 : 769}  
                        positionX={ type === "catalogue" ? 401 : 609}
                        positionY={120}
                    >
                        {modalTitle}
                        <Button onClick={handleClose} iconLeft={AiOutlineClose} className="p-0 fs-1 d-flex align-self-start poppins-bold text-white rounded-0 border-0 bg-transparent" type="button"/> 
                    </Text>
                    
                    <Div
                        className=""
                        width={ type === "catalogue" ? 1009 : 744 }
                        height={ type === "catalogue" ? 457 : 200}
                        positionY={200}
                        positionX={ type === "catalogue" ? 448 : 610 } 
                    >
                        {type === "info" && (
                            <>
                                <img className="w-15 mx-auto d-block mb-3" src={selectedStand && selectedStand.logo} alt="" />
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} prueba={true}>
                                    <span className= "">
                                        {selectedStand && selectedStand.info_text}
                                    </span>
                                </FachadaModal>
                            </>
                        )}
                        {type === "catalogue" && (
                            <>
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} prueba={true}>
                                    <PDF pdfURL={selectedStand && selectedStand.pdf_url}/>
                                </FachadaModal>
                            </>
                        )}

                        {type === "dates" && (
                            <>
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} prueba={true}>
                                    <div className={`d-flex rounded-xl px-4 py-3 mb-3 dark-bg-1`}>
                                        <div className="flex-grow-1">
                                            <span className="poppins-medium"><a download className={`text-white text-decoration-none pe-auto`} href={selectedStand.dates_link} target="_blank">Link a calendly</a></span>
                                        </div>
                                    </div>
                                </FachadaModal>
                            </>
                        )}

                        {type === "contact" && (
                            <>
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} prueba={true}>
                                    <List type="contact" list={ contactList }/>
                                </FachadaModal>
                            </>
                        )}
                    </Div>
                </>
            )}

            {showSideMenu && 
                <SideMenu list={sideMenuList} showModals={showModals}/>
            }  

            {showEmailForm && 
                <EmailForm />
            }
            
            <Div
                className=""
                width={1924}
                positionY={840}
            >
                <div className="px-5 text-white fs-3 col-12 poppins-bold d-flex justify-content-between align-self-end">
                    <div className="">
                        <div className="border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                            <IoIosMail className="fs-1 mx-auto text-icon" onClick={toggleShowEmailForm}/>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center h-9 gap-4 align-self-center">
                        <Button type="button" size="small" text="Información" iconLeft={FaInfoCircle} iconClassName="fs-2 text-white pe-1"
                            className="btn-gray-transparent text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("info")}}
                        />
                        <Button type="button" size="small" text="Catálogo" iconLeft={FaInfoCircle} iconClassName="fs-2 text-white pe-1"
                            className="btn-gray-transparent text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("catalogue")}}
                        />
                        <Button type="button" size="small" text="Citas" iconLeft={FaCalendarAlt} iconClassName="fs-2 text-white pe-1"
                            className="btn-gray-transparent text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("dates")}}
                        />
                        <Button type="button" size="small" text="Contacto" iconLeft={FaPhoneAlt} iconClassName="fs-2 text-white pe-1"
                            className="btn-gray-transparent text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("contact")}}
                        />
                    </div>
                    <div className={`position-relative d-flex justify-content-center gap-4`}>
                        <div className="position-relative border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                            <IoIosListBox className="fs-1 mx-auto text-icon" onClick={() => {fillSideMenuList("Pabellón de stands")}}/>
                        </div>
                        <div className="position-relative border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                            <AiOutlineMenu className="fs-1 mx-auto text-icon" onClick={() => {fillSideMenuList("components")}}/>
                        </div>
                    </div>
                </div>
            </Div>
            <Outlet />
        </Scene>
    </>
  );
};
export default StandTemplate;