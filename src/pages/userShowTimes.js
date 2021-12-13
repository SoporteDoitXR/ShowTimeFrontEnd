import React, { useState } from "react";
import { HiCube } from "react-icons/hi";
import { IoDocumentTextSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import AdminShowtimes from "../components/userAdmin/adminShowtimes";
import UserProfile from "../components/userAdmin/userProfile";

const userShowTimes = () => {
  const [component, setcomponent] = useState(0);
  return (
    <div className="row me-0 h-full ">
      <div class="col-2 bg-dark text-white poppins-bold">
        <div className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer">
          <MdAddCircle className="fs-3 me-2" />
          Crear Showtime
        </div>
        <div
          className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer"
          onClick={() => setcomponent(0)}
        >
          <HiCube className="fs-3 me-2" />
          Mis Showtime
        </div>
        <div className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer">
          <IoDocumentTextSharp className="fs-3 me-2" />
          Ver informes
        </div>
        <div
          className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer"
          onClick={() => setcomponent(1)}
        >
          <IoSettingsSharp className="fs-3 me-2" />
          Conf. Cuenta
        </div>
      </div>
      <div class="col ">
        <div class="col-10 mx-auto mt-5">
          {component == 0 && <AdminShowtimes />}
          {component == 1 && <UserProfile />}
        </div>
      </div>
    </div>
  );
};
export default userShowTimes;
