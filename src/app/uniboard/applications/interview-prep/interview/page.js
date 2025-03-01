"use client"
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from 'next/navigation';

//Questions
const questions = [
    "Can you please tell me a bit about yourself?",
    "What are your strengths and weaknesses?",
    "Describe a challenge you faced and how you handled it.",
]

function page() {
    const router = useRouter()
    const [Current, SetCurrent] = useState(0)
    const [Ans, SetAns] = useState(Array(questions.length).fill(''))
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;


    //Next Function
    const HandleNext = () => {
        if (Current < questions.length - 1) {
            SetCurrent(Current + 1)
        }
    }

    //Handle Skip
    const HandleSkip = () => HandleNext()

    return (
        <>
            <h1 className='text-[16px] font-[600] text-[#346DE0] mt-[40px] '>Interview prep</h1>
            <button className='flex items-center w-[57.41px] h-[24px] font-[500] rounded-[4px] py-[4px] px-[8px] text-[12px] bg-[#346DE033] text-[#346DE0] mt-[25px]'
                onClick={() => router.push("/uniboard/applications/interview-prep")}
            >
                <MdKeyboardArrowLeft /> Back
            </button>
            <div className='flex flex-col justify-center items-center'>
                <button className=' w-[53px] h-[24px] rounded-[4px] py-[4px] px-[8px] bg-[#346DE033] text-[#346DE0] text-[12px] font-[500]'>
                    Round
                </button>
                <h2 className='text-[24px] text-center font-[400] text-[#808080] mt-[48px]'>
                    {questions[Current]}
                </h2>
                <div className='w-[823px] h-[178.99px] rounded-[4px] border border-[#0000004D] mt-[98px]'>
                    <div className='h-[33px] bg-[#346DE01A]'>
                        <h2 className='text-[14px] pt-[8px] font-[400] text-center text-[#346DE0]'>
                            Your Answer
                        </h2>

                    </div>
                    <textarea
                        rows={5}
                        className='w-full border-none outline-none p-3 '
                        value={Ans[Current]}
                        onChange={(e) => {
                            const NewAns = [...Ans]
                            NewAns[Current] = e.target.value
                            SetAns(NewAns)
                        }}

                    />
                </div>
                <div className='flex justify-center items-center gap-[8px] mt-[24px]'>
                    {
                        Current < questions.length - 1 ? (
                            <>
                                <button
                                    onClick={HandleSkip}
                                    className='flex items-center w-[77px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE01A] text-[#346DE0] '
                                >
                                    Skip
                                </button>
                                <button className='flex items-center w-[80px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE0] text-[#fff] '
                                    onClick={HandleNext}
                                >
                                    Next
                                </button>
                            </>

                        ) : (
                            <button
                                className="className='flex items-center w-[80px] h-[38px] font-[500] rounded-[4px] py-[10px] px-[24px] text-[14px] bg-[#346DE0] text-[#fff] "
                                onClick={() => {
                                    console.log("Answers submitted:", Ans);
                                    const query = encodeURIComponent(
                                        JSON.stringify(
                                            questions.map((e, i) => ({
                                                question: e,
                                                answer: Ans[i],
                                            }))
                                        )
                                    );

                                    router.push(`/uniboard/applications/interview-prep/review?data=${query}`);
                                }}
                            >
                                Submit
                            </button>
                        )

                    }

                </div>
                <div className='w-[823px] h-[4px] bg-gray-200 mt-[24px] rounded-full'>
                    <div
                        className='h-[4px] bg-[#346DE0] rounded-full transition-all'
                        style={{ width: `${((Current + 1) / questions.length) * 100}%` }}
                    />
                </div>

            </div>
        </>
    )
}

export default page
