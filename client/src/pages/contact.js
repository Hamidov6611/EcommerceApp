import React from "react";
import { Layout } from "../components";
import { styles } from "../utils/style";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import CallIcon from "@mui/icons-material/Call";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className={`${styles.flexCenter} flex sm:flex-row flex-col w-full`}>
        <div className="sm:p-16 p-3 sm:w-[70%] w-full">
          <img
            src="https://emapta.com/wp-content/uploads/2020/08/emapta-header-technical-support-help-desk-service-desk.jpg"
            alt="contact service"
          />
        </div>
        <div className="sm:p-4 flex flex-col sm:w-[30%] w-full p-6">
          <div className=" p-4 my-3 bg-primary text-white w-[100%] text-center text-[24px] ">
            <p className="font-montserrat">Contact Us</p>
          </div>
          <p className="font-montserrat">
            Any query and info product fleel free to call anytime we 24/7
            vaialable{" "}
          </p>
          <div className="flex flex-row my-3">
            <LocalPostOfficeIcon />{" "}
            <p className="font-montserrat ml-3">
              www.dilmuroddelitot@gmail.com
            </p>
          </div>
          <div className="flex flex-row  my-3">
            <CallIcon />:
            <p className="font-montserrat ml-3">+998 (94) 323 22-10</p>
          </div>
          <div className="flex flex-row my-3">
            <HeadsetMicIcon />:
            <p className="font-montserrat ml-3 ">1800-0000-0000 (tool free)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
