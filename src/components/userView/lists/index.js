import React, { useEffect, useState } from 'react';
import { MdDownload, MdFacebook } from "react-icons/md";
import { BsTwitter, BsFileEarmarkFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";

export default function List({ type, list }) {
    console.log(list);
    const [listIcon, setListIcon] = useState(null);
    useEffect(() => {
        const iconList = list;
        iconList.map((item) => {
            if(item.icon === "phone"){
                item.icon =  <FaPhoneAlt className="me-4 ms-2 fs-2"/>
            }else if(item.icon === "web"){
                item.icon =  <CgWebsite className="me-4 ms-2 fs-2"/>
            }else if(item.icon === "mail"){
                item.icon =  <IoIosMail className="me-4 ms-2 fs-2"/>
            }else if(item.icon === "facebook"){
                item.icon = <MdFacebook className="me-4 ms-2 fs-2"/>
            }else if(item.icon === "twitter"){
                item.icon = <BsTwitter className="me-4 ms-2 fs-2"/>
            }else if(item.icon === "instagram"){
                item.icon = <AiFillInstagram className="me-4 ms-2 fs-2"/>
            }
        })
        setListIcon(iconList);
    }, [list])
  return (
    <>
        {listIcon ? (
            listIcon?.map((element, i) => {
                return(
                    <div key={i} className={`d-flex ${(type==="contact") ? "" : "border border-secondary"} rounded-xl px-4 py-3 mb-3 dark-bg-1`}>
                        <div className="flex-grow-1">
                            {(type === "download") ? <BsFileEarmarkFill className="me-2 "/> : element.icon }
                            <span className="poppins-medium"><a download className={`text-white text-decoration-none ${(type==="contact") ? "pe-auto" : "pe-auto"}`} href={element.href}>{element.name}</a></span>
                        </div>
                        {(type === "download") && 
                            <div className="align-self-center p-1 opacity-75 rounded-circle bg-white poppins-bold d-flex cursor-pointer">
                                <MdDownload className="mx-auto text-gray opacity-75" />
                            </div>
                        }
                    </div>
                )
            })
        ) : (
            <p className="">No hay contactos</p>
        )}
    </>
  );
}