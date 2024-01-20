import React, { useState } from "react";
import Card from "../Card/card";
import { EpArrowRightBold } from "../Icons/icon";
import { Contents } from "../Data/data";
import "./recommended.css";

export default function Recommended() {
  const [seeall, setSeeall] = useState("flex");
  const [wrap, setWrap] = useState(true);

  const colapse = () => {
    if (seeall === "flex") {
      setSeeall("grid");
    } else {
      setSeeall("flex");
    }
    setWrap(!wrap);
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex justify-between">
          <p className="my-4 text-lg font-semibold">Recommended Stores</p>
        </div>
        <div
          className={`feeds mx-auto mt-2 ${seeall} overflow-x-scroll max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-6 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4`}
        >
          {Contents.map((content, index) => (
            <Card key={index} content={content} wrap={wrap} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center px-4 cursor-pointer" onClick={colapse}>
        <span className="px-4 py-2  bg-blue-500 text-white rounded-full">See {wrap ? `All` :`Less`}</span>
        <EpArrowRightBold className="text-sky-500" />
      </div>
    </div>
  );
}
