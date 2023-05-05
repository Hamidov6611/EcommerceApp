import React from "react";
import { Link } from "react-router-dom";
import "../pages/pages.css";
import { useAuth } from "../context/auth";

const AdminMenu = ({bg, bg2}) => {
  const [auth, setAuth] = useAuth();
  return (
      <div className="flex flex-col md:w-[30%] w-[80%] text-center text-[20px] font-montserrat md:mx-0 mx-auto p-3 md:p-6">
        <h4 className="font-montserrat md:text-[40px] m-3">Admin Panel</h4>
        <Link
          to={"/create-category"}
          className={`md:text-[24px] p-1 md:p-6 bg-slate-100  ${bg ? bg : 'text-black'}`}
        >
          Create Category
        </Link>
        <Link
          to={"/create-product"}
          className={`md:text-[24px] p-1 md:p-6 bg-slate-100  ${bg2 ? bg2 : 'text-black'}`}
        >
          Create Product
        </Link>
        <Link
          to={"/users"}
          className="md:text-[24px] p-1 md:p-6 bg-slate-100 text-black"
        >
          User
        </Link>
      </div>
      
  );
};

export default AdminMenu;
