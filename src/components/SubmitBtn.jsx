import React from 'react'

export default function SubmitBtn({onClickSubmit, btnTitle}) {
  return (
    <>
       <button onClick={onClickSubmit} className='w-full bg-[#4F44F0] text-white h-[55px] rounded-[8px] mt-[72px]'>{btnTitle}</button>
    </>
  )
}
