import React from "react";
import codeImage from "../assets/G10.jpeg";
import PageSection from "./PageSection";
import GradientBtn from "./GradientBtn";
import TiltCard from "./TiltCard";

const SocialGame = () => {
  return (
    <PageSection name="developer API">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-1/2 hover:rotate-0">
        <div
              className="w-full  hover:rotate-0 relative"
              style={{ transform: "skewX(9deg)" }}
            >
              <div className="cursor-pointer relative">
                <TiltCard image={codeImage} />
              </div>
            </div>
          
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8  rounded-lg">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="block">
              <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
                This Is Social 
              </span>
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
              Gaming
              </span>
            </span>
          </h1>
          <div className="w-16 h-1 bg-thOrange my-4"></div>
          <p className="order-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          Teleios has been designed to give you the ultimate social experience. It doesn't matter 
          if you're a complete Rookie, grab yourself a cocktail, jump in the driver's seat & experience
           the pinnacle of experiential hospitality. We have different driving skill levels to suit all occasions and drivers, 
           so anyone can get behind the wheel and feel like a pro.
          </p>
          <GradientBtn
            className="ml-auto mt-4 capitalize text-sm py-2 px-3 mt-4"
            title="Booking Now"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default SocialGame;
