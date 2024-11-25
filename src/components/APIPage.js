import React, { useState } from "react";
import images from "../images";

const APIPage = () => {
  const [activeDaysTab, setActiveDaysTab] = useState("monthly");
  const [activeTab, setActiveTab] = useState("individuals");

  const tabs = [
    { id: "individuals", label: "Individuals" },
    { id: "business", label: "Business" },
    { id: "students", label: "Students" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <div className="flex flex-col mt-10 lg:flex-row items-center justify-center lg:gap-28 pb-5 px-4">
        <div className="flex flex-col justify-center items-center md:items-start">
          {" "}
          {/* Center on mobile and tablet, left-align on larger screens */}
          <div className="flex flex-row items-center">
            <span
              style={{ backgroundColor: "#005CF0" }}
              className="text-white text-sm font-bold py-1 px-3 rounded mr-2"
            >
              API
            </span>
            <h1 className="text-sm font-bold" style={{ color: "#005CF0" }}>
              ModelsLab API
            </h1>
          </div>
          <div className="max-w-md flex flex-col justify-center items-center pt-3 md:items-start">
            {" "}
            {/* Center on mobile and tablet, left-align on larger screens */}
            <div
              className="text-3xl mb-4 font-extrabold text-center md:text-left" // Center text on small screens
              style={{
                width: "242px",
              }}
            >
              Build Smarter Apps with Our
              <div
                className="border-b-2 border-blue-500"
                style={{
                  width: "242px",
                }}
              >
                AI Solutions API
              </div>
            </div>
            <p className="mb-6 text-sm text-gray-500 text-center md:text-left">
              {" "}
              {/* Center text on small screens */}
              Seamlessly integrate powerful AI capabilities into your
              applications with our developer-friendly API.
            </p>
            <div className="flex space-x-6">
              <div className="flex lg:items-start flex-row gap-3  lg:justify-start">
                <div
                  style={{ backgroundColor: "#005CF0", width: "170px" }}
                  className="text-white text-xs font-bold py-2 px-3 rounded-full flex items-center cursor-pointer hover:bg-blue-600"
                >
                  <div>Get Started for Free</div>
                  <img
                    src={images.playCircle}
                    className="pl-2"
                    alt="Play Circle"
                  />
                </div>

                <div
                  className="bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-full flex items-center cursor-pointer hover:bg-gray-700"
                  style={{ width: "220px" }}
                >
                  <img
                    src={images.basketball}
                    className="pr-2"
                    alt="Basketball"
                  />
                  Explore Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <img
            src={images.sidebarImg}
            alt="API Graphic"
            style={{ height: "240px", marginLeft: "30px" }}
          />
        </div>
      </div>

      {/* ==================Companies======================== */}
      <div
        className="flex flex-col items-center text-center mb-8 pb-2 h-40 justify-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <h2 className="text-sm font-bold mb-4 md:mb-8">
          Organizations of all sizes build with ModelsLab for their production
          of AI applications
        </h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-12">
          <img src={images.google} alt="Google Logo" className="h-7 md:h-8" />
          <img
            src={images.salesforce}
            alt="Salesforce Logo"
            className="h-7 md:h-8"
          />
          <img src={images.ibm} alt="IBM Logo" className="h-7 md:h-8" />
          <img src={images.amazone} alt="Amazon Logo" className="h-7 md:h-8" />
          <img src={images.adobe} alt="Adobe Logo" className="h-6 md:h-7" />
          <img src={images.sony} alt="Sony Logo" className="h-6 md:h-7" />
        </div>
      </div>

      <div className="flex flex-col mt-3 lg:flex-row items-center justify-center lg:gap-20 pb-5 px-4">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-row items-center">
            <h5 className="font-bold" style={{ color: "#005CF0" }}>
              Quick and Simple
            </h5>
          </div>
          <div className="max-w-md items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Get Your API Key In seconds
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Generate your API key instantly and start integrating AI-powered
              features into your app within minutes.
            </p>
            {/* <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div
                className="text-white text-sm font-bold py-2 px-6 rounded flex items-center cursor-pointer hover:bg-blue-600"
                style={{ backgroundColor: "#005CF0" }}
              >
                Create An Account
              </div>

              <div className="border text-black text-sm font-bold py-2 px-6 rounded flex items-center cursor-pointer hover:bg-white-700">
                Explore Documentation
              </div>
            </div> */}
            <div className="flex space-x-4 md:justify-start justify-center">
              <div className="flex lg:flex-col lg:items-start flex-row space-x-2 lg:space-x-0 lg:space-y-2 space-y-0 lg:justify-start">
                <div
                  style={{ backgroundColor: "#005CF0" }}
                  className="text-white text-xs font-bold py-2 px-6 rounded flex items-center cursor-pointer hover:bg-blue-600"
                >
                  Create An Account
                </div>

                <div className="border text-black text-sm font-bold py-2 px-6 rounded flex items-center cursor-pointer hover:bg-gray-700">
                  Explore Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <img
            src={images.desktop}
            alt="API Graphic"
            width="350px"
            height="350px"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center pb-5   pt-5"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div
            className="border rounded-xl ml-4 bg-white"
            style={{ width: "350px" }}
          >
            <div className="p-5">
              <div className="font-bold">AI-Powered Tools</div>
              <div className="text-gray-500">
                Integrate the API into your app in minutes, with detailed docs
                and SDKs for multiple languages.
              </div>
            </div>
            <div>
              <img src={images.ai} />
            </div>
          </div>
          <div
            className="border rounded-xl ml-4 bg-white"
            style={{ width: "350px" }}
          >
            <div className="p-5">
              <div className="font-bold">Easy Integration</div>
              <div className="text-gray-500">
                Integrate the API into your app in minutes, with detailed docs
                and SDKs for multiple languages.
              </div>
            </div>
            <div
              // className="pt-10"
              className="flex justify-center items-end pt-2"
              // style={{ height: "132px" }}
            >
              <img src={images.easy} />
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-between border rounded-xl ml-4 bg-white"
            style={{ width: "350px" }}
          >
            <div className="p-5">
              <div className="font-bold">Cross-Platform Compatibility</div>
              <div className="text-gray-500">
                Use our API for both web and mobile applications.
              </div>
            </div>
            <div
              className="flex justify-center items-center"
              // style={{ height: "132px" }}
            >
              <img
                src={images.cross}
                // style={{ height: "80px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pt-5 p-5 gap-20">
          <div className="border rounded-xl bg-white w-full max-w-lg">
            <div className="p-5">
              <div className="font-bold text-lg">Explore Documentation</div>
              <div className="text-gray-500">
                Familiarize yourself with our comprehensive API documentation.
                It includes detailed information on API endpoints, supported
                formats, and integration methods.
              </div>
              <div
                className="border w-40 flex justify-center rounded-lg p-1 text-white mt-3 text-sm"
                style={{ backgroundColor: "#005CF0" }}
              >
                API Documentation
              </div>
            </div>
            <div className="flex justify-end">
              <img
                src={images.document}
                alt="Documentation Graphic"
                className="h-28 md:h-32 lg:h-36" // Responsive height
              />
            </div>
          </div>

          <div className="flex border rounded-xl bg-white w-full max-w-lg">
            <div className="p-5">
              <div className="font-bold text-lg">Support & Community</div>
              <div className="text-gray-500">
                Integrate the API into your app in minutes, with detailed docs
                and SDKs for multiple languages.
              </div>
              <div
                className="border w-44 flex justify-center items-center rounded-full p-2 text-white mt-3 text-sm"
                style={{ backgroundColor: "#5865F2" }}
              >
                <img src={images.discord} />
                <div className="pl-3">Join Community</div>
              </div>
              <div
                className="border w-40 flex justify-center items-center rounded-full p-2 text-white mt-3 text-sm"
                style={{ backgroundColor: "black" }}
              >
                <img src={images.messageCircle} />
                <div className="pl-3">Chat with us</div>
              </div>
            </div>
            <div>
              <img
                src={images.support}
                alt="Documentation Graphic"
                style={{ height: "330px", width: "450px" }}
                className="hidden md:block"
                // className="md:h-32 lg:h-36" // Responsive height
              />
            </div>
          </div>

          {/* <div
            className="flex border rounded-xl ml-10 bg-white"
            style={{ width: "500px" }}
          >
            <div className="p-5">
              <div className="font-bold">Support & Community</div>
              <div className="text-gray-500">
                Integrate the API into your app in minutes, with detailed docs
                and SDKs for multiple languages.
              </div>
              <div
                className="border w-40 flex justify-center items-center rounded-full p-2 text-white mt-3 text-sm"
                style={{ backgroundColor: "#5865F2" }}
              >
                <img src={images.discord} />
                <div className="pl-3">Join Community</div>
              </div>
              <div
                className="border w-40 flex justify-center items-center rounded-full p-2 text-white mt-3 text-sm"
                style={{ backgroundColor: "black" }}
              >
                <img src={images.messageCircle} />
                <div className="pl-3">Chat with us</div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={images.support}
                alt=""
                srcset=""
                style={{ height: "130px" }}
              />
            </div>
          </div> */}
        </div>
      </div>

      <div
        className="pl-2 pr-2 md:pl-20 md:pr-10 py-10"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="flex flex-col lg:flex-row justify-between bg-white rounded-3xl">
          <div className="p-16 md:p-16">
            <h6 className="text-blue-600 font-bold">How it works</h6>
            <h2 className="text-4xl font-bold mb-4 leading-10 w-3/4">
              AI Solutions API for Developers
            </h2>
            <ul className="list-inside space-y-2 w-3/4">
              <li>
                <strong>1. Sign up and get your API key</strong>
                <br />
                <div className="text-gray-400 text-sm">
                  Click the button above to sign up and create your affiliate
                  account.
                </div>
              </li>
              <li>
                <strong>2. Choose the AI solution that fits your needs.</strong>
                <br />
                <div className="text-gray-400 text-sm">
                  Invite friends, colleagues, and followers by sharing your
                  personalized referral link.
                </div>
              </li>
              <li>
                <strong>
                  3. Start building and integrating AI features into your app.
                </strong>
                <br />
                <div className="text-gray-400 text-sm">
                  Receive payment for every successful referral made through
                  your link.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src={images.picture} style={{ height: "auto" }} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-20">
          <div className="font-extrabold text-2xl">Use Cases</div>
          <div className="text-sm text-gray-400">
            Experience the Future of Chat with Advanced Capabilities
          </div>
        </div>
      </div>
      <div className="rounded-lg  " style={{ backgroundColor: "#F9F9F9" }}>
        <div className="bg-gray-50 p-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-auto">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
              <img
                src={images.market}
                alt="Marketing & Advertising"
                className="h-10 w-10 mb-10"
              />
              <div className="font-bold text-sm ">Marketing & Advertising</div>
              <p className="text-gray-500 text-sm lg:w-52">
                Compelling visual content for campaigns
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col">
              <img
                src={images.game}
                alt="Game Development"
                className="h-10 w-10 mb-10"
              />
              <h3 className="font-bold text-sm">Game Development</h3>
              <p className="text-gray-500 text-sm">
                Rapidly generate diverse and detailed game assets
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col">
              <img
                src={images.education}
                alt="Education & Training"
                className="h-10 w-10 mb-10"
              />
              <h3 className="font-bold text-sm">Education & Training</h3>
              <p className="text-gray-500 text-sm">
                Produce educational materials and simulations
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col">
              <img
                src={images.ecommerce}
                alt="E-Commerce"
                className="h-10 w-10 mb-10"
              />
              <h3 className="font-bold text-sm">E-Commerce</h3>
              <p className="text-gray-500 text-sm">
                Enhance product presentations with creative visualizations
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col">
              <img
                src={images.film}
                alt="Film & Animation"
                className="h-10 w-10 mb-10"
              />
              <h3 className="font-bold text-sm">Film & Animation</h3>
              <p className="text-gray-500 text-sm">
                Bring scripts to life with conceptual art and storyboarding
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-5 rounded-xl shadow-md flex flex-col">
              <img
                src={images.itsaas}
                alt="IT & SaaS"
                className="h-10 w-10 mb-10"
              />
              <h3 className="font-bold text-sm">IT & SaaS</h3>
              <p className="text-gray-500 text-sm">
                Seamlessly integrate our platform into your app or digital
                service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIPage;
