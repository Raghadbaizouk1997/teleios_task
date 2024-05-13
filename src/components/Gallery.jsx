import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "./IamgeSlider";

const Gallery = () => {
  return (
    <>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl text-center mt-8 font-bold "
      >
        <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
          Our Gallery
        </span>
      </motion.h1>
      <ImageSlider />
    </>
  );
};

export default Gallery;
