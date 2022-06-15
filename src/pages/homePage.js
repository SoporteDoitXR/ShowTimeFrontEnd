import React from "react";
import Button from "../components/UI/Button";
import { ImArrowDown2 } from "react-icons/im";
import Div from "../components/canvas2d/div";
import img_fachada from "../assets/plantillas/img_fachada.png";
import Scene from "../components/canvas2d/scene";
import wallpaper from "../assets/plantillas/wallpaper.jpg";
import { useNavigate } from "react-router";

const HomePage = ({ }) => {
    let navigate = useNavigate(); 

    return (
        <>
            <p>Home Page</p>
            {/*<Scene className={`page-height over`}
                aspect="ratio2-1"
                bgColor="#000"
                bgImage={img_fachada}
            >
                <Div
                    className={`w-full bg-gradient-1`}
                    positionY="580"
                    left="875"
                >
                    <div class="row align-items-center transform-text">
                        <div class="col">
                            <h4 id="scrollspyHeading1" className="text-center text-white poppins-bold fs-xl my-4">Bienvenidos a la feria 2022</h4>
                            <p className="text-center text-white col-md-8 offset-md-2">Una feria es un evento industrial, social, económico y cultural —establecido, 
                            temporal o ambulante, periódico o anual— que se lleva a cabo en una sede y que llega 
                            a abarcar generalmente un tema o propósito común.</p>
                        </div>
                        <nav id="navbar-example2" class="navbar px-3 justify-content-center">
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link" href="#scrollspyHeading1">
                                        <ImArrowDown2 className="text-white h-5"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Div>
            </Scene>
            <Div positionY="50">
                <div className="w-full">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                        <div className="bg-gradient-2">
                            <div class="row align-items-center py-5 justify-content-end gap-5 transform-text">
                                <div class="col-4 text-white">
                                    <h4  className="my-4 fs-2">En este espacio vas a poder sumarte a charlas y foros.</h4>
                                    <p className="lh-1 fs-5">Una feria es un evento industrial, social, económico y cultural —establecido, 
                                    temporal o ambulante, periódico o anual— que se lleva a cabo en una sede y que llega 
                                    a abarcar generalmente un tema o propósito común.</p>
                                </div>
                                <div class="col-6">
                                    <img src={wallpaper} height="350" width= "600" className="float-end img-shadow"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-3">
                            <div class="row align-items-center py-5 justify-content-start gap-5">
                                <div class="col-6 my-5">
                                    <img src={wallpaper} height="350" width= "600" className="img-shadow"/>
                                </div>
                                <div class="col-4 text-white">
                                    <h4 id="scrollspyHeading1" className="my-4 fs-2">Visitar los distintos stands</h4>
                                    <p className="lh-1 fs-5">Una feria es un evento industrial, social, económico y cultural —establecido, 
                                        temporal o ambulante, periódico o anual— que se lleva a cabo en una sede y que llega 
                                        a abarcar generalmente un tema o propósito común. Una feria es un evento industrial, 
                                        social, económico y cultural —establecido, temporal o ambulante, periódico o anual— que 
                                        se lleva a cabo en una sede y que llega a abarcar generalmente un tema o propósito 
                                        común.</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 pb-5">
                                <h4 id="scrollspyHeading4" className="align-self-center fs-2 text-white">Comenzá con la expeciencia</h4>
                                <Button text="Entrar" type="button" onClick={() => navigate("./reception")}
                                    className="mb-5 col-2 align-self-center px-6 fs-5 md:text-sm rounded-pill p-2 flex flex-row btn primary-bg text-white px-5 poppins-bold" 
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </Div>*/}
        </>
    );
};
export default HomePage;