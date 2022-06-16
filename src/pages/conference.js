import React, { useEffect, useState } from "react";
import Scene from "../components/canvas2d/scene";
import Button from "../components/UI/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import SideMenu from "../components/userView/sideMenuList";
import Div from "../components/canvas2d/div";
import Text from "../components/canvas2d/text";
import CategoryList from "../components/createPavilion/categoryList";
import { Outlet } from "react-router-dom";
import Schedule from "../components/createMeeting/schedule";
import { useNavigate } from "react-router";
import Questions from "../components/userView/questions";
import conferenceJSON from "../data/conference.json";
import Iframe from "../components/userView/iframe";
import { useParams } from "react-router-dom";
import { getMeetingById } from "../providers/apiMeeting";
import Zoom from "../components/zoom";
import Cookies from "universal-cookie";

const Conference = () => {
    let { id } = useParams();
    let navigate = useNavigate();
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
    const [ modalToShow, setModalToShow ] = useState("");
    const [ type, setType ] = useState("");
    const [ menuType, setMenuType ] = useState("");
    const [ contactList, setContactList ] = useState([]);
    const [ showSideModals, setShowSideModals ] = useState(false);
    const [ selectedStand, setSelectedStand] = useState(null);
    const [ meetingInfo, setMeetingInfo] = useState(null);
    const cookies = new Cookies();

    useEffect(()  => {
        if(!cookies.get("cookieExpires")){
        navigate("/reception");
        return;
        }
    },[])

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

    useEffect(() => {
        if( type === "contact"){
            setContactList(selectedStand.contact);
        }
    }, [type]) 

    useEffect(() => {
        getMeetingById(id)
        .then((data) => data.json())
            .then((response) => {
                if (response) {
                    setMeetingInfo(response);
                    let selectedItem = conferenceJSON.find(item => item.room == response.room);
                    setSelectedStand(selectedItem);
                } else {
                    console.log("no register");
                }
            });
    },[id])

    useEffect(() => {
        setStands(conferenceJSON);
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
                        className={``}
                        width={selectedStand.room == "Sala 01" ? "991" : "1149"}
                        height={selectedStand.room == "Sala 01" ? "557" : "537"}
                        positionY={selectedStand.room == "Sala 01" ? "11" : "99"}
                        positionX={selectedStand.room == "Sala 01" ? "500" : "439"}
                        zIndex={1}
                    >
                        <Zoom conferenceData={selectedStand}/>
                    </Div>
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

                {showSideMenu && 
                    <SideMenu list={sideMenuList} showModals={showModals} menuType={menuType}/>
                }  

                <Div
                    className=""
                    width={1924}
                    positionY={778}
                >
                    <div className="px-5 text-white fs-3 col-12 poppins-bold d-flex justify-content-between align-self-end">
                        <div className="col d-flex justify-content-center h-9 gap-4 align-self-center">
                            <div className="align-self-center text-white border-0 poppins-medium py-1 my-2 ps-4 pe-5 fs-4">
                                <span>{meetingInfo?.name}</span>
                            </div>
                            <div className="align-self-center btn-dark text-white border-0 rounded-pill poppins-medium py-1 my-2 ps-4 pe-5 fs-4">
                                <span className="fs-5">Expositor: <span className="ps-4">{meetingInfo?.exhibitor || "Jhon Doe"}</span></span>
                            </div>
                            <div className="align-self-center btn-dark text-white border-0 rounded-pill poppins-medium py-1 my-2 ps-4 pe-5 fs-4">
                                <span>{meetingInfo?.room || "Sala #"}</span>
                            </div>
                        </div>
                        <div className={`position-relative d-flex justify-content-center gap-4`}>
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
export default Conference;