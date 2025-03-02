import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

const RecomendedAns = [
    "ALL ARE good",
    "Hi",
    "WOW"
]
function Recomended() {
    const [CurrVal, SetCurrVal] = useState(0)


    //handle Generate
    const HandleGenerate = () => {
        SetCurrVal((e)=>(e+1)%RecomendedAns.length)
    }
    
    return (
        <>
            <div className="w-[406px] h-[540px] sticky top-0 p-4 bg-white rounded-lg shadow-[#346DE04D] border-[2px] border-[#346DE0]">
                <h2 className="text-[16px] font-[400] mb-4 text-center text-[#808080]">
                    Recommended Answer
                </h2>
                <p className="text-[14px] text-gray-600 mb-8">
                    {
                        RecomendedAns[CurrVal]
                    }
                </p>
                <div className="absolute bottom-4 left-[25%]">
                    <button 
                    onClick={HandleGenerate}
                    className="w-[188px] h-[38px] py-[10px] pr-[24px] pl-[16px] bg-[#346DE0] text-white rounded-[4px] flex items-center">
                        <CgProfile className="mr-[6px]" />
                        Generate another
                    </button>
                </div>
            </div>
        </>
    )
}

export default Recomended
