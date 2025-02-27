"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa"; // Import icons

function SlideBar() {
  // State to manage submenu visibility
  const [openSubMenu, setOpenSubMenu] = useState(false);

  // List for the Menu
  const MenuOptions = [
    { id: 1, name: "Home", icon: null,path:"/" },
    { id: 2, name: "My Resume", icon: null,path:"/" },
    { id: 3, name: "LinkedIN Optimization", icon: <FaCaretRight />,path:"/" },
    { id: 4, name: "Portfolio", icon: null,path:"/" },
    {
      id: 5,
      name: "Applications",
      path:"#",
      icon: openSubMenu ? <FaCaretDown /> : <FaCaretRight />, // Toggle icon
      hasSubmenu: true,
      submenu: [{ id: 6, name: "Interview Prep",path:"/uniboard/applications/interview-prep" }], // Submenu items
    },
  ];

  return (
    <div className="w-80 h-screen bg-white shadow-md px-8 py-4">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <span className="ml-3 font-semibold text-lg">Tanya Fernandez</span>
      </div>

      {/* Menu List */}
      <ul className="space-y-3">
        {MenuOptions.map((item) => (
          <React.Fragment key={item.id}>
            {/* Parent Menu Items */}
            <li
              className="cursor-pointer flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-md"
              onClick={() => item.hasSubmenu && setOpenSubMenu(!openSubMenu)}
            >
              <a href={item.path}>{item.name}</a>
              <span>{item.icon}</span>
            </li>

            {/* Submenu (Conditional Rendering) */}
            {item.hasSubmenu && openSubMenu && (
              <ul className="ml-6 space-y-2">
                {item.submenu.map((sub) => (
                  <li key={sub.id} className="cursor-pointer py-1 px-2 text-gray-700 hover:bg-gray-200 rounded-md">
                    <Link href={sub.path}>{sub.name}</Link>
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
