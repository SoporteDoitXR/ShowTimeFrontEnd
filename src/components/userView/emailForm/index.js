import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiSendPlaneFill}  from "react-icons/ri";
import { apiSendEmail } from "../../../providers/apiSendEmail";

const EmailForm = ({ email }) => {
    const [ message, setMessage ] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        apiSendEmail(email, data.from, data.subject, data.message)
          .then((data) => data.json())
          .then((response) => {
            console.log(response);
            if (response) {
              setMessage("");
              console.log("correo enviado");
            } else {
              console.log("no enviado");
            }
            reset(
                {
                  email: "",
                  subject: "",
                  message: "",
                },
                {
                  keepErrors: true,
                  keepDirty: true,
                  keepIsSubmitted: false,
                  keepTouched: false,
                  keepIsValid: false,
                  keepSubmitCount: false,
                }
              );
        });
    };

    return(
        <> 
            <div className="ms-5 col-3 bg-dark position-absolute top-50 start-0 mx-auto p-2 rounded-xl border-cards">
                <form
                    className=" d-flex flex-column justify-content-between col-12 mx-auto "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="d-flex flex-column">
                        <div className="border-top-0 border-start-0 border-end-0 border-cards mb-1">
                            <label className="text-white d-flex">
                                <span className="align-self-center me-2 fst-italic fs-5">De</span>
                                <input id="from" type="email" className="text-white fs-5 bg-transparent border-0 outline-none" 
                                    {...register('from', { required: true } )} errorMessage={"Campo obligatorio"}
                                />
                            </label>
                        </div>
                        <div className="border-top-0 border-start-0 border-end-0 border-cards mb-1">
                            <label className="text-white fs-5 d-flex">
                                <span className="align-self-center me-2 fst-italic fs-5">Asunto</span>
                                <input id="subject" className="text-white bg-transparent border-0 outline-none"
                                    {...register('subject', { required: true } )} errorMessage={"Campo obligatorio"}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="text-white h-16 mt-2 fs-5 text-break">
                        {message}
                    </div>
                    <div className="d-flex">
                        <div className="fs-6 w-full">
                            <div className="position-relative">
                                <i className="h-full position-absolute pe-3 d-flex end-0 pointer-events-none">
                                    <MdOutlineEmojiEmotions className="m-auto text-gray fs-5" /></i>
                                <input id="message" type="text" placeholder="Escribe tu mensaje" 
                                    className="border-dark form-control pe-4-5 rounded-pill w-full h-6 fs-5"
                                    {...register('message', { required: true } )} errorMessage={"Campo obligatorio"} 
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="align-self-center rounded-pill primary-bg p-1 ms-2 border-0">
                            <RiSendPlaneFill className="text-icon fs-3 d-flex align-self-center"/>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EmailForm