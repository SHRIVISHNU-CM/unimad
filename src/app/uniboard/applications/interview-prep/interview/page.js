"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

// Questions array with objects containing question name and type
const questions = [
    {
        name: "Can you please tell me a bit about yourself?",
        typeQ: "Behavioural",
    },
    {
        name: "What are your strengths and weaknesses?",
        typeQ: "Question Type1",
    },
    {
        name: "Describe a challenge you faced and how you handled it.",
        typeQ: "Question Type2",
    },
];

function Page() {
    const router = useRouter();
    const result = useSearchParams()
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));
    const [isMounted, setIsMounted] = useState(false);
    const [role, SetRole] = useState("")
    const [company, Setcompany] = useState("")

    useEffect(() => {
        setIsMounted(true);

        const info = result.get("info")
        if (info) {
            try {
                const parsed = JSON.parse(decodeURIComponent(info))
                SetRole(parsed.role || "NA")
                Setcompany(parsed.company || "NA")
            } catch (error) {
                console.log(e)
            }
        }
    }, [result]);

    if (!isMounted) return null;

    // Next Function
    const handleNext = () => {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        }
    };

    // Handle Skip
    const handleSkip = () => handleNext();

    //Handle Submit 

    const HandleSubmit = () => {
        const InterviewInfo = questions.map((e, i) => ({
            question: e.name,
            type: e.typeQ,
            answer: answers[i]
        }))

        const query = encodeURIComponent(
            JSON.stringify({ InterviewInfo, info: { role, company } })
        )

        router.push(`/uniboard/applications/interview-prep/review?data=${query}`)
    }

    return (
        <>
            <h1 className="text-[16px] font-[600] text-[#346DE0] mt-[40px]">Interview prep</h1>
            <button
                className="flex items-center w-[57.41px] h-[24px] font-[500] rounded-[4px] py-[4px] px-[8px] text-[12px] bg-[#346DE033] text-[#346DE0] mt-[25px]"
                onClick={() => router.push("/uniboard/applications/interview-prep")}
            >
                <MdKeyboardArrowLeft /> Back
            </button>
            <div className="flex flex-col justify-center items-center">
                <button className="w-[53px] h-[24px] rounded-[4px] py-[4px] px-[8px] bg-[#346DE033] text-[#346DE0] text-[12px] font-[500]">
                    Round
                </button>
                <h2 className="text-[24px] text-center font-[400] text-[#808080] mt-[48px]">
                    {questions[current].name}
                </h2>
                <div className="w-[823px] h-[178.99px] rounded-[4px] border border-[#0000004D] mt-[98px]">
                    <div className="h-[33px] bg-[#346DE01A]">
                        <h2 className="text-[14px] pt-[8px] font-[400] text-center text-[#346DE0]">
                            Your Answer
                        </h2>
                    </div>
                    <textarea
                        rows={5}
                        className="w-full border-none outline-none p-3"
                        value={answers[current]}
                        onChange={(e) => {
                            const newAnswers = [...answers];
                            newAnswers[current] = e.target.value;
                            setAnswers(newAnswers);
                        }}
                    />
                </div>
                <div className="flex justify-center items-center gap-[8px] mt-[24px]">
                    {current < questions.length - 1 ? (
                        <>
                            <button
                                onClick={handleSkip}
                                className="flex items-center w-[77px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE01A] text-[#346DE0]"
                            >
                                Skip
                            </button>
                            <button
                                className="flex items-center w-[80px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE0] text-[#fff]"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </>
                    ) : (
                        <button
                            className="flex items-center w-[80px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE0] text-[#fff]"
                            onClick={HandleSubmit}
                        >
                            Submit
                        </button>
                    )}
                </div>
                {/* Progress bar when question changes */}
                <div className="w-[823px] h-[4px] bg-gray-200 mt-[24px] rounded-full">
                    <div
                        className="h-[4px] bg-[#346DE0] rounded-full transition-all"
                        style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>
        </>
    );
}

export default Page;
