import React from "react";
import DashboardContainer from "./dashboardContainer";

const PluginDashboard = () => {
  const pluginDetails = [
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/cN8VNj3qSEX0CAhzrMj0vzjYPB1toe-metaYWUucG5n-.png",
      title: "Adobe After Effects: Image",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit reprehenderit quod, molestiae esse, inventore cupiditate earum aliquid assumenda libero possimus, ducimus quasi numquam eligendi voluptates saepe atque maxime ipsum nemo perferendis veniam ad perspiciatis? Temporibus, expedita repellat sapiente ut aliquam quos eaque aspernatur mollitia facere fugiat consequatur rerum eius! Porro, iste. Unde beatae veniam eveniet fugiat, in facilis! Nulla quasi corrupti architecto necessitatibus non consequuntur quo et temporibus, eius excepturi error assumenda asperiores quae ipsa. Voluptates fuga ea qui dolore non blanditiis exercitationem, sunt, voluptatibus quaerat possimus facere, esse voluptas? Tenetur libero quis facilis alias voluptas earum tempora voluptate.",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/Y1umKYBVOIm8HUHoEsNXXwNSTFRxSS-metaYmxlbmRlci5wbmc=-.png",
      title: "Blender: 3D Generation",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image...",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/fnKYU0bwNnLjxbSqOaijmwmanrBms8-metadi5wbmc=-.png",
      title: "Sony Vegas: Video Generation",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image...",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/aGe4JOEQcOHTBf8HvMJIaQNu9vEnLm-metadW5yZWFsLnBuZw==-.png",
      title: "Unreal Engine: 3D Generation",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image...",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/HZjL1HqrHW1uVQpjxZuF6zAffT7UxN-metacHIucG5n-.png",
      title: " Adobe Premier Pro: Image G...",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image...",
    },
  ];

  return (
    // container px-5 md:px-8
    <DashboardContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {pluginDetails.map((plugin, index) => (
          <div
            key={index}
            className=" bg-white border space-y-2 border-[#E5E7EB] rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer"
          >
            <img src={plugin.src} alt="" />
            <h1 className="font-bold text-lg w-full overflow-hidden whitespace-nowrap text-ellipsis">
              {plugin.title}
            </h1>
            <h3 className="text-sm">
              Downloads:{" "}
              <span className="text-gray-700 font-bold">
                {plugin.downloads}
              </span>
            </h3>
            <p className="text-xs text-gray-600 w-full overflow-hidden whitespace-nowrap text-ellipsis">
              {plugin.description}
            </p>
          </div>
        ))}
      </div>
    </DashboardContainer>
  );
};

export default PluginDashboard;
