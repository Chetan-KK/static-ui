import React from "react";
import images from "../../images";
import Icon from "./icons/icon";
import Arrows from "./icons/arrows";
import Settings from "./icons/settings";
import PenTool from "./icons/pentool";
import Devices from "./icons/devices";
import Happy from "./icons/happy";
import Refresh from "./icons/refresh";
import Export from "./icons/export";

const cardData = [
  {
    icon: <Settings className="h-8 w-8" />,
    heading: "Easy Integration",
    subheading: "Quickly install plugins that work with your apps.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    heading: "AI-Powered Creativity",
    subheading: "AI tools create professional content with ease.",
  },
  {
    icon: <Devices className="h-8 w-8" />,
    heading: "Wide Compatibility",
    subheading: "Plugins available for many popular software applications.",
  },
  {
    icon: <Arrows className="h-8 w-8" />,
    heading: "Efficient Workflow",
    subheading: "Streamline tasks and focus on your ideas.",
  },
  {
    icon: <Happy className="h-8 w-8" />,
    heading: "User-Friendly Interface",
    subheading: "Enjoy a simple design that anyone can use.",
  },
  {
    icon: <Refresh className="h-8 w-8" />,
    heading: "Regular Updates",
    subheading: "Get new features and improvements automatically over time.",
  },
];

const stepsData = [
  {
    title: "Choose Your Plugin",
    description: "Select the plugin that matches the app you’re using.",
  },
  {
    title: "Install & Activate",
    description: "Follow a simple installation process and Activate",
  },
  {
    title: "Create with AI",
    description: "Start generating amazing content directly within the app!",
  },
];

const PluginPage = () => {
  return (
    <div className="">
      <div className=" flex flex-col lg:flex-row justify-center mt-3 px-4 gap-10 lg:gap-32">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[29rem] flex flex-col items-center lg:items-start">
            <div className="flex flex-row items-center mt-8 mb-4">
              <span className="size-8 flex justify-center items-center bg-[#005CF0] rounded-lg">
                <Icon className="size-5 aspect-square text-white" />
              </span>
              <div className="text-lg font-bold pl-2 text-[#005CF0]">
                AI Plugins
              </div>
            </div>
            <div className="text-2xl sm:text-4xl mb-4 font-black leading-[1.2] sm:w-[455px]">
              AI Plugins to Simplify & Speed Up your content creation journey
            </div>
            <p className="mb-5 text-sm text-gray-500">
              Produce high-quality media across multiple platform with our
              intuitive AI Plugins
            </p>
            <div className="flex space-x-6">
              <div className="flex lg:items-start flex-row gap-3 flex-wrap lg:justify-start">
                <div className="text-white text-xs bg-[#005CF0] hover:bg-[#005CF0]/80 w-36 font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer">
                  <div>Watch Video</div>
                  <img
                    src={images.playCircle}
                    className="pl-2"
                    alt="Play Circle"
                  />
                </div>

                <div className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-2 px-3 rounded-full flex justify-center items-center cursor-pointer w-36 ">
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
            src={
              "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/kVLCflULnnEe3IeuHx5QPt8EVrRgUZ-metaaGVyby5wbmc=-.png"
            }
            alt="API Graphic"
            // style={{ height: "240px" }}
          />
        </div>
      </div>
      {/* what we offer */}
      <div
        className="flex flex-col justify-center items-center mt-11 pb-10"
        style={{ background: "#F9F9F9" }}
      >
        <div className="flex flex-col justify-center pt-11">
          <div className="text-2xl sm:text-4xl text-black font-bold text-center">
            What We Offer
          </div>
          <div className="text-sm sm:text-base pt-2 text-center text-black/70">
            Our AI plugins easily create amazing images, audio, text, and more
            for apps.
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-2 sm:px-20 justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4 rounded-3xl flex flex-col border border-[#E5E7EB] bg-white hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-10">
                {/* <img
                  src={card.image}
                  alt={card.heading}
                  className="h-10 w-7 mb-10"
                /> */}
                {card.icon}
                <Export className="size-5 text-[#005CF0]" />
              </div>
              <div className="font-bold text-base text-black">
                {card.heading}
              </div>
              <p className="text-gray-500 text-sm pt-1">{card.subheading}</p>
            </div>
          ))}
        </div>
      </div>

      {/* how it works */}
      <div
        className="flex flex-col lg:flex-row justify-center pt-16 lg:pt-32 pl-4 pr-4 md:pl-36 md:pr-32 py-10"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="flex flex-col items-center justify-center lg:flex-row bg-white rounded-3xl ">
          <div className="py-10 px-5 md:p-16">
            <div className="font-bold" style={{ color: "#00D1AF" }}>
              How It Works
            </div>
            <h2 className="text-xl sm:text-3xl font-bold mb-4 leading-10">
              AI plugins for popular apps.
            </h2>
            <ol className="list-inside space-y-5 text-xs">
              {stepsData.map((step, index) => (
                <li key={index}>
                  <h2 className="font-bold text-base text-black">
                    {index + 1}. {step.title}
                  </h2>
                  <p className="text-gray-500 text-xs pt-1">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <img
              className="w-full rounded-2xl lg:max-w-96"
              src={
                "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/T2hCOttcdtuJrJhfoOkHlXo7wQFCxL-metaaG93LWl0LXdvcmtzLnBuZw==-.png"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-16 py-10 px-12 bg-[#F9F9F9]">
        <div className="text-2xl sm:text-4xl font-extrabold text-center">
          Supported Applications
        </div>
        <div className="pt-2 text-sm sm:text-base text-center text-gray-400">
          Our plugins are designed to work with the most popular content
          creation software:
        </div>
      </div>
      <div className="flex items-center gap-28 flex-wrap py-10 justify-center bg-[#F9F9F9]">
        <img
          className="h-10 sm:h-20"
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/rajp80MB5x6wamSQudY0pl6hmVlC5g-metaYmxlbmRlci5wbmc=-.png"
          alt=""
        />
        <img
          className="h-10 sm:h-20"
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/SLafjfqp36jGuQWZ820iBP5dCstnVA-metaYWUucG5n-.png"
          alt=""
        />
        <img
          className="h-10 sm:h-20"
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/I1FA6QLJZJrEZzBJXknh4isRxjAd8m-metacHIucG5n-.png"
          alt=""
        />
        <img
          className="h-10 sm:h-20"
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/NmJishr9vjcw6XDhHcvf16Dw8iSjiy-metadW5yZWFsLnBuZw==-.png"
          alt=""
        />
        <img
          className="h-10 sm:h-20"
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/O4tkdaoXJYvo7Eq4wHFgByJnuAHE8p-metadi5wbmc=-.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PluginPage;
