import React from "react";

const PageSection = ({ name, title, subtitle, fullWidth, margin, children }) => {
  const maxWidthClass = fullWidth ? "" : "max-w-screen-xl";
  const marginClass = margin ? "" : "mx-8";
  console.log(fullWidth);
  return (
    <div name={name} className={`h-fit mx-auto ${maxWidthClass}`}>
      <div  className={`my-32  text-center lg:text-left ${marginClass}`}>
        <h1 className="text-5xl"><span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">{title}</span></h1>
        <p className="mt-8 mb-16">{subtitle}</p>

        {children}
      </div>
    </div>
  );
};

export default PageSection;
