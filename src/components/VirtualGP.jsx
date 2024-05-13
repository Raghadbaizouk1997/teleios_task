import React, { useState } from "react";
import codeImage from "../assets/f5.png";
import { FaPlay } from "react-icons/fa";
import InfoSection from "./InfoSection";
import PageSection from "./PageSection";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

const VirtualGP = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const handleOverlayClick = () => {
    setIsVideoOpen(false);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl text-center mt-8 font-bold bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text"
      >
        <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
          Teleios
        </span>
      </motion.h1>

      <PageSection name="developer API">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <InfoSection
            title="Teleios Dome Virtual Grand Prix"
            description="The Virtual GP will mirror the ‘real-life’ Grand Prix and take you across all 24 race events on the 2024 Formula 1 event calendar : Every Thursday Before  Grand Prix at Teleios Dome."
            btnTitle="find out more"
          />
          <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
            <div onClick={handleOpenVideo} className="cursor-pointer relative">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={handleOpenVideo}
                className="cursor-pointer relative"
              >
                <TiltCard image={codeImage} />
                <FaPlay className="absolute text-4xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            </div>
          </div>
        </div>
        {isVideoOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
            onClick={handleOverlayClick}
          >
            <div
              className="bg-white rounded-lg p-4 relative"
              onClick={handleVideoClick}
            >
              <video
                src="https://dud8cevzzy9qg.cloudfront.net/videos/BRAND_VIDEO_GENERIC_16X9_APPROVED-LOWRES.mp4"
                controls
                autoPlay
                className="w-full h-full"
                style={{ maxWidth: "800px", maxHeight: "600px" }}
                onEnded={handleCloseVideo}
              />
            </div>
          </div>
        )}
      </PageSection>
    </>
  );
};

export default VirtualGP;
