import React from "react";
import DashboardContainer from "./dashboardContainer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const SinglePlugin = () => {
  const pluginDetails = [
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/cN8VNj3qSEX0CAhzrMj0vzjYPB1toe-metaYWUucG5n-.png",
      title: "Adobe After Effects: Image",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered plugins",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/Y1umKYBVOIm8HUHoEsNXXwNSTFRxSS-metaYmxlbmRlci5wbmc=-.png",
      title: "Blender: 3D Generation",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image generate",
    },
    {
      src: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/fnKYU0bwNnLjxbSqOaijmwmanrBms8-metadi5wbmc=-.png",
      title: "Sony Vegas: Video Generation",
      downloads: 23,
      description:
        "Elevate your visual storytelling with our AI-powered image generate",
    },
  ];

  return (
    <DashboardContainer>
      <div className="md:p-5">
        <div className="flex justify-between md:flex-row flex-col gap-5 items-start md:items-center mb-7">
          <div className="flex items-center gap-5">
            <img
              src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/SLafjfqp36jGuQWZ820iBP5dCstnVA-metaYWUucG5n-.png"
              className="h-12"
              alt=""
            />

            <div className="space-y-1">
              <h1 className="font-bold text-xl">
                Adobe After Effects: Image Generation
              </h1>
              <h3 className="text-sm">
                Downloads: <span className="text-gray-700 font-bold">23</span>
              </h3>
            </div>
          </div>
          <button className="bg-[#005CF0] py-2 whitespace-nowrap px-5 text-white rounded-md shadow-sm text-sm hover:bg-[#005CF0]/80 transition-all">
            Download Plugin
          </button>
        </div>
        <hr />
        <div className="mt-5 w-full">
          {/* <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
            </SwiperSlide>
          </Swiper> */}

          <div className="grid grid-cols-[30px_auto_30px] md:grid-cols-[30px_auto_auto_30px] items-center gap-5 py-5">
            <button className=" p-2 w-min rounded-md hover:bg-gray-300 transition-all">
              <FaChevronLeft />
            </button>
            <img
              src=""
              className="h-52 bg-gray-200 object-cover rounded-lg"
              alt=""
            />
            {/* info: on small devices only single image will be shown, thats why i've removed it directly using md:hidden */}
            <img
              src=""
              className="h-52 hidden md:block bg-gray-200 object-cover rounded-lg"
              alt=""
            />
            <button className=" p-2 w-min rounded-md hover:bg-gray-300 transition-all">
              <FaChevronRight />
            </button>
          </div>
          <div className=" relative bg-gray-300 h-1 rounded-full mx-20 md:mx-52 mt-5">
            <span className="absolute w-[20%] rounded-full bg-[#005CF0] h-full"></span>
          </div>
        </div>
        {/* overview */}
        <div className="mt-14 mb-7">
          <h1 className="font-bold text-xl mb-5">Overview</h1>
          <p>
            Make your every visual stand out with our AI-powered image
            generation plugin for Adobe After Effects. Build from a creator
            first perspective to elevate and fast track your content creation
            process. This innovative tool seamlessly integrates with After
            Effects, allowing you to craft stunning, high-resolution images
            directly within your projects.
          </p>
        </div>
        <hr />
        <div className="my-7">
          <h1 className="font-bold text-xl mb-5">Details</h1>
          <div className="grid grid-cols-2 gap-y-14">
            <div>
              <h3 className="text-lg font-semibold">Version</h3>
              <p className="text-gray-600">1.0</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Offered by</h3>
              <p className="text-gray-600">ModelsLab Inc</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Updated</h3>
              <p className="text-gray-600">24 October 2024</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Size</h3>
              <p className="text-gray-600">4.54MiB</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-7">
          <h1 className="font-bold text-xl mb-5">Related</h1>
          <div className="flex flex-wrap gap-2 items-baseline justify-center md:justify-start">
            {pluginDetails.map((plugin, index) => (
              <div
                key={index}
                className="w-72 bg-white border space-y-2 border-[#E5E7EB] rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer"
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
        </div>
      </div>
    </DashboardContainer>
  );
};

export default SinglePlugin;
