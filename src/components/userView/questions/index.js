import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

const Questions = ({ }) => {
    const [active, setActive] = useState("");
    const [selectedCard, setSelectedCard] = useState("");

    const onSelectDevice = (element) => {
        setSelectedCard(element);
    }

    const onClickElement = (element) => {
        showModals(element);
    }

    return(
        <>
            <div className="pe-3">
                <Accordion defaultActiveKey="0" className="accordion-flush" alwaysOpen>
                    <Accordion.Item eventKey="0" className="mb-4">
                        <Accordion.Header className="">¿Qué días es el Encuentro PYME Mujer?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            Jueves 23 y viernes 24 de junio.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-4">
                        <Accordion.Header>¿Qué horario tiene el Encuentro PYME Mujer?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            Ambos días de 2p.m. a 8p.m.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-4">
                        <Accordion.Header>¿Quiénes pueden asistir?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            Cualquier persona que se registre al ingresar.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-4">
                        <Accordion.Header>¿Cómo ingreso a las charlas?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            En el menú haga clic en Agenda, ingrese seleccionando la de su interés.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mb-4">
                        <Accordion.Header>¿Hay que inscribirse en las Conferencias y Foros?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            No, para asistir haga clic en Agenda, ingrese seleccionando la de su interés.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="mb-4">
                        <Accordion.Header>¿Se va a entregar un certificado de participación del Encuentro?</Accordion.Header>
                        <Accordion.Body className="text-white poppins-light fs-5">
                            No se entregaran certificados del Encuentro PYME.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default Questions