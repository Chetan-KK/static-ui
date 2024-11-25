import React, { useState } from "react";
import images from "../images";
import { FaUserAlt, FaRegClock, FaFileAlt, FaDesktop } from "react-icons/fa"; // Importing icons from react-icons
import styles from "./videoFusion.module.scss"

 

const tabs = [
  {
    title: "Face Replacement",
    description: ["Swap faces seamlessly", "Enhance realism in videos"],
    activeIcon: <img className="h-8 w-8" src={images.faceId} />,
    deactiveIcon: <img className="h-8 w-8" src={images.defaceId} />,
  },
  {
    title: "Lip Sync",
    description: ["Sync lips accurately", "Improve audience engagement"],
    activeIcon: <img className="h-8 w-8" src={images.activeLipSync} />,
    deactiveIcon: <img className="h-8 w-8" src={images.lipSync} />,
  },
  {
    title: "Head Replacement",
    description: ["Realistic head swapping", "Preserve original video quality"],
    activeIcon: <img className="h-8 w-8" src={images.activeHead} />,
    deactiveIcon: <img className="h-8 w-8" src={images.deactiveHead} />,
  },
  {
    title: "Real-Time",
    description: ["Instant processing", "Seamless user experience"],
    activeIcon: <img className="h-8 w-8" src={images.activeRealtime} />,
    deactiveIcon: <img className="h-8 w-8" src={images.deactiveRealtime} />,
  },
  {
    title: "High-Resolution",
    description: ["Maintain video quality", "Support for 4K videos"],
    activeIcon: <img className="h-8 w-8" src={images.activeHigh} />,
    deactiveIcon: <img className="h-8 w-8" src={images.deactiveHigh} />,
  },
  {
    title: "User Interface",
    description: ["User-friendly design", "Easy navigation"],
    activeIcon: <img className="h-8 w-8" src={images.activePen} />,
    deactiveIcon: <img className="h-8 w-8" src={images.deactivePen} />,
  },
];
const VideoFusion = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].title);


  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-col lg:flex-row justify-center mt-3 px-4 gap-10 lg:gap-32">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-md flex flex-col items-center lg:items-start">
            <div className="flex flex-row items-center mt-8">
              <img src={images.videofusionicon} />
              <div
                className="text-lg font-bold pl-2"
                style={{ color: "#00D1AF" }}
              >
                Video Fusion
              </div>
            </div>
            <div
              className="text-5xl mb-4 font-extrabold"
              style={{
                width: "355px",
              }}
            >
              Transform
              <div className="text-5xl font-extrabold">Ideas with Our</div>
              <div
                className="border-b-2"
                style={{ borderColor: "#00D1AF", width: "464px" }}
              >
                AI Video Generator
              </div>
            </div>
            <p className="mb-2 text-sm text-gray-500">
              Create stunning visuals effortlessly with our AI Video Generator!
            </p>
            <div className="flex space-x-6">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#00D1AF", width: "150px" }}
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
            src={images.videofusionSideImg}
            alt="API Graphic"
            // style={{ height: "240px" }}
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-11 pb-10"
        style={{ background: "#04B89A" }}
      >
        <div className="flex flex-col justify-center pt-11">
          <div className="text-4xl text-white font-bold text-center">
            Explore the Power of ModelsLab Video API
          </div>
          <div className="text-base pt-2 text-center text-gray-200">
            Experience the Future of AI Video with Advanced Capabilities
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-20 justify-center">
          {/* Card 1 */}
          <div
            className="p-4 rounded-3xl flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.messages}
                alt="Marketing & Advertising"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <div className="font-bold text-base text-white ">
              Cost-Effective Video Creation
            </div>
            <p className="text-gray-500 text-sm text-white pt-1">
              Affordable AI Video Generator for Fast, High-Quality Video
              Creation.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-5 rounded-3xl  flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.smallcaps}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <h3 className="font-bold text-base text-white">
              User-Friendly Interface
            </h3>
            <p className="text-gray-500 text-sm text-white pt-1">
              AI Video Generator with Easy, User-Friendly Interface for Quick
              Creation
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-5 rounded-3xl  flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.messageQuestion}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <h3 className="font-bold text-base text-white">
              Fast Rendering and Processing
            </h3>
            <p className="text-gray-500 text-sm text-white pt-1">
              Lightning-Fast Rendering & Processing with AI Video Generator!
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white p-5 rounded-3xl  flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.firstLine}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <h3 className="font-bold text-base text-white">Style Change</h3>
            <p className="text-gray-500 text-sm text-white pt-1">
              Effortlessly Change Styles with Our AI Video Generator!
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white p-5 rounded-3xl  flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.translate}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <h3 className="font-bold text-base text-white">
              Deepfake Creation
            </h3>
            <p className="text-gray-500 text-sm text-white pt-1">
              Generate Realistic Deepfakes Instantly with ModelsLab API
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="bg-white p-5 rounded-3xl  flex flex-col"
            style={{ backgroundColor: "#00D1AF" }}
          >
            <div className="flex justify-between">
              <img
                src={images.messageProgram}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <img
                src={images.export}
                alt="Marketing & Advertising"
                className="h-6 w-6 mb-10"
              />
            </div>
            <h3 className="font-bold text-base text-white">Lip-Sync Video</h3>
            <p className="text-gray-500 text-sm text-white pt-1">
              Create Engaging Lip-Sync Videos with Ease
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 px-4 gap-10 lg:gap-32">
        <img
          src={images.textToVideo}
          style={{ height: "350px", width: "350px" }}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-md flex justify-center items-center lg:items-start flex-col">
            <div className="flex flex-row items-center gap-4">
              <img src={images.data} />
              <h1 className="text-sm font-bold" style={{ color: "#00D1AF" }}>
                Text-to-Video API
              </h1>
            </div>
            <div className="text-3xl mb-4 mt-2 font-extrabold">
              Create Stunning Videos from Text
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Text-to-Video API to transform text into vibrant videos
            </p>
            <div className="flex space-x-6">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#00D1AF" }}
                  className="text-white text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <div>Start Using</div>
                </div>

                <div className="border text-black text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer">
                  Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-32 px-4 gap-10 lg:gap-32">
        <img
          src={images.imageToVideo}
          style={{ height: "350px", width: "350px" }}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-md flex justify-center items-center flex-col lg:items-start">
            <div className="flex flex-row items-center gap-4">
              <img src={images.imageToVideoIcon} />
              <h1 className="text-sm font-bold" style={{ color: "#00D1AF" }}>
                Image-to-Video API
              </h1>
            </div>
            <div className="text-3xl mb-4 mt-2 font-extrabold">
              Convert Your Images into motion
            </div>
            <p className="mb-6 text-sm text-gray-500">
              Turn your images into Dynamic videos easily with our
              Image-to-Video API.
            </p>
            <div className="flex">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#00D1AF" }}
                  className="text-white text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <div>Start Using</div>
                </div>

                <div className="border text-black text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer">
                  Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-center mt-16 lg:mt-32 pl-4 pr-4 md:pl-36 md:pr-32 py-10"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="flex flex-col items-center justify-center lg:flex-row bg-white rounded-3xl ">
          <div className="p-16 md:p-16">
            <div className="font-bold" style={{ color: "#00D1AF" }}>
              Introduction
            </div>
            <h2 className="text-3xl font-bold mb-4 leading-10 w-2/4">
              Introducing Deepfake
            </h2>
            <div
              className="list-inside space-y-2  text-xs"
              style={{ width: "350px" }}
            >
              Create videos with face-swapping using ModelsLab's DeepFake video
              maker.
            </div>
            <div className="flex pt-5">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#00D1AF" }}
                  className="text-white text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer"
                >
                  <div>Start Using</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={images.deepfakeIntro} style={{ height: "350px" }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-16 py-10 px-12">
        <div
          style={{ fontSize: "36px" }}
          className="font-extrabold text-center"
        >
          Features of Our Deepfake Generator
        </div>
        <div className="pt-2 text-base text-center text-gray-400">
          Easily switch faces in your videos with ModelsLab API
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
              className={`flex flex-col items-center cursor-pointer transition ${
                activeTab === tab.title ? "font-bold" : ""
              }`}
              style={{
                color: `${activeTab === tab.title ? "#00664E" : "#51BCAB"}`,
              }}
              onClick={() => setActiveTab(tab.title)}
            >
              <div className="mb-2">
                {/* Change icon based on active state */}
                {activeTab === tab.title ? tab.activeIcon : tab.deactiveIcon}
              </div>
              <span className="text-sm">{tab.title}</span>{" "}
              {/* Adjust text size for larger screens */}
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: "rgba(25, 197, 157, 0.3)" }}>
        <div>
          {activeTab === "Face Replacement" && (
            <>
              <div className="pl-10 p-10">
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  Face Replacement
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Swap faces seamlessly
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Enhance realism in videos
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "Lip Sync" && (
            <>
              <div className={styles.lipSyncContent}>
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  Lip Sync
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Swap faces seamlessly
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Enhance realism in videos
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "Head Replacement" && (
            <>
              <div className={styles.headContent}>
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  Head Replacement
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Realistic head swapping
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Preserve original video quality
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "Real-Time" && (
            <>
              <div className={styles.realtimeContent}>
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  Real-Time
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Instant processing
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Seamless user experience
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "High-Resolution" && (
            <>
              <div className={styles.highContent}>
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  High-Resolution
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Maintain video quality
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Support for 4K videos
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "User Interface" && (
            <>
              <div className={styles.userContent}>
                <div
                  className="pl-5 font-extrabold text-lg"
                  style={{ color: "#00664E" }}
                >
                  User Interface
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    User-friendly design
                  </div>
                </div>
                <div className="flex items-center pl-5 pt-2">
                  <img
                    src={images.right}
                    style={{ height: "10px", width: "10px" }}
                  />
                  <div className="text-black text-opacity-50 pl-3 text-sm">
                    Easy navigation
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center mt-16 py-10 px-12">
        <div
          style={{ fontSize: "36px" }}
          className="font-extrabold text-center"
        >
          Community is waiting for you
        </div>
        <div className="pt-3 text-base text-center text-gray-400">
          Explore Our AI Image Generator Tools for Creating Captivating AI
          Generated Art. Explore a world of infinite inspiration and take your
          artworks to new heights with our AI image generator tools.
        </div>
        <div className="flex justify-center pt-6 space-x-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 item-center">
            <div
              style={{ backgroundColor: "#00D1AF", width: "auto" }}
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
      <div className="grid grid-cols-3 gap-3">
        <img src={images.feed1} className="rounded-r-2xl" />
        <img src={images.feed2} className="rounded-2xl" />
        <img src={images.feed3} className="rounded-l-2xl" />
      </div>

      <div className="flex justify-center pt-10 pb-10">
        <div
          className="border text-black text-xs font-bold py-2 px-3 rounded flex justify-center items-center cursor-pointer"
          style={{ width: "150px" }}
        >
          <div>Check Our Feed</div>
        </div>
      </div>
    </div>
  );
};

export default VideoFusion;
