import React from "react";
import codeImage from "../assets/f5.png";
import PageSection from "./PageSection";
import { motion } from "framer-motion";
import GradientBtn from "./GradientBtn";

const Booking = () => {
  return (
    <>
      <PageSection name="developer API" fullWidth={true} margin={true}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8  rounded-lg">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="block">
                <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
                  Teleios Dome
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
                  & Virtual Grand Prix
                </span>
              </span>
            </h1>
            <div className="w-16 h-1 bg-thOrange my-4"></div>
            <p className="order-l-4 pl-4 odd:border-thOrange even:border-thBlue">
              The Virtual GP will mirror the ‘real-life’ Grand Prix and take you
              across all 24 race events on the 2024 Formula 1 event calendar :
              Every Thursday Before  Grand Prix at Teleios Dome.
            </p>
            <GradientBtn
              className="ml-auto mt-4 capitalize text-sm py-2 px-3 t-4"
              title="Booking Now"
            />
           
          </div>
          <div className="w-full lg:w-1/2 relative">
            <motion.img
              src={codeImage}
              alt="F1 Image"
              className="absolute inset-0 object-cover border-l-2 border-t-2 border-b-2 border-thOrange rounded-tl-2xl rounded-bl-2xl left-0"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default Booking;
