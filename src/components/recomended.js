"use client"
import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";

//Few recomended answers
const RecomendedAns = [
    [
        "I'm a detail-oriented professional who thrives in collaborative environments. My background includes experience in [your field], where I've developed strong skills in [key skills relevant to the position]. I'm particularly passionate about [specific aspect of the work] and have demonstrated this through [brief example of achievement].",
        " 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    ],
    [
        "My key strengths include strong analytical thinking, which allows me to break down complex problems methodically. I'm also particularly effective at collaborative work - I value diverse perspectives and find that teams produce better results when everyone's contributions are heard and respected. Additionally, I'm known for my reliability - when I commit to a deadline or project, I ensure it's completed thoroughly and on time.",
        " 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    ],
    [
        "In my previous role at a marketing agency, we faced a significant challenge when a major client suddenly requested a complete campaign redesign just two weeks before launch. The original concept had already been approved, but their market research revealed a shift in their customer base that made our approach less effective.Rather than panicking, I immediately organized a team meeting to assess what could be salvaged from our existing work and what needed complete reconstruction",
        " ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum t. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    ]
];

function Recomended({  currentIndex }) {
    const [CurrVal, SetCurrVal] = useState(0);


    useEffect(() => {
        if (currentIndex === -1) {
            SetCurrVal(0); 
        } else {
            SetCurrVal(0); 
        }
    }, [currentIndex]);

    // Handle Generate 
    const HandleGenerate = () => {
        const index = currentIndex === -1 ? 0 : currentIndex;
        if (index >= 0 && index < RecomendedAns.length) {
            SetCurrVal((prev) => (prev + 1) % RecomendedAns[index].length);
        }
    };

    return (
        <div className="w-[406px] h-[540px] sticky top-0 p-4 bg-white rounded-lg shadow-[#346DE04D] border-[2px] border-[#346DE0]">
            <h2 className="text-[16px] font-[400] mb-4 text-center text-[#808080]">
                Recommended Answer
            </h2>
            <p className="text-[14px] text-gray-600 mb-8">
                {currentIndex >= 0 && currentIndex < RecomendedAns.length
                    ? RecomendedAns[currentIndex === -1 ? 0 : currentIndex][CurrVal]
                    : "Select a question to see recommended answers."}
            </p>
            {/* Generate Button */}
            <div className="absolute bottom-4 left-[25%]">
                <button
                    onClick={HandleGenerate}
                    className="w-[188px] h-[38px] py-[10px] pr-[24px] pl-[16px] bg-[#346DE0] text-white rounded-[4px] flex items-center">
                    <CgProfile className="mr-[6px]" />
                    Generate another
                </button>
            </div>
        </div>
    );
}

export default Recomended;
