import React from "react";
import { Link } from "react-router-dom";

const Imagen = () => {
  const buttons = [
    {
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/KRyNkk254jZOCARzGYdOqa4APifctq-metaaW1hZ2UucG5n-.png",
      heading: "Imagen / flux lora trainer",
      subHeading: "Easily fine-tune image AI models with Flux LoRA technology.",
      url: "/train-master/imagen/flux-lora-trainer",
    },
    {
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/foeuCeYEsDmaMHAPyGUAUWOJVAGuzo-metaaW1hZ2UucG5n-.png",
      heading: "Imagen / stable diffusion trainer",
      subHeading: "Easily fine-tune image AI models with Flux LoRA technology.",
      url: "/train-master/imagen/",
    },
    {
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/Z8ODlLIznIhYGqrXFFWmAh6XCduIK9-metaaW1hZ2UucG5n-.png",
      heading: "Imagen / controlnet trainer",
      subHeading: "Easily fine-tune image AI models with Flux LoRA technology.",
      url: "/train-master/imagen/",
    },
    {
      imgSrc:
        "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/NVI7xwrjUX8suEMOPkHC4ToXzotN40-metaaW1hZ2UucG5n-.png",
      heading: "Imagen / ip adapter trainer",
      subHeading: "Easily fine-tune image AI models with Flux LoRA technology.",
      url: "/train-master/imagen/",
    },
  ];

  return (
    <div className="container mx-auto py-10 ">
      <Link
        to="/train-master"
        className={`ml-5 border w-min border-[#E5E7EB] dark:border-gray-700 text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 dark:text-white font-semibold shadow-black/20 shadow-sm hover:bg-[#E5E7EB] dark:hover:bg-gray-700 transition-all whitespace-nowrap`}
      >
        Back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mx-5 md:mx-20">
        {buttons.map((btn, _) => (
          <Link to={btn.url}>
            <div className="p-3 border bg-white dark:bg-gray-800 border-[#E5E7EB] dark:border-gray-700 rounded-2xl space-y-2 dark:hover:bg-gray-700 transition-all hover:shadow-md">
              <img src={btn.imgSrc} alt="" />
              <h1 className="font-bold text-base sm:text-xl dark:text-white">
                {btn.heading}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                {btn.subHeading}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Imagen;
