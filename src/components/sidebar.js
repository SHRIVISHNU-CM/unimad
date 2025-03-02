"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa"; // Import icons
import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";

function SlideBar() {
  // State to manage submenu visibility
  const [openSubMenu, setOpenSubMenu] = useState(false);

  // List for the Menu
  const MenuOptions = [
    { id: 1, name: "Home", icon: null, path: "/" },
    { id: 2, name: "My Resume", icon: null, path: "/" },
    { id: 3, name: "LinkedIN Optimization", icon: <FaCaretRight />, path: "/" },
    { id: 4, name: "Portfolio", icon: null, path: "/" },
    {
      id: 5,
      name: "Applications",
      path: "#",
      icon: openSubMenu ? <FaCaretDown /> : <FaCaretRight />, // Toggle icon
      hasSubmenu: true,
      submenu: [{ id: 6, name: "Interview Prep", path: "/uniboard/applications/interview-prep" }], // Submenu items
    },
  ];

  return (
    <div className="w-[289px] h-[832px] bg-white ">
      <Image
        src="/images/Ellipse.png"
        width={289}
        height={50}
        className=""
        alt="ellipse"
      />
      <div className="flex items-center gap-[4px] absolute top-[27px] left-[100px]">
        <Image
          src="/images/unimad.png"
          width={107.03}
          height={24}
          alt="unimad"
        // className="bg-blue-400"
        />
      </div>
        {/* User Info */}
        <div className="flex items-center justify-between mb-4 mt-[98px] px-8 py-4">
          <div className="flex items-center gap-x-[4px]">
            <Image
              src="/images/profile.png"
              width={23}
              height={23}
              alt="Profile"
              className="w-[23px] h-[23px]" />
            <span className=" font-[600] text-[#346DE0] text-[16px]">Tanya Fernandez</span>

          </div>
          <CiMenuKebab className="text-[#808080]" />
        </div>
        <div className="w-full h-[1px] bg-[#D9D9D9]"></div>


        {/* Menu List */}
        <ul className="space-y-3 px-8 py-4">
          {MenuOptions.map((item) => (
            <React.Fragment key={item.id}>
              {/* Parent Menu Items */}
              <li
                className="cursor-pointer flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-md"
                onClick={() => item.hasSubmenu && setOpenSubMenu(!openSubMenu)}
              >
                <a key={item.id} href={item.path}>{item.name}</a>
                <span>{item.icon}</span>
              </li>

              {/* Submenu (Conditional Rendering) */}
              {item.hasSubmenu && openSubMenu && (
                <ul className="ml-6 space-y-2">
                  {item.submenu.map((sub) => (
                    <li key={sub.id} className="cursor-pointer py-1 px-2 text-gray-700 hover:bg-gray-200 rounded-md">
                      <Link key={sub.id} href={sub.path}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>

    </div>
  );
}

export default SlideBar;
