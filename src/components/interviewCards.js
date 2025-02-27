"use client";

import React from 'react'
import { IoIosRefresh } from "react-icons/io";


function InterviewCards({ title, company }) {
    return (
        <>
            <div className="bg-[#FFFFFF] rounded-[4px] w-[356px] h-[73px] py-[10px] pr-[24px] pl-[16px] flex justify-between items-center shadow-lg">
                <div className=''>
                    <h3 className="text-[14px] font-[600]">{title}</h3>
                    <p className="text-gray-500 text-[14px] font-[400]">{company}</p>
                </div>

                <button className='flex items-center gap-[4px] bg-[#346DE0] text-white text-[12px] w-[76px] h-[24px] rounded-[4px] py-[4px] px-[8px]'>
                    <span><IoIosRefresh/></span>Retake
                </button>
            </div>
        </>
    )
}

export default InterviewCards
