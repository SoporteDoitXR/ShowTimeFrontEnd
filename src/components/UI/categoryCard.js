import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import React from "react";

const CategoryCard = ({
  name,
  img,
  onClickEdit,
  onClickDelete,
  addCategory,
}) => {
  return (
    <div className="col">
      {addCategory ? (
        <div
          className="h-12 primary-bg rounded-2xl m-2 d-flex justify-content-between cursor-pointer"
          onClick={addCategory}
        >
          <div className="col-6 text-truncate fs-5 my-auto ms-3 ">
            Añadir otra categoria
          </div>
          <div className="col-2 me-3 my-auto d-flex justify-content-center">
            <BsPlusCircle className="fs-1  cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className="h-12 dark-bg-2 rounded-2xl m-2 d-flex justify-content-between cursor-pointer">
          <img className="col-3 radius-left-right" src={img} alt="" />
          <div className="col-4 text-truncate fs-5 my-auto">{name}</div>
          <div className="w-20 me-3 my-auto d-flex justify-content-between">
            <div
              className="rounded-circle btn-bgcard w-5 h-5 my-auto d-flex justify-content-center mx cursor-pointer"
              onClick={() => onClickEdit && onClickEdit()}
            >
              <FaEdit className="btn-card my-auto fs-4" />
            </div>
            <div
              className="rounded-circle btn-bgcard w-5 h-5 my-auto d-flex justify-content-center mx cursor-pointer"
              onClick={() => onClickDelete && onClickDelete()}
            >
              <MdDeleteForever className="btn-card my-auto fs-2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CategoryCard;
