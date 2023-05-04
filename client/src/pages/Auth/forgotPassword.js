import React, { useState } from "react";
import { Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth.js";
import { styles } from "../../utils/style";
const ForgotPassword = () => {
  const [email, SetEmail] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, newPassword, answer };
      const res = await axios.post(
        `http://localhost:8080/api/v1/auth/forgot-password`,
        userData
      );
      if (res.data.ok) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password"}>
      <div
        className={`sm:w-[50%] w-[90%] mt-[10vh] mx-auto text-center flex flex-col`}
      >
        <h3 className="font-montserrat xl:text-[40px] mb-5">Reset Password</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
            className="xl:p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your email"
            required
          />
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            type="text"
            className="xl:p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Enter your favourite sport name"
            required
          />
          <input
            value={newPassword}
            onChange={(e) => SetNewPassword(e.target.value)}
            type="password"
            className="xl:p-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your password"
            required
          />

          <button
            type="submit"
            className="xl:p-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full xl:text-[28px]"
          >
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
