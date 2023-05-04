import React, { useState } from "react";
import "./pages.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Dropdown = () => {
  
  const [drop, setDrop] = useState(false);
  const [auth, setAuth] = useAuth()
  const [title, setTitle] = useState(auth?.user?.name);
  const navigate = useNavigate()
  const toggleHandler = () => setDrop((prev) => !prev);
  const dashboardHandler = () => {
    setDrop(false);
    navigate('/dashboard')
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
    toast.success("Logout Successfully");
  };
  const logoutHandler = async (e) => {
    e.preventDefault()
    setTitle('Logout')
    setDrop(false)
    await handleLogout()
}
  return (
    <div>
      <div className="border-solid xl:text-[20px] dropdown p-1 xl:p-2 flex items-center">
        {title}
        <div onClick={toggleHandler} className="cursor-pointer">
          {drop ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
      </div>
      {drop && (
        <div className="bg-stone-700 p-2 rounded-md absolute top-19 md:right-[7%] w-[120px]">
          <ul>
            <li className="text-white font-montserrat cursor-pointer text-[20px]" onClick={dashboardHandler}>
                Dashboart
            </li>
            <li
              className="text-white font-montserrat cursor-pointer"
            onClick={logoutHandler}
            >
              <p onClick={handleLogout} className=" text-[20px]">Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
