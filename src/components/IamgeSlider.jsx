import { useState } from "react";
import { motion } from "framer-motion";
import G1 from "../assets/G1.jpeg";
import G2 from "../assets/G2.jpeg";
import G3 from "../assets/G3.jpeg";
import G4 from "../assets/G4.jpeg";
import G5 from "../assets/G5.jpeg";



import GradientBtn from "./GradientBtn";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [G1, G2, G3, G4, G5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "30%", height:"30%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <GradientBtn
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
          title="Back"
        />
      
        <GradientBtn
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
          title="Next"
        />
          
       
      </div>
    </div>
  );
};

export default ImageSlider;
