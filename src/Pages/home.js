import React from "react";
import Recommended from "../Components/Recommended/recommended";
import Carousel from "../Components/Carousel/carousel";
import Recent from "../Components/Recent/recentFeed";
import Description from "../Components/Description/description";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col bg-gray-100">
        <div>
          <Carousel/>
        </div>
        <div className="">
          <Recommended />
        </div>
        <div className="">
          <Recent/>
        </div>
        <div>
          <Description/>
        </div>
      </div>
    </div>
  );
}
