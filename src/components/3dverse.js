import React, { useState } from "react";
import images from "../images";
import { FaUserAlt, FaRegClock, FaFileAlt, FaDesktop } from "react-icons/fa"; // Importing icons from react-icons
import styles from "./videoFusion.module.scss";

const tabs = [
  {
    title: "Film",
    description: [
      "Craft lifelike characters, stunning environments, and dynamic effects for immersive storytelling.",
    ],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.filmVideo}
      />
    ),
  },
  {
    title: "Gaming",
    description: ["Sync lips accurately", "Improve audience engagement"],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.gaming}
      />
    ),
  },
  {
    title: "Product Design",
    description: ["Realistic head swapping", "Preserve original video quality"],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.product}
      />
    ),
  },
  {
    title: "Real-Time",
    description: ["Instant processing", "Seamless user experience"],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.clock}
      />
    ),
  },
  {
    title: "Customization",
    description: ["Maintain video quality", "Support for 4K videos"],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.customization}
      />
    ),
  },
  {
    title: "Animation",
    description: ["User-friendly design", "Easy navigation"],
    activeIcon: (
      <img
        style={{
          height: "60px",
          width: "60px",
        }}
        src={images.animation}
      />
    ),
  },
];
const ThreedVerse = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true); // Add bounce class
    setTimeout(() => {
      setIsBouncing(false); // Remove bounce class after 1s
    }, 500); // 1000ms = 1 second
  };


  return (
    <div className="container mx-auto px-5 md:px-8">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col lg:flex-row justify-center mt-3 px-4 gap-10 lg:gap-32">
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-md flex flex-col items-center lg:items-start">
              <div className="flex flex-row items-center mt-8">
                <img src={images.threedverseIcon} />
                <div
                  className="text-lg font-bold pl-2"
                  style={{ color: "#DE0004" }}
                >
                  3DVerse
                </div>
              </div>
              <div
                className="text-5xl mb-4 font-extrabold pt-1"
                style={{
                  width: "473px",
                }}
              >
                <div className="flex justify-center items-center gap-2">
                  <div>Instantly</div>
                  <div
                    className="border-b-2"
                    style={{ borderColor: "#DE0004" }}
                  >
                    Create 3D
                  </div>
                </div>
                <div className="pt-2">Models with AI</div>
              </div>
              <p className="mb-6 text-sm text-gray-500">
                Easily design and visualize 3D models using ModelsLab's AI
                tools.
              </p>
              <div className="flex space-x-6">
                <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                  <div
                    style={{ backgroundColor: "#DE0004", width: "150px" }}
                    className="text-white text-xs font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <div>Watch Video</div>
                    <img
                      src={images.playCircle}
                      className="pl-2"
                      alt="Play Circle"
                    />
                  </div>

                  <div
                    className="bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
                    style={{ width: "150px" }}
                  >
                    <img
                      src={images.basketball}
                      className="pr-2"
                      alt="Basketball"
                    />
                    Playground
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src={images.threedverseSideImg}
              alt="API Graphic"
            // style={{ height: "240px" }}
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center mt-16 lg:mt-32 pl-4 pr-4 md:pl-36 md:pr-32 py-10"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row bg-white rounded-3xl ">
            <div className="p-16 md:p-16">
              <div className="font-bold" style={{ color: "#DE0004" }}>
                Introduction
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-10 w-2/4">
                Introducing 3DVerse
              </h2>
              <div
                className="list-inside space-y-2  text-xs"
                style={{ width: "350px" }}
              >
                Enter ModelsLab's 3DVerse and easily create 3D design
              </div>
              <div
                style={{ width: "150px" }}
                className="border text-black mt-4 text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
              >
                <div className="font-bold">Coming soon</div>
              </div>
            </div>
            <div>
              <img src={images.threedverseIntro} style={{ height: "350px" }} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-16 py-10 px-12">
          <div
            style={{ fontSize: "36px" }}
            className="font-extrabold text-center"
          >
            What can you do using 3D APIs
          </div>
          <div className="pt-2 text-lg text-center text-gray-400">
            Easily create, customize, and render 3D models for any project.
          </div>
        </div>

        <div className="py-4 px-4 md:px-20">
          {" "}
          {/* Adjust padding for mobile and desktop */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {" "}
            {/* Stack vertically on mobile and horizontally on larger screens */}
            {tabs.map((tab) => (
              <div
                key={tab.title}
                className={`flex flex-col items-center cursor-pointer transition ${activeTab === tab.title ? "font-bold" : ""
                  }`}
                style={{
                  color: `${activeTab === tab.title ? "#000000" : "#808080"}`,
                }}
                onClick={() => setActiveTab(tab.title)}
              >
                <div
                  className={`mb-2 ${activeTab === tab.title
                      ? ` ${isBouncing ? "animate-bounce" : ""}`
                      : `""`
                    }`}
                  onClick={handleClick}
                >
                  {/* Change icon based on active state */}
                  {tab.activeIcon}
                </div>
                <span className="text-sm md:text-base font-semibold">
                  {tab.title}
                </span>{" "}
                {/* Adjust text size for larger screens */}
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: "#FFC2C3" }}>
          <div>
            {activeTab === "Film" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    Film
                  </div>
                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Gaming" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    Lip Sync
                  </div>
                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Product Design" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    Head Replacement
                  </div>

                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Real-Time" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    Real-Time
                  </div>

                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Customization" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    High-Resolution
                  </div>

                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Animation" && (
              <>
                <div className="pl-10 p-10">
                  <div
                    className="pl-5 font-extrabold text-lg"
                    style={{ color: "#000000" }}
                  >
                    User Interface
                  </div>

                  <div className="flex items-center pl-5 pt-2">
                    <div className="text-black text-opacity-50">
                      Craft lifelike characters, stunning environments, and
                      dynamic effects for immersive storytelling.
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 gap-10 lg:gap-32">
          <img
            src={images.textTo3D}
            style={{ height: "350px", width: "350px" }}
          />
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-md flex justify-center items-center lg:items-start flex-col">
              <div className="flex flex-row items-center gap-4">
                <img src={images.textTo3dIcon} />
                <h1 className="text-sm font-bold" style={{ color: "#E51837" }}>
                  Text-to-3D API
                </h1>
              </div>
              <div
                className="text-3xl font-extrabold pt-2"
                style={{
                  width: "350px",
                }}
              >
                Generate 3D Models from Text
              </div>
              <p className="pt-2 mb-3 text-sm text-gray-500">
                Use ModelsLab’s Text-to-3D API to easily add dynamic 3D content
                to your app/web.
              </p>
              <div className="flex space-x-6">
                <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                  <div
                    style={{ backgroundColor: "#DE0004" }}
                    className="text-white text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                  >
                    <div>Try it</div>
                  </div>

                  <div
                    className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                    style={{ width: "150px" }}
                  >
                    Documentation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 gap-10 lg:gap-48">
          <img
            src={images.imageTo3d}
            style={{ height: "350px", width: "350px" }}
          />
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-md flex justify-center items-center lg:items-start flex-col">
              <div className="flex flex-row items-center gap-4">
                <img src={images.imageTo3dIcon} />
                <h1 className="text-sm font-bold" style={{ color: "#E51837" }}>
                  Image-to-3D API
                </h1>
              </div>
              <div
                className="text-3xl font-extrabold pt-2"
                style={{
                  width: "350px",
                }}
              >
                Turn Images into 3D Models
              </div>
              <p className="pt-2 mb-3 text-sm text-gray-500">
                Use ModelsLab’s API to create 3D models from images.
              </p>
              <div className="flex space-x-6">
                <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                  <div
                    style={{ backgroundColor: "#DE0004" }}
                    className="text-white text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                  >
                    <div>Try it</div>
                  </div>

                  <div
                    className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                    style={{ width: "150px" }}
                  >
                    Documentation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center mt-16 py-10 px-12"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <div
            className="flex flex-col items-center justify-center pb-5   pt-5"
            style={{ backgroundColor: "#F9F9F9" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
              <div
                className="border rounded-xl ml-4 bg-white"
                style={{ width: "350px" }}
              >
                <div className="p-5">
                  <div className="font-bold">Explore the Documentation</div>
                  <div className="text-gray-500">
                    Check out ModelsLab 3D Model API documentation for
                    integration, formats, and customization.
                  </div>
                </div>
                <div className="flex justify-end items-end pt-2">
                  <img src={images.exploreDoc} />
                </div>
              </div>
              <div
                className="border rounded-xl ml-4 bg-white"
                style={{ width: "350px" }}
              >
                <div className="p-5">
                  <div className="font-bold">
                    Set Up Your Development Environment
                  </div>
                  <div className="text-gray-500">
                    Install libraries for 3D model API setup and smooth
                    integration.
                  </div>
                </div>
                <div
                  // className="pt-10"
                  className="flex justify-end items-end pt-2"
                // style={{ height: "132px" }}
                >
                  <img src={images.setup3D} />
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-between border rounded-xl ml-4 bg-white"
                style={{ width: "350px" }}
              >
                <div className="p-5">
                  <div className="font-bold">Make Your First API Call</div>
                  <div className="text-gray-500">
                    Retrieve 3D models with your first API call easily.
                  </div>
                </div>
                <div
                  className="flex justify-center items-center"
                // style={{ height: "132px" }}
                >
                  <img
                    src={images.apiCall}
                  // style={{ height: "80px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-24 justify-center">
            <div className="border rounded-xl bg-white w-full max-w-lg">
              <div className="p-5">
                <div className="font-bold text-lg">
                  Customize and Manipulate 3D Models
                </div>
                <div className="text-gray-500">
                  Personalize and control 3D models with ModelsLab API.
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  src={images.explore}
                  alt="Documentation Graphic"
                  className="" // Responsive height
                />
              </div>
            </div>
            <div className="border rounded-xl bg-white w-full max-w-lg">
              <div className="p-5">
                <div className="font-bold text-lg">Integrate and Deploy</div>
                <div className="text-gray-500">
                  Import 3D models easily into your app before launch.
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={images.integrate}
                  alt="Documentation Graphic"
                  className="" // Responsive height
                />
              </div>
            </div>
          </div>
          <div
            style={{ fontSize: "36px" }}
            className="font-extrabold text-center mt-16"
          >
            Community is waiting for you
          </div>
          <div className="pt-3 text-lg text-center text-gray-400">
            Explore Our AI Image Generator Tools for Creating Captivating AI
            Generated Art. Explore a world of infinite inspiration and take your
            artworks to new heights with our AI image generator tools.
          </div>
          <div className="flex justify-center pt-6 space-x-6">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 item-center">
              <div
                style={{ backgroundColor: "#5865F2", width: "auto" }}
                className="text-white text-xs font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={images.discord} className="pr-2" alt="Play Circle" />
                <div>Join Our Community</div>
              </div>

              <div
                className="bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
                style={{ width: "auto" }}
              >
                Monetize Models
                <img
                  src={images.dollarCircle}
                  className="pl-2"
                  alt="Basketball"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 gap-3 rounded-lg pt-10"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          {/* <div className="pt-6 pb-4 pr-6 bg-white border rounded-tr-lg rounded-br-lg">
            <img src={images.versefeed1} className="h-32" />
            <div className="flex justify-end items-center pt-14">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div> */}
          <div className="flex p-4 justify-between bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed2} className="rounded-r-2xl" />
            <div className="flex justify-end items-center pt-12">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "200px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed3} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed4} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed5} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed6} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed7} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between p-4 bg-white border rounded-lg rounded-lg flex-col">
            <img src={images.versefeed8} className="rounded-r-2xl" />
            <div className="flex justify-center pt-10">
              <div
                className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
                style={{ width: "150px" }}
              >
                <img src={images.eye} className="pr-2" />
                <div>View in 3D</div>
              </div>
            </div>
          </div> */}
        </div>

        <div
          className="flex justify-center pt-10 pb-10"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <div
            className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
            style={{ width: "150px" }}
          >
            <div>Check Our Feed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreedVerse;
