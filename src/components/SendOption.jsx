import React, { useState } from 'react'

export default function SendOption() {
    const [isChecked, setIsChecked] = useState('send')
    const handleChecked = (value)=>{
        setIsChecked(value)
    }
  return (
    <>
        <div>
            <h4 className='text-[18px] font-semibold mt-[20px]'>발송설정</h4>
             <div className='flex justify-center items-center mt-[16px]'>
                <label className={`w-[calc(50%-15px)] h-[66px] leading-[66px] rounded-[8px] text-[18px] mr-[30px] transition ${isChecked === 'send' ? 'bg-white border border-[#4F44F0] text-[#4F44F0]':'bg-[#F2F5F9] text-[#747B84]'}`}>
                    <input type="radio" name='send_btn' value='now' hidden defaultChecked={isChecked === 'send'} onChange={()=>handleChecked('send')}/>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                                즉시발송   
                    </div>
                </label>

                 <label className={`w-[calc(50%-15px)] h-[66px] leading-[66px] rounded-[8px] text-[18px] transition ${isChecked === 'later' ? 'bg-white border border-[#4F44F0] text-[#4F44F0]':'bg-[#F2F5F9] text-[#747B84]'}`}>
                    <input type="radio" name='send_btn' value='later' hidden defaultChecked={isChecked === 'later'} onChange={()=>handleChecked('later')}/>
                     <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                                예약발송   
                    </div>
                 </label>

                       
            </div>
        </div>         
    </>
  )
}
