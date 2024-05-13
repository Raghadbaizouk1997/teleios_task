import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Initially, the video is playing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    handleVideoPause(); // Pause the video when the modal is closed
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src="https://dud8cevzzy9qg.cloudfront.net/videos/BRAND_VIDEO_GENERIC_16X9_APPROVED-LOWRES.mp4"
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleCloseModal} // Close modal when clicked outside the video
        >
          <video
            controls
            autoPlay
            src="https://dud8cevzzy9qg.cloudfront.net/videos/BRAND_VIDEO_GENERIC_16X9_APPROVED-LOWRES.mp4"
            className="max-w-full max-h-full"
          />
        </div>
      )}

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">Teleios</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          Dome <span className="text-5xl text-center mt-8 font-bold bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">Virtual Grand</span> Prix
        </h1>

        <div className="flex flex-row justify-center items-center">
          <GradientBtn
            className="capitalize mx-12"
            title="Watch and Listen"
            onClick={handleOpenModal} // Open the modal
          />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
