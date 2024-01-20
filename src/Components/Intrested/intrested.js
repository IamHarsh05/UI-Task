import React, { useState } from "react";
import { Contents } from "../Data/data";
import Card from "../Card/card";
import "./intrested.css";

export default function Intrested() {
  const [showall, setShowAll] = useState(false);

  return (
    <>
      <div
        className={`feeds mx-auto p-4 mt-2 grid ${
          showall ? "" : "h-96"
        } overflow-scroll max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-10 sm:mt-6 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-1`}
      >
        {Contents.map((content, index) => (
          <Card key={index} content={content} wrap={false} />
        ))}
      </div>
      <div className="flex justify-center p-8" onClick={() => setShowAll(!showall)}>
        <button className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-900 rounded-full">{showall ? 'Show Less' : 'Show All'}</button>
      </div>
    </>
  );
}
