import React from "react";
import ProductPic1 from "../assets/cookie-bud-can.jpg";
import ProductPic2 from "../assets/cookie-bud.jpg";
import GridItem from "./GridItem";

const Work = () => {
  return (
    <div name="gallery" className="w-full md:h-screen bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-black ">
          <p className="text-4xl font-bold inline border-b-4 border-[#7cc6d2]">
            Product Gallery
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          <GridItem productImage={ProductPic1} />

          <GridItem productImage={ProductPic2} />

          <GridItem productImage={ProductPic1} />

          <GridItem productImage={ProductPic1} />

          <GridItem productImage={ProductPic2} />

          <GridItem productImage={ProductPic1} />
        </div>
      </div>
    </div>
  );
};

export default Work;
