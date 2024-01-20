import React from "react";
import {
  EpCalendar,
  Fa6RegularBookmark,
  RaphaelPeople,
  ZmdiShare,
} from "../Icons/icon";

const content = {
  logo: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
  title: "JEE Mains",
  subTitle: "National Testing Agency",
  students: 20,
  fees: 1200,
  subjects: ["Engineering", "PCM", "IIT"],
  date: "2015-12-23",
};

export default function Apply() {
  return (
    <div className="p-4">
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
          <ZmdiShare />
        </div>
        <div className="flex flex-col w-full py-2 items-center gap-x-4 text-xs divide-y-2">
          <div className="flex flex-col justify-start items-start ">
            <div className="py-1 flex items-center justify-start">
              <EpCalendar className="text-sky-500 h-6 w-6" />
              <p className="px-4">Exam Date: {content.date} Lakhs</p>
            </div>
            <div className="py-1 flex items-center justify-end">
              <RaphaelPeople className="text-sky-500 h-6 w-6" />
              <p className="px-4">More Than {content.students} Lakhs</p>
            </div>
          </div>
          <div className="flex w-full py-4 items-center justify-between">
            <div className="pr-16">
              <p>Posted 50 days ago, ends on 31 Dec</p>
            </div>
            <div className="flex text-sky-500 items-center cursor-pointer">
              <button  className="bg-sky-500 text-white rounded-full py-2 px-4 hover:bg-sky-900 cursor-pointer">Apply now</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
