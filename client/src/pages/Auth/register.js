import React, { useState } from "react";
import { Layout } from "../../components";
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'

const Register = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, SetPhone] = useState("");
  const [address, SetAddress] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const userData = {name, email, password, phone, address}
        const res = await axios.post(`http://localhost:8080/api/v1/auth/register`, userData)
        if(res.data.ok){
            toast.success(res.data.message)
            navigate('/login')
        }else {
            toast.error(res.data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
    }
  }

  return (
    <Layout title={"Register - Ecommer App"}>
      <div className={`sm:w-[50%] w-[90%] mx-auto text-center flex flex-col`}>
        <h3 className="mt-8 font-semibold sm:text-[30px] text-[24px] mb-4">
          Register for Ecommer App
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => SetName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your name"
            required
          />
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your email"
            required
          />
          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your password"
            required
          />
          <input
            value={phone}
            onChange={(e) => SetPhone(e.target.value)}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your phone"
            required
          />
          <input
            value={address}
            onChange={(e) => SetAddress(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Your address"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
