import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

import FormModal from "./formModal";
import SelecScene from "./selectScene";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

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

  // {`modal fade z-1 ${showmodal ? "show d-block" : "d-none"}`}
  return (
    <div className="modal fade z-1 show d-block">
      <div className="modal-dialog modal-dialog-centered modal-xl show ">
        <div className="modal-content bg-dark text-white border rounded-xl border-light z-10">
          <div className="modal-header">
            <div className="d-flex justify-content-between col-3 ms-3">
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

          <div className="modal-footer border-0">
            <Button
              className="btn btn-light px-5"
              text="Guardar"
              onClick={() => setShowModal(!showmodal)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexModal;
