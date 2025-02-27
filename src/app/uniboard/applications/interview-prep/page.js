"use client"

import React from 'react'
import InterviewCards from '@/components/interviewCards'
import InputField from '@/components/inputField'

function page() {
  return (
    <>
      <div className='w-full'>
        <h2 className='text-[#346DE0]'>Interview Prep</h2>
        <div className='flex gap-6'>
          <button className='bg-[#346DE01A] hover:bg-[#395ea81a] rounded-[4px] w-[356px] h-[73px] py-[10px] pr-[24px] pl-[16px]'>
            + Start new Interview
          </button>
          <div className='flex gap-6'>
            <InterviewCards title="Data Manager" company="Google" />
            <InterviewCards title="Data Analyst" company="Google" />
          </div>
        </div>
        <InputField/>

      </div>


    </>
  )
}

export default page
