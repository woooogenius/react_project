import React, { useEffect, useState } from 'react'

export default function ListCredit() {

    const today = new Date().toISOString().split('T')[0];

    const [selectDate, setSelectDate] = useState(today)
    const onChangeDate = (e)=>{
        setSelectDate(e.target.value)
    }
    useEffect(()=>{
        setSelectDate(today)
    },[])
   

  return (
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px]  min-h-[calc(100vh-220px)]'>
        <div className='flex flex-wrap'>
            

            <div className='w-full'>
                <div className='text-[16px] text-[#525252] mt-[40px] mobile:text-[14px]'>
                    <p>- 크레딧 구입 내역 및 결제상태, 사용내역 등을 확인하실 수 있습니다.</p>
                    <p>- 크레딧 내역은 최대 1년까지만 보관됩니다.</p>
                </div>


                <div className='flex justify-between mobile:justify-normal mobile:flex-wrap mt-[56px]'>
                    <div className='mobile:w-full mobile:mb-[20px]'>
                        <input type="date" onChange={onChangeDate} value={selectDate} className='pc:w-[165px] tablet:w-[140px] mobile:w-[calc(50%-15px)] h-[55px] border border-[#CECECE] rounded-[8px] text-center' /> 
                        <span className='mx-[10px]'>~</span> 
                        <input type="date" onChange={onChangeDate} value={selectDate} className='pc:w-[165px] tablet:w-[140px] mobile:w-[calc(50%-15px)] h-[55px] border border-[#CECECE] rounded-[8px] text-center' /> 
                    </div>

                    <div className='flex mobile:w-full'>
                        <select name="select_message" id="select_message" className='pc:w-[165px] tablet:w-[130px] mobile:w-[calc(40%-5px)] h-[55px] border border-[#CECECE] rounded-[8px] mr-[15px] px-[10px]'>
                            <option value="전체이용내역">전체 이용내역</option>
                            <option value="크레딧">sample01</option>
                        </select>

                        
                        <div className=' relative tablet:w-[170px] pc:w-[210px] h-[55px] mobile:w-[calc(60%-5px)]'>
                            <input type="text" placeholder='제목 또는 번호입력' className='w-full h-full border border-[#CECECE] rounded-[8px] px-[10px]'/>
                            <div className='absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div> 

                    </div>

                   
                
                </div>

                <div className='mt-[30px] border-t border-black '>
                    <ul className='w-full h-[60px] bg-[#F3F4F8] flex items-center text-center p-[5px]'>
                        <li className='w-[15%] border-r border-[#CECECE]'>일자</li>
                        <li className='w-[25%] border-r border-[#CECECE]'>주문번호</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>구매 크레딧</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>금액</li>
                        <li className='w-[15%] border-r border-[#CECECE]'>결제상태</li>
                        <li className='w-[15%] '>상세보기</li>
                    </ul>

                    <ul className='border-b border-[#CECECE] py-[30px]'>
                        <div className='text-center text-[#3B3B3B]'>발송 내역이 없습니다</div>
                    </ul>
                </div>

                <div className='flex justify-center items-center mt-[56px]'>
                    <button className='w-[38px] h-[38px] text-white bg-button_color rounded-[8px]'>1</button>
                </div>




            </div>

           



        


        </div>
        
    </div>
  )
}
