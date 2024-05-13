import React from "react";
import Logo from "../assets/teleios_logo.png";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Menu",
      subMenu: [
        {
          id: 1,
          title: "Home",
        },
        {
          id: 2,
          title: "Demo",
        },
        {
          id: 3,
          title: "Simulator",
        },
        {
          id: 4,
          title: "Booking",
        },
        {
          id: 5,
          title: "FAQ",
        },
        {
          id: 6,
          title: "Contact",
        },
      ],
    },
    {
      id: 2,
      title: "Support",
      subMenu: [
        {
          id: 1,
          title: "Events",
        },
        {
          id: 2,
          title: "Google Map Location",
        },
        {
          id: 3,
          title: "Terms and conditions",
        },
        {
          id: 4,
          title: "Privacy Policies",
        },
      ],
    },
    {
      id: 3,
      title: "Address",
      subMenu: [
        {
          id: 1,
          title: "Grape 1",
        },
        {
          id: 2,
          title: "Grape 2",
        },
        {
          id: 3,
          title: "Grape 3",
        },
      ],
    },
    {
      id: 4,
      title: "Contact",
      subMenu: [
        {
          id: 1,
          title: "Stuff 1",
        },
        {
          id: 2,
          title: "Stuff 2",
        },
        {
          id: 3,
          title: "Stuff 3",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto">
        <div className="flex">
          <img src={Logo} alt="Logo" style={{ width: "200px" }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
            {menu.map(({ id, title, subMenu }) => (
              <div key={id}>
                <h1 className="text-lg font-bold">{title}</h1>
                <ul className="mt-1">
                  {subMenu.map(({ id, title, link }) => (
                    <li key={id}>
                      <a href={link}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="my-12 text-center text-sm text-thBlue">
          © Copyright 2023 Teleios Global FZ-LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
