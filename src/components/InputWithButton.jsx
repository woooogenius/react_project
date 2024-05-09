import React from 'react'

export default function InputWithButton({placeholder,btnTit,onClick}) {
  return (
    <div className='w-full flex'>
        <div className='w-[calc(80%-16px)] mr-[16px] mt-[10px]'>
            <input className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`} placeholder={placeholder}  />
        </div>
        <button onClick={onClick} className='w-[calc(20%)] border border-[#5146F0] text-[#5146F0] h-[55px] rounded-[8px] mt-[10px]'>{btnTit}</button>
    </div>
  )
}
