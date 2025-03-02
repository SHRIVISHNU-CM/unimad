"use client";

import React from "react";
import Image from "next/image";

function InputField() {
  return (
    <div className=" fixed bottom-3">
      <div className="w-[1130px] h-[52px] px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[42px] flex justify-around items-center">
        <Image
          src="/images/Group.png"
          width={40}
          height={40}
          alt="Group"
          className=" text-[#346DE0]" />
        <input
          type="text"
          className="w-full border-none  outline-none"
        />
        <Image
          src="/images/send.png"
          width={24}
          height={24}
          alt="Send"
          className="text-[#346DE0]" />
      </div>

    </div>
  );
}

export default InputField;
