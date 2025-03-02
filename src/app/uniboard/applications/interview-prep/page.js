"use client"

import React, { useState } from 'react'
import InterviewCards from '@/components/interviewCards'
import InputField from '@/components/inputField'
import { useRouter } from 'next/navigation'
import { IoMdClose } from "react-icons/io";

//Questions
const Questions = [
  { id: 1, name: "Question Type 1" },
  { id: 2, name: "Question Type 1" },
  { id: 3, name: "Question Type 1" },

]

function page() {
  const [open, SetOpen] = useState(false)
  const router = useRouter()
  const [role, setRole] = useState("")
  const [company, SetCompany] = useState("")

  //Handle Start
  const StartInterview = () => {
    const Info = encodeURIComponent(
      JSON.stringify({ role, company })
    )
    router.push(`/uniboard/applications/interview-prep/interview?info=${Info}`)
  }

  return (
    <>
      <div className='w-full'>
        <h2 className='text-[#346DE0] mt-[64px]'>Interview Prep</h2>
        <div className='flex gap-6 mt-[147px]'>
          <button onClick={() => SetOpen(true)} className='bg-[#346DE01A] hover:bg-[#395ea81a] rounded-[4px] w-[356px] h-[73px] py-[10px] pr-[24px] pl-[16px] text-[#346DE0] text-[14px]'>
            + Start new Interview
          </button>
          <div className='flex gap-6'>
            <InterviewCards title="Data Manager" company="Google" />
            <InterviewCards title="Data Analyst" company="Google" />
          </div>
        </div>
        <InputField />

      </div>
      {
        open && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40">
            <div className="bg-white p-6 rounded-lg relative shadow-lg w-[500px] h-[427px]">
              <button
                onClick={() => SetOpen(false)}
                className="text-gray-600 absolute top-[16px] left-[476px]">
                <IoMdClose/>
              </button>
              <h2 className="text-[16px]  font-[600] text-center">Interview Prep</h2>
              <div className="mt-4  ">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="col-span-1">
                    <label className="text-[12px] font-[400] text-[#346DE0] ">Role</label>
                    <input type="text" className="w-full border p-2 rounded border-[#346DE0]"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="text-[12px] font-[400] text-[#D0D0D0]">Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => SetCompany(e.target.value)}
                      className="w-full border p-2 rounded" />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[12px] font-[400] text-[#D0D0D0]">Job Description</label>
                    <textarea
                      rows={5}
                      className="w-full border p-2 rounded"></textarea>
                  </div>
                </div>
                <div>
                  <h2 className='text-[12px] font-[400] text-[#D0D0D0]'>
                    Round
                  </h2>
                  <div className='flex gap-2'>
                    {
                      Questions.map((el, i) => (
                        <>
                          <button
                            key={i}
                            className='w-[109px] h-[24px] rounded-[4px] py-[4px] px-[8px] font-[500] text-[12px] bg-[#D0D0D0]'>

                            {el.name}
                          </button>
                        </>
                      ))
                    }
                  </div>

                </div>

                <button
                  className="mt-4 w-[148px] h-[38px] rounded-[4px] bg-blue-600 text-white px-[24px] py-[10px] text-[14px] font-[500] float-right"

                  onClick={StartInterview}
                >
                  Start Interview
                </button>
              </div>
            </div>
          </div>
        )
      }


    </>
  )
}

export default page
