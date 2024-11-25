import React from "react";
import images from "../../images";
import Icon from "./icons";

const cardData = [
  {
    image: "/pluginPage/icons/settings.svg",
    heading: "Easy Integration",
    subheading: "Quickly install plugins that work with your apps.",
  },
  {
    image: "/pluginPage/icons/pentool.svg", // replace with actual image
    heading: "AI-Powered Creativity",
    subheading: "AI tools create professional content with ease.",
  },
  {
    image: "/pluginPage/icons/devices.svg", // replace with actual image
    heading: "Wide Compatibility",
    subheading: "Plugins available for many popular software applications.",
  },
  {
    image: "/pluginPage/icons/arrows.svg", // replace with actual image
    heading: "Efficient Workflow",
    subheading: "Streamline tasks and focus on your ideas.",
  },
  {
    image: "/pluginPage/icons/happy.svg", // replace with actual image
    heading: "User-Friendly Interface",
    subheading: "Enjoy a simple design that anyone can use.",
  },
  {
    image: "/pluginPage/icons/refresh.svg", // replace with actual image
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
            <div className="text-5xl mb-4 font-black leading-[1.2] w-[455px]">
              Create Amazing Content with Our AI Plugins
            </div>
            <p className="mb-5 text-sm text-gray-500">
              Easily create great content with AI plugins for your favorite
              apps.
            </p>
            <div className="flex space-x-6">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#005CF0", width: "150px" }}
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
            src={"/pluginPage/hero.svg"}
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
          <div className="text-4xl text-black font-bold text-center">
            What We Offer
          </div>
          <div className="text-base pt-2 text-center text-black/70">
            Our AI plugins easily create amazing images, audio, text, and more
            for apps.
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-20 justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4 rounded-3xl flex flex-col border border-[#E5E7EB] bg-white"
            >
              <div className="flex justify-between items-center">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="h-10 w-10 mb-10"
                />
                <img
                  src={"/pluginPage/icons/export.svg"}
                  alt="Export"
                  className="h-6 w-6 mb-10"
                />
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
          <div className="p-16 md:p-16">
            <div className="font-bold" style={{ color: "#00D1AF" }}>
              How It Works
            </div>
            <h2 className="text-3xl font-bold mb-4 leading-10">
              AI plugins for popular apps.
            </h2>
            <ol
              className="list-inside space-y-5 text-xs"
              style={{ width: "350px" }}
            >
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
            <img className="max-w-96" src={"/pluginPage/how-it-works.png"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-16 py-10 px-12 bg-[#F9F9F9]">
        <div
          style={{ fontSize: "36px" }}
          className="font-extrabold text-center"
        >
          Supported Applications
        </div>
        <div className="pt-2 text-lg text-center text-gray-400">
          Our plugins are designed to work with the most popular content
          creation software:
        </div>
      </div>
      <div className="flex items-center gap-28 flex-wrap my-10 justify-center">
        <img className="h-20" src="/pluginPage/apps/blender.png" alt="" />
        <img className="h-20" src="/pluginPage/apps/ae.png" alt="" />
        <img className="h-20" src="/pluginPage/apps/pr.png" alt="" />
        <img className="h-20" src="/pluginPage/apps/unreal.png" alt="" />
        <img className="h-20" src="/pluginPage/apps/v.png" alt="" />
      </div>
    </div>
  );
};

export default PluginPage;
