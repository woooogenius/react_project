import React from 'react'

export default function MyPageInput({title,isWrite, onChangeWrite, placeholder, value}) {
  return (
    <>
      <h4 className='text-[16px] mt-[40px] font-semibold'>{title}</h4>
      <div className=' mt-[10px]'>
          <input type="text" value={value} onChange={onChangeWrite} placeholder={placeholder} className={`${isWrite.length > 0 ? 'bg-[#F2F5F9]' : ''} w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`}/>
      </div> 
    </>
  )
}
