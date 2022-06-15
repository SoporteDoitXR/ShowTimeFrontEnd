import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from "../UI/Button";
import { AiOutlineClose } from "react-icons/ai";
import logoShowTime from "../../assets/UI/Logo_showtime.png";

const FachadaModal = ({ show, title, children }) => {
    return (
        <>
            {show && 
                <div className={`${(title === "Contacto" || title === "Citas") ? "" : "bg-dark-modal"} shadow-none rounded-xl ${title === "Catálogo"  ? "h-full" : ""} `}>
                    <div className={`px-4 py-4 text-white text-sm fs-4 h-full`}>
                        {children}
                    </div>
                </div>
            }
        </>  
    );
};

export default FachadaModal;