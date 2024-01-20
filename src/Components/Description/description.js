import React from "react";
import { description } from "../Data/data";
import { BiTwitterX, DeviconLinkedin, LogosFacebook } from "../Icons/icon";

export default function Description() {
  return (
    <div className="bg-white flex flex-col px-10 py-2 divide-y-2 rounded-lg">
      <div className="py-2">
        <div>
          <p className="text-lg font-semibold py-4">Stores Information:</p>
          <ul className="list-disc">
            {description[0].storeInfo.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold py-4">Customers:</p>
          <ul className="list-disc">
            {description[0].eligibility.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold py-4">Important Details:</p>
          <ul className="list-disc">
            {description[0].details.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex py-4">
        <LogosFacebook className="h-10 w-10 mx-2" />
        <BiTwitterX className="h-10 w-10 bg-black text-white mx-2" />
        <DeviconLinkedin className="h-10 w-10 mx-2" />
      </div>
    </div>
  );
}
