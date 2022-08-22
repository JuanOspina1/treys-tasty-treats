import React from "react";
import HomePicture from "../assets/home-package-cookie.jpg";
import Slogan from "../assets/baked-slogan.PNG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8 text-black ">
            <p className="text-4xl font-bold inline border-b-4 border-[#7cc6d2]">
              About
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              style={{ backgroundImage: `url(${HomePicture})` }}
              className="shadow-lg shadow-[#040c16] rounded-md  bg-cover bg-center h-[650px]"
            ></div>
            <div className="max-w-[1000px] w-full gap-x-8 px-4 grid-rows-3">
              <div className="about-text">
                <h1 className="about-text-h1">What Makes Them Special?</h1>
                <p>
                  The secret behind our "special" cookies is our homemade
                  cannabutter. Our signature process is tried and tested with
                  over 100,000 cookies made and hundreds of happy, returning
                  customers.
                </p>
              </div>

              <div className="mt-8 about-text">
                <h1 className="about-text-h1">Packaging</h1>
                <p>
                  The secret behind our "special" cookies is our homemade
                  cannabutter. Our signature process is tried and tested with
                  over 100,000 cookies made and hundreds of happy, returning
                  customers.
                </p>
              </div>

              <div className="mt-8 about-text">
                <h1 className="about-text-h1">Ordering</h1>
                <p>
                  The secret behind our "special" cookies is our homemade
                  cannabutter. Our signature process is tried and tested with
                  over 100,000 cookies made and hundreds of happy, returning
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
