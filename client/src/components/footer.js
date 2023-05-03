import React from "react";
import { styles } from "../utils/style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={`${styles.paragraph} text-center ${styles.flexCenter}  bg-primary h-[20vh] flex-col`}
    >
      <h4 className="font-montserrat text-[20px] py-3">
        All Right Reserved &copy; DIMAWEB
      </h4>
      <div className="font-montserrat text-[18px] py-3">
        <Link
          to={"/about"}
          className="m-2 hover:text-yellow-400 hover:underline"
        >
          About
        </Link>
        |
        <Link
          to={"/contact"}
          className="m-2 hover:text-yellow-400 hover:underline font-montserrat"
        >
          Contact
        </Link>
        |
        <Link
          to={"/policy"}
          className="m-2 hover:text-yellow-400 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
