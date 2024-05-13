import React from "react";
import GradientBtn from "./GradientBtn";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import teleios from "../assets/teleios_logo.png";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "Experience",
      description: "Discover new things",
      subMenu: ["Submenu item 1", "Submenu item 2", "Submenu item 3"],
    },
    {
      id: 2,
      link: "Demo",
      description: "Try it out",
      subMenu: ["Submenu item 1", "Submenu item 2", "Submenu item 3"],
    },
    {
      id: 3,
      link: "dsimulator",
      description: "Simulate your dreams",
      subMenu: ["Submenu item 1", "Submenu item 2", "Submenu item 3"],
    },
    {
      id: 4,
      link: "Event",
      description: "Join our events",
      subMenu: ["Submenu item 1", "Submenu item 2", "Submenu item 3"],
    },
    {
      id: 5,
      link: "FAQ",
      description: "Frequently asked questions",
      subMenu: ["Submenu item 1", "Submenu item 2", "Submenu item 3"],
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <img src={teleios} alt="Anton Logo" className="h-20" />
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link, subMenu }) => (
                <li
                  key={id}
                  className="relative p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      className="text-xs"
                    >
                      {link}
                    </motion.div>
                  </Link>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-black text-white py-2 px-4 left-0 top-full w-max"
                  >
                    {subMenu.map((item, index) => (
                      <div key={index} className="hover:text-thBlue">
                        {item}
                      </div>
                    ))}
                  </motion.div>
                </li>
              ))}
            </ul>
            <GradientBtn className="ml-4 capitalize" title="sign In" />
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, top: "-100%" }}
        animate={{ opacity: isMenuShown ? 1 : 0, top: isMenuShown ? "24px" : "-100%" }}
        transition={{ duration: 0.5 }}
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 rounded-b-2xl`}
      >
        <ul>
          {links.map(({ id, link, description }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {description}
                </motion.div>
              </Link>
            </li>
          ))}
          <GradientBtn className="mt-10 capitalize" title="Book Now" />
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
