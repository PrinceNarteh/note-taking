import React from "react";
import { FiBell } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { MdArrowBackIosNew, MdOutlineFavoriteBorder } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { FaTasks } from "react-icons/fa";
import { BiHighlight } from "react-icons/bi";
import user from "../assets/images/user.jpg";

const links = [
  {
    icons: GiNotebook,
    label: "All Notes",
  },
  {
    icons: FiBell,
    label: "Reminders",
  },
  {
    icons: FaTasks,
    label: "Tasks",
  },
  {
    icons: MdOutlineFavoriteBorder,
    label: "Favorites",
  },
  {
    icons: BiHighlight,
    label: "Highlights",
  },
  {
    icons: GiNotebook,
    label: "Activities",
  },
];

const SideBar = () => {
  return (
    <div className="fixed h-screen bg-slate-900 text-white w-60 p-3 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="w-8 h-8 bg-lime-500 flex justify-center gap-2 items-center font-bold rounded-full">
            P
          </span>
          <span className="block">Prince</span>
        </div>
        <div className="flex gap-4">
          <TfiReload className="cursor-pointer" />
          <MdArrowBackIosNew className="cursor-pointer" />
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-bold">Quick links</h3>
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className="py-1.5 pl-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800"
            >
              <span>{React.createElement(link.icons)}</span>
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2">
        <div>
          <img src={user} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <h3>Thomas Williams</h3>
          <h6 className="text-gray-500 text-sm">Admin</h6>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
