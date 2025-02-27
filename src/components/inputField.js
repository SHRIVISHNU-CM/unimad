"use client";

import React from "react";
import { IoSend } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function InputField() {
  return (
    <div className=" absolute bottom-3">
      <div className="w-[1130px] h-[52px] px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[42px] flex justify-around items-center">
        <CgProfile className="text-[24px] text-[#346DE0]"/>
        <input
          type="text"
          className="w-full border-none  outline-none"
        />
        <IoSend className="text-[24px] text-[#346DE0]"/>
      </div>

    </div>
  );
}

export default InputField;
