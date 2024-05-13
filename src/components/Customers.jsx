import React from "react";
import PageSection from "./PageSection";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaSnapchatGhost,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Customers = () => {
  const variants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const facts = [
    {
      id: 1,
      icon: <FaWhatsapp size={25} />,
      subtitle: "Chat on Whatsapp",
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt size={25} />,
      subtitle: "Get Directions",
    },
    {
      id: 3,
      icon: <FaCalendarAlt size={25} />,
      subtitle: "Book Now",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchatGhost size={25} />,
      title: "snapchat",
    },
  ];

  return (
    <div style={{ marginTop: '500px' }}>
      <PageSection
        name="customers"
        title="Customers"
        subtitle={`You can find out more information through:`}
        
      >
        <>
          <div className="grid lg:grid-cols-3 text-center gap-8 mb-16 justify-center items-center" >
            {facts.map(({ id, icon, subtitle }, index) => (
              <motion.div
                key={id}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={index}
                className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg flex flex-col items-center justify-center"
              >
                {icon}
                <p>{subtitle}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
            {companies.map(({ id, icon, title }) => (
              <div
                className="flex items-center capitalize p-4 rounded-lg"
                key={id}
              >
                {icon}
                <p className="ml-2">{title}</p>
              </div>
            ))}
          </div>
        </>
      </PageSection>
    </div>
  );
};

export default Customers;
