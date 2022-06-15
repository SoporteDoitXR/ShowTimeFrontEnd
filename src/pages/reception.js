import React, { useEffect, useState } from "react";
import Div from "../components/canvas2d/div";
import Scene from "../components/canvas2d/scene";
import img_reception from "../assets/plantillas/img_recepcion2.png";
import logoReception from "../assets/elements/recepcion-logo.jpg";
import verticalReception from "../assets/elements/recepcion-vertical.jpg";
import horizontalReception from "../assets/elements/recepcion-horizontal.jpg";
import wallpaper from "../assets/plantillas/wallpaper.jpg";
import { useNavigate } from "react-router";
import Register from "./register";
import Cookies from "universal-cookie";
import Button from "../components/UI/Button";
import { IoIosMail } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import EmailForm from "../components/userView/emailForm";
import SideMenu from "../components/userView/sideMenuList";
import Text from "../components/canvas2d/text";
import CategoryList from "../components/createPavilion/categoryList";
import Schedule from "../components/createMeeting/schedule";
import Questions from "../components/userView/questions";
import Iframe from "../components/userView/iframe";

const Reception = ({ }) => {
    let navigate = useNavigate();
    const cookies = new Cookies();

    const [showRegister, setShowRegister ] = useState(false);

    const [ images, setImages ] = useState([
        {img: logoReception, width:"402", height:"119", top:"115", left:"610"},
        {img: horizontalReception, width:"459", height:"258", top:"250", left:"583"},
        {img: verticalReception, width:"185", height:"400", top:"274", left:"1359"},
    ]); 

    useEffect(() => {
        if(cookies.get("cookieExpires")){
            setShowRegister(false);
        }else{
            setShowRegister(true);
        }
        
    },[showRegister])

    //const [ stands, setStands ] = useState(["Stand 1", "Stand 2", "Stand 3","Stand 4","Stand 5","Stand 6","Stand 7"]);
    const [ stands, setStands ] = useState(null);
    const [ components, setComponents ] = useState([
        {name: "Recepción"}, 
        {name: "Programa"},
        {name: "Ingreso a salas"},
        {name: "Oficina BN Mujer"}, 
        {name: "Pabellón de stands"}, 
        {name: "Preguntas frecuente"}
    ]);
    const [ showSideMenu, setShowSideMenu ] = useState(components && true);
    const [ sideMenuList, setSideMenuList ] = useState();
    const [ showEmailForm, setShowEmailForm ] = useState(false);
    const [ modalToShow, setModalToShow ] = useState("");
    const [ showSideModals, setShowSideModals ] = useState(false);
    const [ menuType, setMenuType ] = useState("");

    const toggleShowEmailForm = () => {
        setShowEmailForm(!showEmailForm);
    };

    useEffect(() => {
        setMenuType("components");
        setSideMenuList(components);
    },[])

    const fillSideMenuList = (type) => {
        if(type === "Pabellón de stands"){
            setSideMenuList(stands);
            setMenuType("Pabellón de stands");
        }else{
            setSideMenuList(components);
            setMenuType("components");
        }
    }

    const showModals = (element) => {
        if(element.name === "Recepción" || element.name === "Programa"){return;}
        setModalToShow(element.name);
        setShowSideModals(true);
    }

    const onRegister = () => {
        setShowRegister(false);
    }

    return (
        <>
            <Scene className={`page-height`}
                aspect="ratio2-1"
                bgColor="#000"
                bgImage={img_reception}
            >
                {images ? (
                    images?.map((element, i) => {
                        return(
                            <Div
                                className={``}
                                width={element.width}
                                height={element.height}
                                positionY={element.top}
                                positionX={element.left}
                                zIndex={0}
                            >
                                <img className="" src={element.img} alt="yoast seo"
                                height={element.height} width={element.width}/>
                            </Div>
                        )
                    })
                )
                    :
                    null
                }
                {modalToShow !== "" && (
                    <>
                        <Div
                            className="bg-dark-transparent rounded-xl"
                            width={(modalToShow === "Preguntas frecuente") ? 1000 : modalToShow === "Oficina BN Mujer" ? 1220 : 1600}
                            height={modalToShow === "Preguntas frecuente" ? 600 : modalToShow === "Oficina BN Mujer" ? 750 : modalToShow === "Ingreso a salas" ? 700 : 700}
                            positionY={70}
                            positionX={modalToShow === "Preguntas frecuente" ? 460 : modalToShow === "Oficina BN Mujer" ? 340 : 160}
                        />
                        <Text
                            className={`ms-5 poppins-medium text-white d-flex justify-content-between fs-1 ${modalToShow === "Pabellón de stands" ? "text-center" : "text-end"}`}
                            width={modalToShow === "Preguntas frecuente" ? 900 : modalToShow === "Oficina BN Mujer" ? 1150 : 1500}
                            positionX={modalToShow === "Preguntas frecuente" ? 460 : modalToShow === "Oficina BN Mujer" ? 330 : 163}
                            positionY={105}
                        >
                            {modalToShow}
                            <Button onClick={() => setModalToShow("")} iconLeft={AiOutlineClose} className="p-0 fs-1 d-flex align-self-start poppins-bold text-white rounded-0 border-0 bg-transparent" type="button"/> 
                        </Text>
                        <Div
                            className={`poppins-medium text-white ${(modalToShow === "Pabellón de stands" || modalToShow === "Preguntas frecuente") ? "custom-calendar-scroll" : ""}`}
                            width={modalToShow === "Preguntas frecuente" ? 900 : modalToShow === "Oficina BN Mujer" ? 1102 : 1500}
                            height={modalToShow === "Preguntas frecuente" ? 450 : modalToShow === "Oficina BN Mujer" ? 620 : modalToShow === "Ingreso a salas" ? 550 : 500}
                            positionY={180}
                            positionX={modalToShow === "Preguntas frecuente" ? 500 : modalToShow === "Oficina BN Mujer" ? 380 : 220}
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
                <Div
                    className={`w-full`}
                    positionY="150"
                >
                    {showRegister && 
                        <Register onRegister={onRegister}/>
                    }
                    
                </Div>
                {showSideMenu && 
                    <div >
                        <SideMenu list={sideMenuList} showModals={showModals} menuType={menuType}/>
                    </div>
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
                    positionY={750}
                    zIndex={5}
                >
                    <div className="px-5 text-white fs-3 col-12 poppins-bold d-flex justify-content-between align-self-end">
                        <div className="">
                            <div className="border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                                <IoIosMail className="fs-1 mx-auto text-icon" onClick={toggleShowEmailForm}/>
                            </div>
                        </div>
                        <div className={`position-relative d-flex justify-content-center gap-4`}>
                            <div className="position-relative border-5 border-white p-3 rounded-circle btn btn-dark poppins-bold d-flex flex-column mx-auto cursor-pointer">
                                <AiOutlineMenu className="fs-1 mx-auto text-icon" onClick={() => {fillSideMenuList("components")}}/>
                            </div>
                        </div>
                    </div>
                </Div>
            </Scene>
        </>
    );
};
export default Reception;