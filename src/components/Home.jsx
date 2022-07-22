import React from "react";
import BackgroundImage from "../assets/circle-crop-cookie-logo.png";
import Slogan1 from "../assets/slogan1.PNG";
import Slogan2 from "../assets/slogan2.PNG";

// Need to find a picture & add the logo & slogan

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-white px-8 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        {/* <div className="max-w mx-auto flex flex-col justify-center h-full"> */}
        <div className="grid grid-cols-3">
          <div
            style={{ backgroundImage: `url(${Slogan1})` }}
            className="bg-no-repeat bg-contain bg-center flex justify-center items-center h-[700px]"
          ></div>

          <div
            style={{ backgroundImage: `url(${BackgroundImage})` }}
            className="bg-no-repeat bg-contain bg-center flex justify-center items-center h-[700px]"
          ></div>
          <div
            style={{ backgroundImage: `url(${Slogan2})` }}
            className="bg-no-repeat bg-contain bg-center flex justify-center items-center h-[700px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
