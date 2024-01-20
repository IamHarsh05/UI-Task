import React from "react";
import {
  EpArrowRightBold,
  Fa6RegularBookmark,
  FaSolidWallet,
  RaphaelPeople,
} from "../Icons/icon";
import { Link } from "react-router-dom";

export default function Card({ content, wrap }) {
  return (
    <>
      <article className="flex px-4 py-2 max-w-xl flex-col items-start justify-between border-2 rounded-lg divide-y-2 bg-white">
        <div className="relative py-4 flex w-full justify-around items-center gap-x-4">
          <img
            src={content.logo}
            alt=""
            className="h-10 w-10 rounded-lg bg-gray-50 object-cover"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="http://">
                <span className="absolute inset-0"></span>
                {content.title}
              </a>
            </p>
            <p className="text-gray-600">{content.subTitle}</p>
          </div>
          <Fa6RegularBookmark />
        </div>
        <div className="flex flex-col w-full py-2 items-center gap-x-4 text-xs">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex justify-end">
              <RaphaelPeople />
            </div>
            <p className="px-4">More Than {content.customers} Lakhs</p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex justify-end">
              <FaSolidWallet />
            </div>
            <p className="px-4">$ {content.revenue}</p>
          </div>
          <div className={`m-2 flex w-full ${wrap ? `` : "flex-wrap"} `}>
            {content.categories.map((subject, index) => (
              <p
                key={index}
                className="relative z-10 rounded-full bg-gray-50 mx-1 px-4 py-3 font-medium text-gray-600 hover:bg-gray-100"
              >
                {subject}
              </p>
            ))}
          </div>
          <Link to="/exam">
            <div className="flex text-sky-500 items-center cursor-pointer" onClick={()=>window.scrollTo(0,0)}>
              <a href="http://" className="px-2">
                View details
              </a>
              <EpArrowRightBold className="text-sky-500 w-4 h-4" />
            </div>
          </Link>
        </div>
      </article>
    </>
  );
}
