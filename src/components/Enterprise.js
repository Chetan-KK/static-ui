import React from 'react'

const Enterprise = () => {
  return (
    <section
      className="bg-white py-20 dark:bg-black"
      style={{ backgroundColor: "red" }}
    >
      <div className="container mx-auto px-5 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          <div className="">
            <div className="aspect-auto md:w-2/3 rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover">
              <img
                src={
                  "https://imagedelivery.net/PP4qZJxMlvGLHJQBm3ErNg/c9c12026-ee54-4de9-fd83-d854c72be700/768"
                }
                alt="text to video"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3>
              <span className="inline-flex items-center justify-start gap-2">
                <span className="size-[36px] bg-[#00D1AF] rounded-[10px]"></span>
                <span className="text-[18px] font-[600]">
                  Text to Video API
                </span>
              </span>
            </h3>
            <p className="text-[42px] font-[700] mt-4 leading-[46px] tracking-tighter">
              Create Stunning Videos from Text
            </p>
            <p className="text-[16px] font-[500] text-opacity-70 my-2">
              Text-to-Video API to transform text into vibrant videos
            </p>
            <div className="flex items-center justify-start gap-2">
              <button className="bg-[#00D1AF] text-[12px] font-[600] rounded-[8px] px-4 py-2 text-white">
                Start Generating
              </button>
              <button className="border text-[12px] text-black dark:text-white font-[600] rounded-[8px] px-4 py-2">
                Documentation
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 w-full mt-20">
          <div className="">
            <div className="aspect-auto md:w-2/3 rounded-[20px] overflow-hidden bg-center bg-no-repeat bg-cover">
              <img
                src="/images/image-to-video.png"
                alt="text to video"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3>
              <span className="inline-flex items-center justify-start gap-2">
                <span className="size-[36px] bg-[#00D1AF] rounded-[10px]"></span>
                <span className="text-[18px] font-[600]">
                  Image to Video API
                </span>
              </span>
            </h3>
            <p className="text-[42px] font-[700] mt-4 leading-[46px] tracking-tighter">
              Convert Your Images into motion
            </p>
            <p className="text-[16px] font-[500] text-opacity-70 my-2">
              Turn your images into Dynamic videos easily with our
              Image-to-Video API.
            </p>
            <div className="flex items-center justify-start gap-2">
              <button className="bg-[#00D1AF] text-[12px] font-[600] rounded-[8px] px-4 py-2 text-white">
                Start Creating
              </button>
              <button className="border text-[12px] text-black dark:text-white font-[600] rounded-[8px] px-4 py-2">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enterprise