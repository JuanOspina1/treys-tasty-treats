import React from "react";
import BackgroundImage from "../assets/circle-crop-cookie-logo.png";

// Need to find a picture & add the logo & slogan

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-white px-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        {/* <div className="max-w mx-auto flex flex-col justify-center h-full"> */}
        <div
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="bg-no-repeat bg-contain bg-center flex justify-center items-center h-[600px]"
        ></div>
        {/* <img src={BackgroundImage} alt="cookie bud" /> */}
      </div>
    </div>
  );
};

export default Home;
