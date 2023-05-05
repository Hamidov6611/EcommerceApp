import React, { useState } from "react";
import { Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import PageNoteFound from "../pageNoteFound.js";
import AdminMenu from "../../components/AdminMenu";
const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  return (
    auth?.user?.role == 1 && (
      <Layout>
        <div className="flex md:flex-row flex-col mx-auto md:mx-0 md:p-4 ">
          <AdminMenu />
          <div className="md:w-[60%] w-[80%]  mx-auto md:mx-0 md:p-6 p-3">
            <p className="md:p-6 p-3 font-montserrat md:text-[24px] bg-lime-200">
              Admin Id: {auth?.user?._id}
            </p>
            <p className="md:p-6 p-3 font-montserrat md:text-[24px] bg-lime-50">
              Admin Name: {auth?.user?.name}
            </p>
            <p className="md:p-6 p-3 font-montserrat md:text-[24px] bg-lime-200">
              Admin Email: {auth?.user?.email}
            </p>
            <p className="md:p-6 p-3 font-montserrat md:text-[24px] bg-lime-50">
              Admin Phone: {auth?.user?.phone}
            </p>
            <p className="md:p-6 p-3 font-montserrat md:text-[24px] bg-lime-200">
              Admin Addres: {auth?.user?.address}
            </p>
          </div>
        </div>
      </Layout>
    )
  );
};

export default AdminDashboard;
