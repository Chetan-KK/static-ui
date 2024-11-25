import React, { useState } from "react";
import images from "../images";
import { FaUserAlt, FaRegClock, FaFileAlt, FaDesktop } from "react-icons/fa"; // Importing icons from react-icons

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

const cards = [
  {
    title: "zephyr-7b-beta",
    description: "Zephyr is a series of language models that are trained ..",
  },
  {
    title: "zephyr-7b-beta",
    description: "Zephyr is a series of language models that are trained ..",
  },
  {
    title: "zephyr-7b-beta",
    description: "Zephyr is a series of language models that are trained ..",
  },
  {
    title: "zephyr-7b-beta",
    description: "Zephyr is a series of language models that are trained ..",
  },
  {
    title: "zephyr-7b-beta",
    description: "Zephyr is a series of language models that are trained ..",
  },
];

const LLM = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <div style={{ backgroundColor: "#F9F9F9" }} className="py-20">
      <div className="container mx-auto px-5 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-md flex flex-col items-center lg:items-start">
              <div className="flex flex-row items-center mt-8">
                <img src={images.llmIcon} />
                <div
                  className="text-lg font-bold pl-2"
                  style={{ color: "#DCB000" }}
                >
                  LLMaster
                </div>
              </div>
              <div
                className="text-5xl mb-4 font-extrabold pt-3.5"
                style={{
                  width: "500px",
                }}
              >
                Master Uncensored
                <div
                  className="border-b-2 pt-2"
                  style={{ borderColor: "#DCB000", width: "463px" }}
                >
                  LLM Conversations
                </div>
              </div>
              <p className="mb-6 text-sm text-gray-500">
                Unlock limitless LLM-powered interactions effortlessly.
              </p>
              <div className="flex space-x-6">
                <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                  <div
                    style={{ backgroundColor: "#DCB000", width: "150px" }}
                    className="text-white text-xs font-semibold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <div>Watch Video</div>
                    <img
                      src={images.playCircle}
                      className="pl-2"
                      alt="Play Circle"
                    />
                  </div>

                  <div
                    className="bg-gray-800 text-white text-xs font-semibold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer"
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
              src={images.llmSideImg}
              alt="API Graphic"
              style={{ height: "409px", width: "432px" }}
            />
          </div>
        </div>
        <div style={{ background: "#CEA500" }}>
          <div
            className="flex flex-col justify-center items-center mt-10 pb-10"
            style={{ background: "#CEA500" }}
          >
            <div className="flex flex-col justify-center mt-12">
              <div className="text-4xl text-white font-bold text-center">
                Explore the Power of Our LLM Technology
              </div>
              <div className="text-base text-center text-gray-200 pt-2">
                Experience the Future of Chat with Advanced Capabilities
              </div>
            </div>
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-20 justify-center">
              {/* Card 1 */}
              <div
                className="p-4 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <div className="font-bold text-sm text-white ">
                  Conversational Interaction
                </div>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Engage in natural dialogues
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-white p-5 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <h3 className="font-bold text-sm text-white">
                  Text Generation
                </h3>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Create articles, stories, and more.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-white p-5 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <h3 className="font-bold text-sm text-white">
                  Question Answering
                </h3>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Provide detailed answers on diverse topics.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="bg-white p-5 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <h3 className="font-bold text-sm text-white">
                  Language Translation
                </h3>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Translate text seamlessly.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className="bg-white p-5 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <h3 className="font-bold text-sm text-white">Summarization</h3>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Select from multiple models for tailored conversations.
                </p>
              </div>

              {/* Card 6 */}
              <div
                className="bg-white p-5 rounded-[30px] flex flex-col"
                style={{ backgroundColor: "#DCB000" }}
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
                <h3 className="font-bold text-sm text-white">
                  Code Assistance
                </h3>
                <p className="text-gray-500 text-xs text-white pt-1">
                  Help with programming tasks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center md:m-20 m-5 md:mt-16 mt-10">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div className="md:m-10">
              <h6 className="font-bold" style={{ color: "#DCB000" }}>
                Key Feature
              </h6>
              <h2 className="text-4xl font-bold mb-1 leading-10 w-3/4">
                Why Choose Our LLM Chat Experience?
              </h2>
              <ul className="list-inside space-y-2 pt-6">
                <li>
                  <strong>1. Uncensored Chat</strong>
                  <br />
                  <div className="text-gray-400  text-sm">
                    Trained on a model that provides unfiltered, unrestricted
                    conversations.
                  </div>
                </li>
                <li className="pt-6">
                  <strong>2. Dataset-Driven LLM Chat</strong>
                  <br />
                  <div className="text-gray-400 text-sm">
                    Select from multiple models for tailored conversations.
                  </div>
                </li>
                <li className="pt-6">
                  <strong>3. Create Your Own Chatbot</strong>
                  <br />
                  <div className="text-gray-400 text-sm">
                    Build chatbots for various purposes, including customer
                    support and adult chats.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={images.llmSide}
                style={{ height: "553px", width: "519px" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-32 pb-10">
          <div className="flex justify-center lg:justify-start">
            <img
              src={images.uncensoredChat}
              style={{ height: "350px", width: "350px" }}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-md flex flex-col items-center lg:items-start">
              <div className="text-sm font-bold" style={{ color: "#DCB000" }}>
                Uncensored Chat API
              </div>
              <div className="text-3xl font-extrabold pt-2">
                Discover Uncensored Chat
              </div>
              <p className="pt-2 mb-3 text-sm text-gray-500">
                Experience free speech with our Uncensored Chat API!
              </p>
              <div className="flex space-x-6">
                <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                  <div
                    style={{ backgroundColor: "#DCB000" }}
                    className="text-white text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer"
                  >
                    <div>Start Using</div>
                  </div>

                  <div className="text-black border text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer">
                    Documentation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[94px] pt-10 pb-10">
            <div className="flex justify-center lg:justify-start">
              <img
                src={images.largeModel}
                style={{ height: "350px", width: "350px" }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-md flex flex-col items-center lg:items-start">
                <div className="text-sm font-bold" style={{ color: "#DCB000" }}>
                  Large Language Model
                </div>
                <div className="text-3xl font-extrabold pt-2">
                  Explore Large Language Model
                </div>
                <p className="pt-2 mb-3 text-sm text-gray-500">
                  Bring your creativity with our powerful Large Language Model
                  API!
                </p>
                <div className="flex space-x-6">
                  <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                    <div
                      style={{ backgroundColor: "#DCB000" }}
                      className="text-white text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer"
                    >
                      <div>Start Using</div>
                    </div>

                    <div className="text-black border text-xs font-semibold py-3 px-3 rounded-lg flex justify-center items-center cursor-pointer">
                      Documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:px-24 px-5">
          <div style={{ fontSize: "36px" }} className="font-bold">
            Explore the LLM Models
          </div>
          <div className="flex md:flex-row flex-col lg:justify-between justify-center items-center gap-4 lg:gap-0">
            <div className="text-lg text-center text-gray-400">
              Choose from a Variety of Specialized Models
            </div>
            <div
              style={{
                backgroundColor: "#DCB000",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                width: "170px",
              }}
            >
              Explore Models <span className="pl-3">&gt;</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 pt-5 grid-cols-2">
            {cards.map((card) => {
              return (
                <>
                  <div className="flex flex-col flex-wrap justify-center rounded-lg border p-1">
                    <div
                      className="border text-xl font-bold text-center justify-center items-center rounded-lg flex flex-col h-48"
                      style={{
                        color: "#C19B00",
                        backgroundImage:
                          "linear-gradient(to bottom, #DCB000, #ffffff)",
                      }}
                    >
                      {card.title}
                    </div>
                    <div className="p-1">
                      <h3 className="text-base font-semibold">{card.title}</h3>
                      <p
                        className="text-xs mb-1 pt-1"
                        style={{ color: "rgba(0, 0, 0, 0.5)" }}
                      >
                        {card.description}
                      </p>
                    </div>
                    <div className="flex">
                      <div
                        className="py-1 px-2"
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#E4EAFA",
                          color: "#005CF0",
                          fontSize: "10px",
                        }}
                      >
                        llm-model
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="md:px-24 px-5 mt-10">
          <div style={{ fontSize: "36px" }} className="font-bold">
            Who Is This For?
          </div>
          <div className="text-lg text-gray-400">
            Solutions for Different User Needs
          </div>
          <div className="grid lg:grid-cols-3 gap-5 pt-5 grid-cols-2 mb-5">
            <>
              <div className="flex flex-col flex-wrap justify-center rounded-2xl border p-1">
                <img src={images.unrestricted} />
                <div className="p-2">
                  <h3 className="text-lg font-bold">Unrestricted Explorers</h3>
                  <p className="text-xs text-gray-600 mb-1 pt-1">
                    Engage in unrestricted, open discussions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-wrap justify-center rounded-2xl border p-1">
                <img src={images.professional} />
                <div className="p-2">
                  <h3 className="text-lg font-bold">Professionals</h3>
                  <p className="text-xs text-gray-600 mb-1 pt-1">
                    Access focused information from datasets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-wrap justify-center rounded-2xl border p-1">
                <img src={images.contentCreation} />
                <div className="p-2">
                  <h3 className="text-lg font-bold">Content Creators</h3>
                  <p className="text-xs text-gray-600 mb-1 pt-1">
                    Generate inspiration and creative content.
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLM;
