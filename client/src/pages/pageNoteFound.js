import React from "react";
import { Layout } from "../components";
import "./style.css";
import { Link } from "react-router-dom";
const PageNoteFound = () => {
  return (
    <Layout title={'go back - Page Not Found'}>
      <div className="back w-full h-[80vh] flex items-center justify-center flex-col ">
        <h1 className="text-[90px] font-montserrat">404</h1>
        <p className="font-montserrat sm:text-[40px] text-[30px]">Oops! Page Not Found</p>
        <Link to={'/'} className="my-6 font-semibold text-[20px] notfound p-2 ">Go Back</Link>
      </div>
    </Layout>
  );
};

export default PageNoteFound;
