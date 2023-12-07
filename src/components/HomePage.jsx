import React from "react";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full">
      <div className="col-span-2">
        <LeftColumn />
      </div>
      <div className="w-full">
        <RightColumn />
      </div>
    </div>
  );
};

export default HomePage;
