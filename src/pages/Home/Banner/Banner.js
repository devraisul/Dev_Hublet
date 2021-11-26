import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className=" container flex flex-col-reverse px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16  md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          
          <div className="w-full">
            <h1 className="text-3xl font-medium tracking-wide text-indigo-500 dark:text-white md:text-4xl">
              The best Apple Watch apps
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
              asperiores alias vero magnam recusandae adipisci ad vitae
              laudantium quod rem voluptatem eos accusantium cumque.
            </p>
            <div className="mt-6">
              <NavLink
                to=""
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-500 rounded-md md:inline hover:bg-indigo-400"
              >
                Download from App Store
              </NavLink>
            </div>
          </div>
        </div>
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://i.ibb.co/4gv4p1h/watches-PNG9855.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
