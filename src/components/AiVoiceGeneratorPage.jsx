import React from "react";
import { Link } from "react-router-dom";
import Speaker from "./icons/Speaker";
import Play from "./icons/Play";
import Basketball from "./icons/Basketball";
import Down from "./icons/down";
import Messages from "./icons/Messages";
import TypeText from "./icons/TypeText";
import MessageQuestion from "./icons/MessageQuestion";
import Translate from "./icons/Translate";
import FirstLine from "./icons/FirstLine";
import MessageProgramming from "./icons/MessageProgramming";
import Export from "./pluginPages/icons/export";

const AiVoiceGeneratorPage = () => {
  const cardData = [
    {
      icon: <Messages className="h-8 w-8" />,
      heading: "Multilingual Voice Generator",
      subheading:
        "Translate speeches in any language, localize, and convert to any gender, style, and accent.",
    },
    {
      icon: <TypeText className="h-8 w-8" />,
      heading: "Lip Sync",
      subheading:
        "Convey emotions and lip sync perfectly; sound like your favorite characters and personalities.",
    },
    {
      icon: <MessageQuestion className="h-8 w-8" />,
      heading: "API Integrations",
      subheading:
        "Seamless and flexible API integrations with platforms, workflows, and apps.",
    },
    {
      icon: <Translate className="h-8 w-8" />,
      heading: "Advanced Voice Cloning:",
      subheading:
        "Upload any voice and clone it—mimic celebrities. Accurate pronunciations. Speak with precision and clarity.",
    },
    {
      icon: <FirstLine className="h-8 w-8" />,
      heading: "Text-to-Speech",
      subheading:
        "Type text and generate AI voices. Change speed, reverb, and customize sound effects.",
    },
    {
      icon: <MessageProgramming className="h-8 w-8" />,
      heading: "AI Dubbing:",
      subheading:
        "Dub voice in any style or language. Recreate celebrity voices. Use AI-generated speech commercially anywhere.",
    },
  ];

  return (
    <div className="">
      <div className="absolute top-0 left-0 z-[-1] h-screen w-full">
        <img src="/image.png" alt="" className=" h-full object-cover" />
      </div>
      <div className="container mx-auto p-5 text-xs sm:text-base">
        <Link to={"/"} className="hover:underline underline-offset-1">
          Home
        </Link>
        <span className="mx-1 sm:mx-3">{">"}</span>
        <Link to={"/"} className="hover:underline underline-offset-1">
          Audio Gen
        </Link>
        <span className="mx-1 sm:mx-3">{">"}</span>
        <Link to={"/"} className="hover:underline underline-offset-1">
          AI Voice Generator
        </Link>
      </div>
      <div className="lg:container mx-auto p-4 my-7 sm:my-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
        <div className="w-[90vw] sm:w-auto">
          <div className={`text-left px-0 my-0`}>
            <div className="flex gap-2 items-center mb-5 font-bold">
              <div className="p-2 bg-[#27ECE2] w-min rounded-2xl">
                <Speaker className="size-6" />
              </div>
              <p className="text-gray-600">AudioGen</p>
            </div>
            <h1 className=" text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
              Write and Generate AI Voices
              <div className="relative inline-block ml-2">
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  width="275"
                  height="8"
                  viewBox="0 0 275 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4.64748C10.2979 4.23315 17.4867 3.93692 25.0362 3.81189C40.4373 3.55681 55.9615 3.36353 71.3914 3.20477C94.9038 2.96286 118.677 3.0024 142.218 3.0024C176.657 3.0024 210.889 3.50723 245.155 4.21663C254.367 4.40734 263.023 4.59466 272 5"
                    stroke="#27ECE2"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
                in Seconds
              </div>
            </h1>
            <p className="text-muted text-sm sm:text-base">
              With our realistic text-to-speech developer-first AI voice
              generator, users can generate 200+ lifelike voices. Deliver
              unique, fluent, and conversational notes.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-start items-center my-10">
            <button className="bg-[#27ECE2] text-sm sm:text-base rounded-full px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#27ECE2]/20 shadow-sm hover:bg-[#27ECE2]/80 transition-all whitespace-nowrap flex justify-center items-center gap-2">
              Generate AI Voices Now <Play className="size-5 " />
            </button>
            <button className="bg-black text-white text-sm sm:text-base rounded-full px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-black/20 shadow-sm hover:bg-black/80 transition-all whitespace-nowrap flex justify-center items-center gap-2">
              Watch Video <Basketball className="size-5" />
            </button>
          </div>
        </div>
        <img
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/nRT9nsL1xWQEQf0HtX92PCQsbY97x4-metaaW1hZ2UucG5n-.png"
          className="w-[90vw] h-auto sm:w-auto md:h-[30rem] object-cover rounded-xl"
          alt="hero image"
        />
      </div>
      {/*  */}
      <div className="py-20">
        <h1 className="text-center font-semibold text-sm sm:text-xl mx-2">
          Organizations of all sizes builds with ModelsLab for their production
          of AI applications
        </h1>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/4aFtWHEcn9ehQzhIV0MlLi4LbtdJQX-metaaW1hZ2UucG5n-.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/mPOlqlPVfQ1jyuSe3prsf70lRo868V-metaaW1hZ2UucG5n-.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/f98oMo2D8GOBgoND4EsNzrHNQsXUVU-metaaW1hZ2UucG5n-.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/OZiaHCtGLNEaqzkUCUWCsQQ2WOgueO-metaaW1hZ2UucG5n-.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/PHFhG5ez0tGwTjPdpYSSda4xklYTlO-metaaW1hZ2UucG5n-.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/9zOstwqeTHYEwOR5PSQhXS0o1Zv9Cg-metaaW1hZ2UucG5n-.png"
            alt=""
          />
        </div>
      </div>
      {/*  */}
      <div className="py-10 pb-32">
        <div className="bg-white border mx-auto max-w-[55rem] rounded-2xl p-4 text-center border-[#E5E7EB] grid grid-cols-4">
          <div className="border-r border-[#E5E7EB]">
            <h1 className="text-3xl mb-2 font-bold">1B+</h1>
            <p className="text-gray-700">Images Generated</p>
          </div>
          <div className="border-r border-[#E5E7EB]">
            <h1 className="text-3xl mb-2 font-bold">300k+</h1>
            <p className="text-gray-700">Users</p>
          </div>

          <div className="border-r border-[#E5E7EB]">
            <h1 className="text-3xl mb-2 font-bold">5k+</h1>
            <p className="text-gray-700">Discord Community</p>
          </div>

          <div>
            <h1 className="text-3xl mb-2 font-bold">25+</h1>
            <p className="text-gray-700">APIs</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white">
        <div
          className={`container  mx-auto text-center px-5 sm:px-10 lg:px-40 my-5`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
            Tell Stories with AI Voices.
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Reimagine the frontiers of audio with natural and realistic AI
            voices. Boost listener engagement using our core capabilities.
          </p>
        </div>
        <div className="lg:container mx-auto p-4 my-7 sm:px-20 sm:my-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
          <div className="w-[90vw] sm:w-auto">
            <div className="">
              <div className="p-3 border-l border-sky-500">
                <h1 className="font-bold text-xl">Text to Voice</h1>
                <p className="text-gray-700">
                  Build voice experiences for virtual assistants, audiobooks,
                  podcasts, e-learning, and video games.
                </p>
              </div>
              <div className="p-3">
                <h1 className="font-bold text-xl">Voice Cloning</h1>
                <p className="text-gray-700">
                  Clone voices as short as 30 seconds and translate into
                  multiple languages.
                </p>
              </div>
              <div className="p-3">
                <h1 className="font-bold text-xl">Voice Changer</h1>
                <p className="text-gray-700">
                  Mimic identities and create voices of your favourite
                  personalities. Alter or maintain original pitch. Switch
                  between male and female voices.
                </p>
              </div>
              <div className="p-3">
                <h1 className="font-bold text-xl">Voice Cover</h1>
                <p className="text-gray-700">
                  Remix audio or mix voice and music. Upload, pick a model, and
                  change sounds to get new covers.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/dummy.png"
            className="w-[90vw] h-auto sm:w-auto md:h-[30rem] object-cover rounded-xl"
            alt="hero image"
          />
        </div>
      </div>
      {/*  */}
      <div>
        <div className={`container mx-auto  px-5 sm:px-10 lg:px-20 my-5`}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
            Tell Stories with AI Voices.
          </h1>
          <p className="text-gray-700  text-sm sm:text-base">
            Reimagine the frontiers of audio with natural and realistic AI
            voices. Boost listener engagement using our core capabilities.
          </p>
        </div>
        <div className="lg:container mx-auto p-4 my-7 sm:px-20 sm:my-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-end gap-5">
          <div className="w-[90vw] sm:w-full">
            <div className="space-y-10">
              <div className="p-3 flex justify-between items-center gap-5">
                <h1 className="font-bold text-xl">Custom Voice Generation</h1>
                <Down className="size-4" />
              </div>
              <div className="p-3 flex justify-between items-center gap-5">
                <h1 className="font-bold text-xl">Multiple Languages</h1>
                <Down className="size-4" />
              </div>
              <div className="p-3 flex justify-between items-center gap-5">
                <h1 className="font-bold text-xl">Render Emotions</h1>
                <Down className="size-4" />
              </div>
              <div className="p-3 flex justify-between items-center gap-5">
                <h1 className="font-bold text-xl">Reverb and Audio Effects</h1>
                <Down className="size-4" />
              </div>
              <div className="p-3 flex justify-between items-center gap-5">
                <h1 className="font-bold text-xl">
                  API and Webhook Integrations
                </h1>
                <Down className="size-4" />
              </div>
            </div>
          </div>
          <img
            src="/dummy.png"
            alt="w-[90vw] h-auto sm:w-auto md:h-[30rem] object-cover rounded-xl"
          />
        </div>
      </div>
      {/*  */}
      <div className="my-20">
        <div
          className={`container  mx-auto text-center px-5 sm:px-10 lg:px-32 my-5`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
            How to Generate AI Voices Step-by-Step
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Follow these five easy steps to generate AI voices using the
            ModelsLab AI Voice Generator
          </p>
        </div>
        <div className="flex gap-5 mt-20 flex-col sm:flex-row items-center sm:items-start justify-center">
          <div className="max-w-72 md:max-w-96 space-y-14">
            <img
              className="h-full w-full max-w-80 mx-auto"
              src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/i4txG8KpdDMbfLnA596Ey3uRrHU2CG-metaaW1hZ2UucG5n-.png"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl mb-5">
                Choose language, emotion
              </h1>
              <p>Select the language and desired emotion. Click on Generate.</p>
            </div>
            <img
              className="h-full w-full max-w-80 mx-auto"
              src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/Xj0OBr0osKYHBfJzY1pIwft1FgeTN4-metaaW1hZ2UucG5n-.png"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl mb-5">Download File</h1>
              <p>
                Download the generated audio; stream it directly as MP3 or WAV,
                and export it as other formats.
              </p>
            </div>
          </div>
          <svg
            className="hidden sm:block"
            width="26"
            height="685"
            viewBox="0 0 26 685"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12.5" y1="12" x2="12.5" y2="685" stroke="#E5E7EB" />
            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E5E7EB" />
            <circle cx="12" cy="12" r="3" fill="black" />
            <circle cx="12" cy="196" r="11.5" fill="white" stroke="#E5E7EB" />
            <circle cx="12" cy="196" r="3" fill="black" />
            <circle cx="14" cy="411" r="11.5" fill="white" stroke="#E5E7EB" />
            <circle cx="14" cy="411" r="3" fill="black" />
            <circle cx="12" cy="602" r="11.5" fill="white" stroke="#E5E7EB" />
            <circle cx="12" cy="602" r="3" fill="black" />
          </svg>

          <div className="max-w-72 md:max-w-96 space-y-14">
            <div>
              <h1 className="font-bold text-xl mb-5">
                Enter Prompt or Upload script
              </h1>
              <p>
                Type in, paste, or upload texts or scripts to convert to speech.
              </p>
            </div>
            <img
              className="h-full w-full max-w-80 mx-auto"
              src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/0PAnO2kh4nfO3lOIjyU8SqjtKF6iQ7-metaaW1hZ2UucG5n-.png"
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl mb-5">Do Customization</h1>
              <p>
                Wait for AI voices to get ready. Edit them, fine-tune origins,
                and customise narration speed.
              </p>
            </div>

            <img
              className="h-full w-full max-w-80 mx-auto"
              src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/livewire-tmp/AUXao0OQ1RcZuqtliDMLk4f6ZEPnUi-metaaW1hZ2UucG5n-.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-20">
        <div
          className={`container  mx-auto text-center px-5 sm:px-10 lg:px-32 my-5`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-5">
            What makes ModelsLab more than just an AI Voice Generator?
          </h1>
        </div>
        <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 px-2 sm:px-20 justify-center">
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
                <Export className="size-5 text-[#00B5AB]" />
              </div>
              <div className="font-bold text-base text-black">
                {card.heading}
              </div>
              <p className="text-gray-500 text-sm pt-1">{card.subheading}</p>
            </div>
          ))}
        </div>
        <button className="mx-auto mt-10 bg-[#00B5AB] text-white text-sm sm:text-base rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-semibold shadow-[#00B5AB]/20 shadow-sm hover:bg-[#00B5AB]/80 transition-all whitespace-nowrap flex justify-center items-center gap-2">
          Generate Your First AI Voice
        </button>
      </div>
      {/*  */}
    </div>
  );
};

export default AiVoiceGeneratorPage;
