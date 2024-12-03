import React from "react";
import { Link } from "react-router-dom";

const TrainMasterPage = () => {
  const sections = [
    {
      heading: "Imagen",
      subHeading: "Train AI to create and improve pictures.",
      buttonUrl: "/train-master/imagen",
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/hf2drHw00DE8sQAdfVc2lanMkIu5Ur-metaaW1hZ2UucG5n-.png",
    },
    {
      heading: "AudioGen",
      subHeading: "Build AI for voices, music, and sound recognition.",
      buttonUrl: "/train-master/audioGen",
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/COmpl04QSQRac0aXdNj9xu2RJyqYjf-metaaW1hZ2UucG5n-.png",
    },
    {
      heading: "LLMaster",
      subHeading: "Create AI for conversations and text-based tasks.",
      buttonUrl: "/train-master/llmaster",
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/xth4DPkmuMkHTeLikVPrdvef9KONIV-metaaW1hZ2UucG5n-.png",
    },
  ];

  return (
    <div className="container mx-auto min-h-full">
      <div
        className={`container mx-auto text-center px-5 sm:px-10 lg:px-40 py-10`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5 dark:text-white">
          Train AI Models with Ease
        </h1>
        <p className="text-gray-700 text-sm sm:text-base dark:text-gray-300">
          Build image, audio, and language models —no coding required.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 flex-col my-5">
        {sections.map((section, _) => (
          <div className="flex justify-between max-h-52 w-full max-w-[80rem] bg-white rounded-xl border border-[#E5E7EB] dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5 flex flex-col gap-2 sm:gap-5 ">
              <h1 className="text-xl lg:text-3xl font-bold dark:text-white">
                {section.heading}
              </h1>
              <p className="text-gray-700 md:text-base text-xs dark:text-gray-300">
                {section.subHeading}
              </p>
              <Link
                to={section.buttonUrl}
                className={`border w-min border-[#E5E7EB] text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-black/20 shadow-sm hover:bg-[#E5E7EB] transition-all whitespace-nowrap dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700`}
              >
                Choose
              </Link>
            </div>
            <img
              src={section.imgSrc}
              alt=""
              className="max-h-32 sm:max-h-52 my-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainMasterPage;
