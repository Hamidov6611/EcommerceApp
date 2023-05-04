import React, { useState, useEffect } from "react";
import { styles } from "../utils/style";
import { Link, useNavigate } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { useAuth } from "../context/auth.js";
import toast from "react-hot-toast";
import "../index.css";
import Dropdown from "../pages/dropdown";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const toggleHandler = () => setToggleMenu((prev) => !prev);
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   setAuth({
  //     ...auth,
  //     user: null,
  //     token: "",
  //   });
  //   localStorage.removeItem("auth");
  //   navigate("/login");
  //   toast.success("Logout Successfully");
  // };
  return (
    <div
      className={`${styles.flexStart} md:flex-row items-center bg-primary text-lightWhite h-[10vh]`}
    >
      <div className={`w-[70%] p-4`}>
        <Link to={"/"} className={` ${styles.paragraph} text-white`}>
          DimaWeb
        </Link>
      </div>
      <div
        className={`w-[30%] ${styles.flexend} justify-between hidden md:flex`}
      >
        <Link
          to={"/"}
          className={`xl:text-[24px] ${styles.paragraph} mx-2 hover:text-white transition-all duration-500 hover:underline`}
        >
          Home
        </Link>
        <Link
          to={"/"}
          className={`xl:text-[24px] ${styles.paragraph} mx-2 hover:text-white transition-all duration-500 hover:underline`}
        >
          Category
        </Link>
        {!auth.user ? (
          <>
            <Link
              to={"/register"}
              className={`xl:text-[24px] ${styles.paragraph} mx-1  hover:text-white transition-all duration-500`}
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className={`xl:text-[24px] ${styles.paragraph} mx-1  hover:text-white transition-all duration-500 `}
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Dropdown />
          </>
        )}
        <Link
          to={"/cart"}
          className={`xl:text-[24px] ${styles.paragraph} mr-3 hover:underline hover:text-white`}
        >
          Cart(0)
        </Link>
      </div>
      {auth.user && (
        <div>
          <div
            className="mr-16 md:mr-0 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Dropdown />
          </div>
        </div>
      )}
      <div
        className="md:hidden text-white right-5 absolute cursor-pointer "
        onClick={toggleHandler}
      >
        {toggleMenu ? <DehazeIcon /> : <ClearIcon />}
      </div>

      {!toggleMenu && (
        <div className="md:hidden flex justify-around ml-0  top-[10vh] absolute bg-primary w-full py-3 anim">
          <Link
            to={"/"}
            className={` ${styles.paragraph} mx-1 hover:text-white transition-all duration-500`}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className={` ${styles.paragraph} mx-1 hover:text-white transition-all duration-500`}
          >
            Category
          </Link>
          {!auth.user && (
            <div className="items-center">
              <Link
                to={"/register"}
                className={` ${styles.paragraph} mx-2 hover:text-white transition-all duration-500`}
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className={` ${styles.paragraph} mx-2  hover:text-white transition-all duration-500 `}
              >
                Login
              </Link>
            </div>
          )}
          <Link to={"/cart"} className={` ${styles.paragraph} mx-1`}>
            Cart(0)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
