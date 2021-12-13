import React from "react";

import { MdDeleteForever, MdInsertDriveFile } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ItemBanner = ({ text, onClickEdit, onClickDelete }) => {
  return (
    <div className="col-12 border mx-auto text-white d-flex justify-content-between rounded-2xl p-2 my-2 ">
      <MdInsertDriveFile className="my-auto fs-5 me-2" />
      <p className="col-7 text-overflow my-auto fs-6 poppins-medium">{text}</p>

      <div className="col d-flex justify-content-end ">
        <div
          className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer"
          onClick={onClickEdit}
        >
          <FaEdit className="btn-card my-auto fs-7" />
        </div>
        <div
          className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer"
          onClick={onClickDelete}
        >
          <MdDeleteForever className="btn-card my-auto fs-5" />
        </div>
      </div>
    </div>
  );
};

export default ItemBanner;
