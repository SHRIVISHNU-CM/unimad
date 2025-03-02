"use client";
import InputField from "@/components/inputField";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosRefresh } from "react-icons/io";
import Recomended from "@/components/recomended";

function Page() {
  const router = useRouter();
  const results = useSearchParams();
  const [Data, SetData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1); // Default to "All"

  useEffect(() => {
    setIsMounted(true);
    const res = results.get("data");

    if (res) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(res));
        console.log("Parsed Data:", parsedData);

        if (Array.isArray(parsedData.InterviewInfo)) {
          SetData(parsedData.InterviewInfo);
        } else {
          SetData([]);
        }

        if (parsedData.info) {
          setRole(parsedData.info.role || "N/A");
          setCompany(parsedData.info.company || "N/A");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        SetData([]);
      }
    }
  }, [results]);

  if (!isMounted) return null;

  return (
    <>
      <h1 className="text-[16px] font-[600] text-[#346DE0] mt-[40px] ">
        Interview prep
      </h1>
      <button
        className="flex items-center w-[57.41px] h-[24px] font-[500] rounded-[4px] py-[4px] px-[8px] text-[12px] bg-[#346DE033] text-[#346DE0] mt-[25px]"
        onClick={() => router.push("/uniboard/applications/interview-prep")}
      >
        <MdKeyboardArrowLeft /> Back
      </button>

      <div className="flex gap-4 p-4 mt-[16px] ">
        <div className="flex flex-col w-[681px] overflow-y-auto p-4 rounded-lg">
          <div className="bg-white rounded-[4px] w-full h-[73px] py-[10px] pr-[24px] pl-[16px] flex justify-between items-center shadow-lg">
            <div>
              <h3 className="text-[14px] font-[600]">{role}</h3>
              <p className="text-[#808080] text-[14px] font-[400]">{company}</p>
            </div>

            <button className="flex items-center gap-[4px] bg-[#346DE0] text-white text-[12px] w-[76px] h-[24px] rounded-[4px] py-[4px] px-[8px]">
              <IoIosRefresh />
              Retake
            </button>
          </div>

          <div className="flex gap-[8px] my-[12px]">
            <button
              className={`px-[8px] rounded-[4px] w-[108px] h-[24px] text-center text-[12px] ${
                currentIndex === -1
                  ? "bg-[#346DE0] text-white"
                  : "bg-[#D0D0D0] text-[#808080]"
              }`}
              onClick={() => setCurrentIndex(-1)}
            >
              All
            </button>
            {Array.isArray(Data) &&
              Data.map((el, i) => (
                <button
                  key={i}
                  className={`px-[8px] rounded-[4px] w-[108px] h-[24px] text-center text-[12px] ${
                    currentIndex === i
                      ? "bg-[#346DE0] text-white"
                      : "bg-[#D0D0D0] text-[#808080]"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                >
                  {el?.type || "No Type"}
                </button>
              ))}
          </div>

          <div className="w-full h-[618px] overflow-y-scroll">
            {Array.isArray(Data) && Data.length > 0 && (
              Data.map((el, i) => (
                <div
                  key={i}
                  onClick={()=>setCurrentIndex(i)}
                  className={`w-full h-[363px] my-[8px] rounded-[4px] border-[2px]  shadow-[#346DE04D] ${
                    currentIndex === -1 || currentIndex === i ? "border-[#346DE0]" : "hidden border"
                  }`}
                >
                  <div className="flex justify-around py-[16px] px-[8px] h-min">
                    <h3 className="w-[330px] h-[19px] text-[16px] font-[400] text-[#808080]">
                      {el?.question || "No Question Available"}
                    </h3>
                    <h3 className="w-[108px] h-[24px] py-[4px] px-[8px] text-[12px] text-center rounded-[4px] font-[500] bg-[#346DE033] text-[#346DE0]">
                      {el?.type || "No Type"}
                    </h3>
                  </div>
                  <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
                  <h2 className="font-[400] text-[12px] text-[#808080] py-[8px] px-[4px]">
                    Your Answer
                  </h2>
                  <p className="text-[14px] font-[400] text-[#373737] p-[8px]">
                    {el?.answer || "No Answer"}
                  </p>
                </div>
              ))
            ) }
          </div>
        </div>

        <Recomended currentIndex={currentIndex} />
      </div>

      <InputField />
    </>
  );
}

export default Page;
