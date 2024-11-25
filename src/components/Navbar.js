// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import images from "../images";

const Navbar = () => {
  return (
    // <nav className="flex justify-between items-center p-4 bg-white shadow-md">
    //   <div className="text-xl font-bold text-blue-600">ModelsLab</div>
    //   <ul className="flex space-x-6">
    //     <li>
    //       <Link to="/products" className="hover:text-blue-500">
    //         Products
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/resources" className="hover:text-blue-500">
    //         Resources
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/company" className="hover:text-blue-500">
    //         Company
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/models-lab" className="hover:text-blue-500">
    //         Models Lab
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/pricing" className="hover:text-blue-500">
    //         Pricing
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/enterprise" className="hover:text-blue-500">
    //         Enterprise
    //       </Link>
    //     </li>
    //   </ul>
    //   <div className="flex space-x-4">
    //     <Link to="/login" className="hover:text-blue-500">
    //       Login
    //     </Link>
    //     <Link
    //       to="/launch-app"
    //       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
    //     >
    //       Launch App
    //     </Link>
    //   </div>
    // </nav>
    <>
      <header class="flex justify-center items-center p-2 bg-white shadow">
        <h1 class="text-2xl font-bold pr-4">
          Models<span class="text-blue-500">Lab</span>
        </h1>
        <nav>
          <ul class="flex gap-5 font-bold">
            <li class="flex items-center justify-center">
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Products
              </a>
              <img src={images.up} class="pl-2 pt-1" />
            </li>
            <li class="flex items-center justify-center">
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Resources
              </a>
              <img src={images.up} class="pl-2 pt-1" />
            </li>
            <li class="flex items-center justify-center">
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Company
              </a>
              <img src={images.up} class="pl-2 pt-1" />
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Models Lab
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-500 text-sm">
                Enterprise
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex space-x-4 pl-9">
          <div class="flex items-center font-medium py-1 px-3 rounded cursor-pointer">
            <img src="./images/moon.png" alt="" srcset="" />
          </div>
          <div class="flex items-center border text-gray-800 text-sm font-medium py-2 px-3 rounded cursor-pointer hover:bg-gray-300">
            Login
          </div>
          <div class="flex items-center justify-center bg-blue-500 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer hover:bg-blue-600">
            Launch App
            <img src={images.Subtract} class="pt-1 pl-2" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
