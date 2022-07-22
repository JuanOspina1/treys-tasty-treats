import React from "react";

const GridItem = ({ productImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${productImage})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    ></div>
  );
};

export default GridItem;
