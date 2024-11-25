import React from 'react'

const Pricing = () => {
  return (
    <div>
      {/* <div className="mt-4">
        <p className="text-gray-700">
          {activeTab === "individuals" && (
            <>
              <div className="pl-5 text-gray-500">Categories</div>
            </>
          )}
          {activeTab === "business" && "Content for Business"}
          {activeTab === "students" && "Content for Students"}
          {activeTab === "education" && "Content for Education"}
        </p>
      </div> */}

      {/* ====================sidebar with prices====================== */}

      {/* <div className="flex">
        <div className="  w-60" style={{ backgroundColor: "#F9F9F9" }}>
          <div className="p-4 bg-white h-3/4 rounded-br-2xl border-b-2 pt-8">
            <ul>
              <li className="flex mb-4 gap-3">
                <img src={images.Imagegen} />
                <a href="#" className="text-blue-500 text-sm">
                  Imagen
                </a>
              </li>
              <li className="mb-4 flex gap-3">
                <img src={images.videofusion} />
                <a href="#" className="text-gray-600">
                  VideoFusion
                </a>
              </li>
              <li className="mb-4 flex gap-3">
                <img src={images.DVerse} />
                <a href="#" className="text-gray-600">
                  3D Verse
                </a>
              </li>
              <li className="mb-4 flex gap-3">
                <img src={images.audiogen} />
                <a href="#" className="text-gray-600">
                  AudioGen
                </a>
              </li>
              <li className="mb-4 flex gap-3">
                <img src={images.autoAI} />
                <a href="#" className="text-gray-600">
                  Auto AI
                </a>
              </li>
              <li className="mb-4 flex gap-3">
                <img src={images.LLMaster} />
                <a href="#" className="text-gray-600">
                  LLMaster
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex-1 p-4 rounded-t-2xl   border-b-0"
          style={{ backgroundColor: "#F9F9F9" }}
        >
          <div className="space-x-4 p-4 ">
            <div className="flex justify-center items-center">
              <div className="flex border rounded-lg">
                <div
                  onClick={() => setActiveDaysTab("monthly")}
                  className={`text-sm py-2 px-4  font-semibold border-3 rounded-lg ${
                    activeDaysTab === "monthly"
                      ? "text-black bg-white"
                      : "text-gray-600"
                  }`}
                >
                  <div>Monthly</div>
                </div>
                <div
                  onClick={() => setActiveDaysTab("yearly")}
                  className={`py-2 px-4 text-sm font-semibold rounded-lg border ${
                    activeDaysTab === "yearly"
                      ? "text-black bg-white"
                      : "text-gray-600 border"
                  }`}
                >
                  Yearly <span className="text-blue-500 text-xs">-20%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-extrabold">Mini Plan</h3>
              <p className="text-gray-400 text-sm">
                For Moderate traffic conditions
              </p>
              <p className="pt-3">
                <span className="font-bold text-2xl">$7</span>
                <span className="text-gray-400">/month</span>
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center pt-2 gap-2">
                <img src={images.discount} style={{ height: "15px" }} /> 40%
                cheaper
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center gap-2">
                <img src={images.flash} style={{ height: "15px" }} /> 10% faster
              </p>
              <div
                className="border"
                style={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <p className="text-black text-sm font-bold">Subscribed</p>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <img src={images.cardTick} />
                    <div
                      className="text-sm"
                      style={{ color: "#19C59D", fontWeight: "bold" }}
                    >
                      699 API Credits to experience all features
                    </div>
                  </li>
                  <div className="flex items-center gap-3 font-bold text-xs pt-1">
                    <img src={images.tickMark} style={{ height: "15px" }} />
                    Upto 1 parallel generations
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img src={images.tickMark} style={{ height: "15px" }} />{" "}
                    Super Resolution
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img src={images.tickMark} style={{ height: "15px" }} />{" "}
                    Text to Image
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img src={images.tickMark} style={{ height: "15px" }} />{" "}
                    Image to Image
                  </div>
                  <div className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img src={images.tickMark} style={{ height: "15px" }} />{" "}
                    Shared GPU
                  </div>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-extrabold">Basic Plan</h3>
              <p className="text-gray-400 text-sm">
                For Moderate traffic conditions
              </p>
              <p className="pt-3">
                <span className="font-bold text-2xl">$21</span>
                <span className="text-gray-400">/month</span>
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center pt-2 gap-2">
                <img src={images.discount} style={{ height: "15px" }} /> 40%
                cheaper
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center gap-2">
                <img src={images.flash} style={{ height: "15px" }} /> 10% faster
              </p>
              <div
                className="border"
                style={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <p className="text-black text-sm font-bold">Subscribed</p>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <img
                      src={images.cardTick}
                      className="w-5 h-5"
                      alt="Check Icon"
                    />
                    <div
                      className="text-sm"
                      style={{ color: "#19C59D", fontWeight: "bold" }}
                    >
                      3250 API Credits to experience all features
                    </div>
                  </li>
                  <li className="flex items-center gap-3 font-bold text-xs pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Up to 5 parallel generations
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Mini Features Included
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Background Remover
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Inpainting
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Shared GPU
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-extrabold">Standard Plan</h3>
              <p className="text-gray-400 text-sm">
                For Moderate traffic conditions
              </p>
              <p className="pt-3">
                <span className="font-bold text-2xl">$47</span>
                <span className="text-gray-400">/month</span>
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center pt-2 gap-2">
                <img src={images.discount} style={{ height: "15px" }} /> 40%
                cheaper
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center gap-2">
                <img src={images.flash} style={{ height: "15px" }} /> 10% faster
              </p>
              <div
                className="border"
                style={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <p className="text-black text-sm font-bold">Subscribed</p>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li className="flex items-center gap-3 mb-2">
                    <img
                      src={images.cardTick}
                      className="w-5 h-5"
                      alt="Check Icon"
                    />
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#19C59D" }}
                    >
                      10K API Credits to experience all features
                    </div>
                  </li>
                  <li className="flex items-center gap-3 font-bold text-xs pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Up to 10 parallel generations
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Basic Features Included
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    AI Avatar Generator
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Deepfake
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Virtual Try-on
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Controlnet
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Shared GPU
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-extrabold">Premium Plan</h3>
              <p className="text-gray-400 text-sm">
                For Moderate traffic conditions
              </p>
              <p className="pt-3">
                <span className="font-bold text-2xl">$147</span>
                <span className="text-gray-400">/month</span>
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center pt-2 gap-2">
                <img src={images.discount} style={{ height: "15px" }} /> 40%
                cheaper
              </p>
              <p className="text-sm text-blue-500 font-bold flex items-center gap-2">
                <img src={images.flash} style={{ height: "15px" }} /> 10% faster
              </p>
              <div
                className="border"
                style={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#F9F9F9",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <p className="text-black text-sm font-bold">Subscribed</p>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li className="flex items-center gap-3 mb-2">
                    <img
                      src={images.cardTick}
                      className="w-5 h-5"
                      alt="Check Icon"
                    />
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#19C59D" }}
                    >
                      Unlimited API Credits to experience all features
                    </div>
                  </li>
                  <li className="flex items-center gap-3 font-bold text-xs pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Up to 15 parallel generations
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Basic Features Included
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    AI Avatar Generator
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Deepfake
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Virtual Try-on
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Controlnet
                  </li>
                  <li className="flex items-center gap-3 font-bold text-sm pt-1">
                    <img
                      src={images.tickMark}
                      style={{ height: "15px" }}
                      alt="Check Icon"
                    />
                    Shared GPU
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* ===============Reviews==================== */}
    </div>
  );
}

export default Pricing