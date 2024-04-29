import React, { useEffect, useState } from 'react'

export default function SendOption() {
    const [isChecked, setIsChecked] = useState('send')
    const handleChecked = (value)=>{
        setIsChecked(value)
    }


    const today = new Date().toISOString().split('T')[0];
    
    const [selectedDate, setSelectedDate] = useState(today)
    const onChangeDate = (e)=>{
        setSelectedDate(e.target.value)
    }

    useEffect(()=>{
        setSelectedDate(today)
    },[])
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
            {
                    isChecked === 'later' ?  
                    <div className='flex mt-[20px] '>
                        <input type="date" onChange={onChangeDate} value={selectedDate}  className='w-[calc(40%-6.6666px)] h-[60px] border border-[#CECECE] mr-[10px] rounded-[8px] text-center'/>
                        <select name="time" id="time" className='w-[calc(30%-6.6666px)] h-[60px] border border-[#CECECE] mr-[10px] rounded-[8px] text-center'>
                            <option value="1">1시</option>
                            <option value="2">2시</option>
                            <option value="3">3시</option>
                        </select>
                        <select name="minute" id="minute" className='w-[calc(30%-6.6666px)] h-[60px] border border-[#CECECE] rounded-[8px] text-center'>
                            <option value="1분">1분</option>
                            <option value="2분">2분</option>
                            <option value="3분">3분</option>
                        </select>
                    </div>
                    : ''
                }
        </div>         
    </>
  )
}
