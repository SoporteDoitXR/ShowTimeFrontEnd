import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

import FormModal from "./formModal";
import SelecScene from "./selectScene";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import Div from "../canvas2d/div";

const IndexModal = ({ showmodal, setShowModal }) => {
  let navigation = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const [modalContent, setModalContent] = useState(0);
  const [searchParams, SetSearchParams] = useSearchParams();

  return (
    <div className="modal fade show d-block">
      <Div
        className="modal-content dark-bg-2 text-white border rounded-xl border-light z-10 poppins-medium"
        width={1300}
        height={700}
        positionX={310}
        positionY={190}
      >
        <div className="modal-header">
          <div className="d-flex justify-content-between col-4 ms-3 poppins-bold fs-5">
            <div
              className={`cursor-pointer ${
                modalContent == 0 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(0)}
            >
              Info
            </div>
            <div
              className={`cursor-pointer ${
                modalContent == 1 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(1)}
            >
              Escenarios
            </div>
            <div
              className={`cursor-pointer ${
                modalContent == 2 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(2)}
            >
              Personalizacion
            </div>
          </div>
          {/* Close */}
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => navigation(`..?${searchParams.toString()}`)}
          ></button>
        </div>

        {modalContent == 0 && (
          <FormModal
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
          />
        )}
        {modalContent == 1 && <SelecScene />}

        <div className="modal-footer border-0 mb-3">
          <Button
            className="btn btn-light px-5"
            text="Guardar"
            onClick={() => navigation(`..?${searchParams.toString()}`)}
          />
        </div>
      </Div>
    </div>
  );
};
export default IndexModal;
