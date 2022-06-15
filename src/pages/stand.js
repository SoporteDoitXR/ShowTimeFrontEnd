import React, { useEffect, useState } from "react";
import Scene from "../components/canvas2d/scene";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import plantilla2 from "../assets/plantillas/img_stand.png";
import imgExample from "../assets/plantillas/wallpaper.jpg";
import Button from "../components/UI/Button";
import { FaInfoCircle, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoIosListBox } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import  FachadaModal from "../components/modal/fachadaModal";
import PDF from "../components/userView/pdf";
import List from "../components/userView/lists";
import EmailForm from "../components/userView/emailForm";
import SideMenu from "../components/userView/sideMenuList";
import Div from "../components/canvas2d/div";
import Text from "../components/canvas2d/text";
import CategoryList from "../components/createPavilion/categoryList";
import { Outlet } from "react-router-dom";
import Schedule from "../components/createMeeting/schedule";
import { useNavigate } from "react-router";
import Questions from "../components/userView/questions";
import standsJSON from "../data/stand.json";
import Iframe from "../components/userView/iframe";
import { useParams } from "react-router-dom";
//VIsta priincipal del stand

const Stand = () => {
  let { slug } = useParams();
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
  const [ menuType, setMenuType ] = useState("");
  const [ contactList, setContactList ] = useState([]);
  const [ showSideModals, setShowSideModals ] = useState(false);
  const [ images, setImages ] = useState([
    {img: {imgExample}, width:"168", height:"374", top:"347", left:"445"},
    {img: {imgExample}, width:"334", height:"117", top:"108", left:"742"},
    {img: {imgExample}, width:"172", height:"412", top:"360", left:"1225"},
  ]); 
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
        setMenuType("Pabellón de stands");
    }else{
        setSideMenuList(components);
        setMenuType("components");
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
        window.open(selectedStand.dates_link, '_blank');
        return;
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
    let selectedItem = standsJSON.find(item => item.slug == slug);
    setSelectedStand(selectedItem);
  },[slug])

  useEffect(() => {
    setStands(standsJSON);
  },[])

  const showModals = (element) => {
    if(element.name === "Recepción"){
        navigate("/reception");
        return;
    }

    if(menuType === "Pabellón de stands"){
        return;
    }
    setModalToShow(element.name);
    setShowSideModals(true);
    /*setShowSideMenu(true);*/
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
                    {/*<iframe width={selectedStand?.video?.width} height={selectedStand?.video?.height} 
                    src={selectedStand?.video?.url} 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>*/}
                    <video width={selectedStand?.video?.width} height={selectedStand?.video?.height} controls autoPlay loop muted>
                        <source src={selectedStand?.video?.url} type="video/mp4"/>
                    </video>
                </Div>
            }
            {modalToShow !== "" && menuType !== "Pabellón de stands" && (
                <>
                    <Div
                        className="bg-dark-transparent rounded-xl"
                        width={(modalToShow === "Preguntas frecuente") ? 1000 : modalToShow === "Oficina BN Mujer" ? 1220 : 1600}
                        height={modalToShow === "Preguntas frecuente" ? 600 : modalToShow === "Oficina BN Mujer" ? 750 : modalToShow === "Ingreso a salas" ? 700 : 700}
                        positionY={modalToShow === "Oficina BN Mujer" ? 30 : 70}
                        positionX={modalToShow === "Preguntas frecuente" ? 460 : modalToShow === "Oficina BN Mujer" ? 340 : 160}
                    />
                    <Text
                        className={`ms-5 poppins-medium text-white d-flex justify-content-between fs-1 ${modalToShow === "Pabellón de stands" ? "text-center" : "text-end"}`}
                        width={modalToShow === "Preguntas frecuente" ? 900 : modalToShow === "Oficina BN Mujer" ? 1150 : 1500}
                        positionX={modalToShow === "Preguntas frecuente" ? 460 : modalToShow === "Oficina BN Mujer" ? 330 : 163}
                        positionY={modalToShow === "Oficina BN Mujer" ? 65 : 105}
                    >
                        {modalToShow}
                        <Button onClick={() => setModalToShow("")} iconLeft={AiOutlineClose} className="p-0 fs-1 d-flex align-self-start poppins-bold text-white rounded-0 border-0 bg-transparent" type="button"/> 
                    </Text>
                    <Div
                        className={`poppins-medium text-white ${(modalToShow === "Pabellón de stands" || modalToShow === "Preguntas frecuente") ? "custom-calendar-scroll" : ""}`}
                        width={modalToShow === "Preguntas frecuente" ? 900 : modalToShow === "Oficina BN Mujer" ? 1102 : 1500}
                        height={modalToShow === "Preguntas frecuente" ? 450 : modalToShow === "Oficina BN Mujer" ? 620 : modalToShow === "Ingreso a salas" ? 550 : 500}
                        positionY={modalToShow === "Oficina BN Mujer" ? 140 : 180}
                        positionX={modalToShow === "Preguntas frecuente" ? 500 : modalToShow === "Oficina BN Mujer" ? 380 : 220}
                    >
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
                        height={ type === "catalogue" ? 650 : (type === "contact" && (selectedStand.slug === 2 || selectedStand.slug === 4)) ? 400 : (selectedStand.slug === 1 || selectedStand.slug === 2) ? 490 : 550 }
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
                        positionY={170}
                        positionX={ type === "catalogue" ? 448 : 610 } 
                    >
                        {type === "info" && (
                            <>
                                <img className="w-50 mx-auto d-block mb-3" src={selectedStand && selectedStand.logo} alt="" />
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle}>
                                    <span className= "">
                                        {selectedStand && selectedStand.info_text}
                                    </span>
                                </FachadaModal>
                            </>
                        )}
                        {type === "catalogue" && (
                            <>
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} >
                                    <PDF pdfURL={selectedStand && selectedStand.pdf_url}/>
                                </FachadaModal>
                            </>
                        )}

                        {type === "contact" && contactList && (
                            <>
                                <FachadaModal show={show} handleClose={handleClose} title={modalTitle} >
                                    <List type="contact" list={ contactList }/>
                                </FachadaModal>
                            </>
                        )}
                    </Div>
                    {type === "catalogue" && 
                        <Div className=""
                            width={150 }
                            height={50}
                            positionY={670}
                            positionX={ 1300 }
                        >
                            <button onClick={handleClose} text="Descargar" className="px-3 py-2 fs-4 d-flex align-self-end text-white rounded-pill border-0 primary-bg" type="button">
                                <a href={selectedStand?.pdf_url} className="text-white" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" download="catalogo .pdf"> 
                                   Descargar 
                                </a>
                            </button>
                        </Div>
                    }
                </>
            )}

            {showSideMenu && 
                <SideMenu list={sideMenuList} showModals={showModals} menuType={menuType}/>
            }  

            {showEmailForm && 
                <Div  
                    className=""
                    width={1924}
                    positionY={400}
                    zIndex={5}
                >
                    <EmailForm />
                </Div>
            }
            
            <Div
                className=""
                width={1924}
                positionY={778}
            >
                <div className="px-5 text-white fs-3 col-12 poppins-bold d-flex justify-content-between align-self-end">
                    <div className="">
                        <div className="border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                            <IoIosMail className="fs-1 mx-auto text-icon" onClick={toggleShowEmailForm}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center h-9 gap-4 align-self-center">
                        <Button type="button" size="small" text="Información" iconLeft={FaInfoCircle} iconClassName="fs-2 text-white pe-1"
                            className="btn btn-dark text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("info")}}
                        />
                        <Button type="button" size="small" text="Catálogo" iconLeft={FaInfoCircle} iconClassName="fs-2 text-white pe-1"
                            className="btn btn-dark text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("catalogue")}}
                        />
                        <Button type="button" size="small" text="Citas" iconLeft={FaCalendarAlt} iconClassName="fs-2 text-white pe-1"
                            className="btn btn-dark text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
                            onClick={() => {handleShow("dates")}}
                        />
                        <Button type="button" size="small" text="Contacto" iconLeft={FaPhoneAlt} iconClassName="fs-2 text-white pe-1"
                            className="btn btn-dark text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4"
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
export default Stand;