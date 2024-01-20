import React, { useEffect, useState } from "react";
import { Fa6SolidBell, IconParkOutlineSearch } from "../Icons/icon";

const Links = [
  { child: "Home", href: "http://" },
  { child: "Result", href: "http://" },
  { child: "FAQ", href: "http://" },
  { child: "About Us", href: "http://" },
  { child: "Contact US", href: "http://" },
];

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 950);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobileView ? <MobileView /> : <WebView />;
};

const WebView = () => {
  return (
    <>
      <div className="flex w-screen justify-around items-center p-2">
        <div className="grow-0 mx-4 w-28 h-10 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(Assets/logo.png)`}}></div>
        <div className="flex grow justify-between">
          {Links.map((child, index) => (
            <div key={index}>
              <ListItem child={child.child} NavLink={child.href} />
            </div>
          ))}
        </div>
        <div className="grow-0 px-12">
          <label
            htmlFor="search"
            className="flex items-center border rounded-full border-sky-500 px-2 py-1"
          >
            <IconParkOutlineSearch />
            <input
              type="text"
              id="search"
              className="mx-2 outline-none bg-transparent text-white"
              placeholder="Type Here"
            />
          </label>
        </div>
        <div className="flex grow justify-around items-center">
          <Fa6SolidBell className="text-sky-500" />
          <div className="flex -space-x-2 overflow-hidden p-1">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MobileView = () => {
  return (
    <>
      <div className="flex w-screen justify-around items-center overflow-hidden p-2">
        <div className="grow-0 px-1 w-1/3 h-14 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(Assets/logo.png)`}}></div>
        <div className="grow-0 px-1">
          <label
            htmlFor="search"
            className="flex items-center border rounded-full border-sky-500  px-1 py-1"
          >
            <IconParkOutlineSearch className="text-white"/>
            <input
              type="text"
              id="search"
              className="mx-1 w-1/2 outline-none bg-transparent text-white"
              placeholder="Type Here"
            />
          </label>
        </div>
        <div className="flex grow justify-around items-center mx-1">
          <div className="flex -space-x-2 overflow-hidden p-1">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const ListItem = ({ child, NavLink }) => {
  return (
    <div>
      <a href={NavLink} className="text-white hover:text-blue-500">
        {child}
      </a>
    </div>
  );
};
