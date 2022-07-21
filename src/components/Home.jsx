import React from "react";
import BackgroundImage from "../assets/cookie-bud-can.jpg";

// Need to find a picture & add the logo & slogan

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#222629] px-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        {/* <div className="max-w mx-auto flex flex-col justify-center h-full"> */}
        <img src={BackgroundImage} alt="cookie bud" />
      </div>
    </div>
  );
};

export default Home;
