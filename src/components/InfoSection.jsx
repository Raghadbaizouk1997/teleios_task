import React from "react";
import { motion } from "framer-motion";
import GradientBtn from "./GradientBtn";

const InfoSection = ({ title, description, btnTitle }) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
      <motion.div
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        <h1 className="text-5xl">{title}</h1>
        <p className="border-l-4 pl-4 pt-4 odd:border-thOrange even:border-thBlue">
          {description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }} 
      >
        <GradientBtn className="ml-4 capitalize" title={btnTitle} />
      </motion.div>
    </div>
  );
};

export default InfoSection;
