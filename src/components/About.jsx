import React from "react";
import HomePicture from "../assets/home-package-cookie.jpg";
import Slogan from "../assets/baked-slogan.PNG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            style={{ backgroundImage: `url(${HomePicture})` }}
            className="shadow-lg shadow-[#040c16] rounded-md  bg-cover bg-center h-[650px]"
          ></div>
          <div className="max-w-[1000px] w-full  gap-8 px-4">
            <div
              style={{ backgroundImage: `url(${Slogan})` }}
              className="bg-cover bg-center h-[650px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
