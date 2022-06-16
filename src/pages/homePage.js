import React from "react";
import Button from "../components/UI/Button";
import Div from "../components/canvas2d/div";
import img_fachada from "../assets/plantillas/fachada.jpg";
import Scene from "../components/canvas2d/scene";
import fachada01 from "../assets/elements/FACHADA-01.png";
import fachada02 from "../assets/elements/FACHADA-02.png";
import { useNavigate } from "react-router";

const HomePage = ({ }) => {
    let navigate = useNavigate(); 

    return (
        <Scene className={``}
            aspect="ratio2-1"
            bgColor="#000"
            bgImage={img_fachada}
        >
            <Div
                className={``}
                width="200"
                height="353"
                positionY="270"
                positionX="454"
                zIndex={0}
            >
                <img src={fachada01} alt="yoast seo" height="353" width="530"/>
            </Div>
            <Div
                className={``}
                width="500"
                height="300"
                positionY="264"
                positionX="1161"
                zIndex={0}
            >
                <img src={fachada02} alt="yoast seo" height="182" width="497"/>
            </Div>
            <Div
                className={`w-full bg-gradient-1`}
                positionY="590"
                left="875"
                zIndex={5}
            >
                <div class="row align-items-center transform-text">
                    <div class="col">
                        <h4 id="scrollspyHeading1" className="text-center text-white poppins-bold fs-xl my-4">Bienvenidos a la feria 2022</h4>
                        <p className="text-center text-white col-md-8 offset-md-2">Una feria es un evento industrial, social, económico y cultural —establecido, 
                        temporal o ambulante, periódico o anual— que se lleva a cabo en una sede y que llega 
                        a abarcar generalmente un tema o propósito común.</p>
                        <div className="row justify-content-center">
                            <Button text="Entrar" type="button" onClick={() => navigate("./reception")}
                                className="mb-5 col-2 align-self-center px-6 fs-3 md:text-sm rounded-pill p-2 flex flex-row btn bg-dark text-white px-5 poppins-bold" 
                            /> 
                        </div>
                    </div>
                </div>
            </Div>
        </Scene>
    );
};
export default HomePage;