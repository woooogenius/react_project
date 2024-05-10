import React from 'react'

export default function SelectWithSearch({placeholder,option01,inputPlaceholder}) {
  return (
    <>
        <div className='flex mobile:w-full mobile:order-1'>
            <select name="select_message" id="select_message" className='pc:w-[165px] tablet:w-[130px] mobile:w-[calc(50%-5px)] h-[55px] border border-[#CECECE] rounded-[8px] mr-[15px] px-[10px]'>
                <option value={placeholder}>{placeholder}</option>
                <option value={option01}>{option01}</option>
            </select>

            
            <div className=' relative tablet:w-[170px] pc:w-[210px] h-[55px] mobile:w-[calc(50%-5px)]'>
                <input type="text" placeholder={inputPlaceholder} className='w-full h-full border border-[#CECECE] rounded-[8px] px-[10px]'/>
                <div className='absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div> 

        </div> 
    </>
  )
}
