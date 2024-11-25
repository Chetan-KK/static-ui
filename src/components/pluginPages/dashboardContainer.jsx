import React, { useState } from "react";
import { FaBars, FaXRay } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const DashboardContainer = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    { src: "/pluginPage/icons/plugins.svg", label: "All Plugins" },
    { src: "/pluginPage/icons/wifi.svg", label: "Imagen" },
    { src: "/pluginPage/icons/brush.svg", label: "Videofusion" },
    { src: "/pluginPage/icons/cpu.svg", label: "Audiogen" },
    { src: "/pluginPage/icons/doller.svg", label: "3Dverse" },
  ];

  return (
    <div
      className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen pt-14 md:pt-5 ${className}`}
      {...props}
    >
      <button
        className="md:hidden fixed left-1 top-1 z-10 bg-white p-3 border-[#E5E7EB] border rounded-lg"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FaBars className="h-5 w-5" />
      </button>
      <div
        className="p-2 space-y-3 top-0 md:w-auto w-[80vw] md:shadow-none transition-all shadow-md z-20 fixed bg-white h-screen md:h-auto md:static "
        style={{ left: isOpen ? "0%" : "-100%" }}
      >
        <button
          className="md:hidden m-3 mb-0"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <FaXmark className="h-5 w-5" />
        </button>
        {buttons.map((button, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-start gap-5 p-3 rounded-md border-[#E5E7EB] hover:bg-gray-100"
            // active styles
            style={
              {
                //   borderWidth: true ? "1px" : "0px",
              }
            }
          >
            <img src={button.src} alt="" /> {button.label}
          </button>
        ))}
      </div>
      <div className="bg-[#F9F9F9] p-5 border-t border-l border-r border-[#E5E7EB] rounded-tl-3xl rounded-tr-3xl">
        {children}
      </div>
    </div>
  );
};

export default DashboardContainer;
