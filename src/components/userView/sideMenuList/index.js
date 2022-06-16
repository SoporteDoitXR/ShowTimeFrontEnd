import React, { useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SideMenu = ({ list, showModals, menuType }) => {
    const [active, setActive] = useState("");
    const [selectedCard, setSelectedCard] = useState("");

    const onSelectDevice = (element) => {
        setSelectedCard(element);
    }

    const onClickElement = (element) => {
        if(element.name === "Programa"){

        }
        showModals(element);
    }

    if(menuType === "components"){
        return(
            <>
                <div className="position-absolute top-0 end-0 d-flex g-4 col-3 mx-auto h-full side-menu">
                    <div className="list-group col-8 d-flex align-self-center mt-8 offset-3">
                        {list ? (
                            list?.map((element, i) => {
                                return(
                                    <>
                                        <div onClick={() => onSelectDevice(element)} key={i} 
                                            className={`rounded-xl my-1 ${element == selectedCard ? "border-cards":" border border-white"}`}>
                                            <a className={`cursor-pointer list-group-item list-group-item-action py-1 px-2 poppins-medium`}
                                                onClick={() => onClickElement(element)}
                                                href={element.name === "Programa" && "../../../files/prueba.pdf"} target={element.name === "Programa" && "_blank"} download={element.name === "Programa" && "programa.pdf"}
                                            >
                                                <VscCircleFilled className={`fs-5 me-2 ${element == selectedCard ? "text-color-1":" text-white"}`}/>
                                                <span className={`fs-5 ${element == selectedCard ? "text-color-1":" text-white"}`}>{element.name}</span>
                                            </a>
                                        </div>
                                    </>
                                )
                            })         
                        )
                        :
                        <div>No datos</div>
                        }
                    </div>  
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="position-absolute top-0 end-0 d-flex g-4 col-3 mx-auto h-full side-menu">
                    <div className="list-group col-8 d-flex align-self-center mt-8 offset-3">
                        {list ? (
                            list?.map((element, i) => {
                                return(
                                    <>
                                        <Link to={`/stand/${element.slug}`} style={{ textDecoration: 'none' }}>
                                            <div onClick={() => onSelectDevice(element)} key={i} 
                                                className={`rounded-xl my-1 ${element == selectedCard ? "border-cards":" border border-white"}`}>
                                                <a className={`cursor-pointer list-group-item list-group-item-action py-1 px-2 poppins-medium`}
                                                    onClick={() => onClickElement(element)}
                                                >
                                                    <VscCircleFilled className={`fs-5 me-2 ${element == selectedCard ? "text-color-1":" text-white"}`}/>
                                                    <span className={`fs-5 ${element == selectedCard ? "text-color-1":" text-white"}`}>{element.name}</span>
                                                </a>
                                            </div>
                                        </Link>
                                    </>
                                )
                            })         
                        )
                        :
                        <div>No datos</div>
                        }
                    </div>  
                </div>
            </>
        )
    }
    
}

export default SideMenu