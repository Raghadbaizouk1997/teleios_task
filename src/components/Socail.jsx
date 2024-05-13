import React from "react";
import PageSection from "./PageSection";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <PageSection name="contact">
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-screen-lg grid grid-cols-4 gap-8">
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaLinkedin size={25} />
          </div>
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaTwitter size={25} />
          </div>
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaFacebook size={25} />
          </div>
          <div className="flex items-center justify-center rounded-full shadow-md shadow-thBlue hover:scale-105 duration-200 p-3 cursor-pointer">
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Social;
