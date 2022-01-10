/*
  ESTE CARD ES UN COMPONENTE QUE SOLO SE USA EN LA PAGINA DE SELECCION DE TEMPLATES A USAR
  SIN EMBARGO, SE PUEDE TRATAR EN OTROS CAMPOS, TIENE UN CHECK PARA DETERMINAR SI SE USA O NO

  ESTE COMPONENTE ESTA PENSADO PARA USARSE CON REACT-HOOK-FORM
  REQUIERE PROPS DE ID Y REGISTER PARA EL REACT-HOOK-FORM
  TAMBIEN RECIBE LA IMAGEN, TITULO Y DESCRIPCION DE LA PLANTILLA
*/
import React from "react";

const CardTemplate = ({ id, title, description, img, checked, register }) => {
  return (
    <div className="col-4  h-12">
      <div className="row col-11 dark-bg-2 border-cards border-4 rounded-xl mx-auto py-2">
        <div className="col-3">
          <img
            className="rounded-circle py-3 w-full my-auto"
            alt=""
            src={img}
          />
        </div>

        <div className="col text-white poppins-medium">
          <p className="text-start text-wrap lh-base text-decoration-none text-reset fw-bold fs-5 py-1 m-none">
            {title}
          </p>
          <p className="text-start text-wrap lh-base text-decoration-none text-reset fs-7 p-none m-none fw-lighter">
            {description}
          </p>
        </div>
        <div className="col-1 p-none">
          <input
            id={id}
            type="checkbox"
            defaultChecked={checked}
            className="checkbox"
            {...register(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
