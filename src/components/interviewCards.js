"use client";

import React, { useEffect, useState } from 'react'
import { IoIosRefresh } from "react-icons/io";


function InterviewCards({ title, company }) {
     const [isMounted, setIsMounted] = useState(false);
    
        useEffect(() => {
            setIsMounted(true);
        }, []);
    
        if (!isMounted) return null;
    return (
        <>
            <div className={`bg-[#FFFFFF] rounded-[4px] w-[357px]  h-[73px] py-[10px] pr-[24px] pl-[16px] flex justify-between items-center shadow-lg`}>
                <div >
                    <h3 className="text-[14px] font-[600]">{title}</h3>
                    <p className="text-[#808080] text-[14px] font-[400]">{company}</p>
                </div>

                <button className='flex items-center gap-[4px] bg-[#346DE0] text-white text-[12px] w-[76px] h-[24px] rounded-[4px] py-[4px] px-[8px]'>
                    <span><IoIosRefresh/></span>Retake
                </button>
            </div>
        </>
    )
}

export default InterviewCards
