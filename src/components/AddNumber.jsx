import React from 'react'

export default function AddNumber() {
  return (
    <>
                <div>
                    <h4 className='text-[18px] font-semibold mt-[56px]'>수신번호</h4>
                    <div className='mt-[16px] flex'>
                        <input type="text" placeholder='휴대폰번호(숫자만 입력)' className='w-[calc(85%-20px)] h-[61px] rounded-[8px] p-[10px] border border-[#CECECE]'/>
                        <button className='w-[calc(15%)] h-[61px] borderborder-[#CECECE] ml-[20px] rounded-[8px] bg-button_color text-white'>+ 추가</button>
                    </div>

                    <div className='w-full border border-[#CECECE] rounded-[8px] mt-[16px]'>
                        <div className='p-[20px] h-[180px]'>
                            <p className='text-[18px] text-[#8D8D8D]'>번호 입력 후 헨터 혹은 추가하기를 클릭해 주세요. <br/>최대 1만 건 까지 붙여넣기 가능합니다.</p>
                        </div>
                        <div className='flex h-[61px] p-[20px] border-t border-[#CECECE] justify-between'>
                            <p className='font-semibold text-[18px]'>총 0명</p>
                            <p className='underline text-[#6A6A6A] text-[18px]'>모두 삭제</p>
                        </div>
                    </div>

                    <ul className='flex mt-[16px]'>
                        <li className='w-[calc(33.3333%-20px)] h-[61px] border border-[#CECECE] rounded-[8px] flex justify-center items-center text-[#7B7B7B] cursor-pointer mr-[30px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p className='ml-[10px]'>주소록 불러오기</p>

                        </li>

                        <li className='w-[calc(33.3333%-20px)] h-[61px] border border-[#CECECE] rounded-[8px] flex justify-center items-center text-[#7B7B7B] cursor-pointer mr-[30px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <p className='ml-[10px]'>파일 불러오기</p>

                        </li>

                        <li className='w-[calc(33.3333%-20px)] h-[61px] border border-[#CECECE] rounded-[8px] flex justify-center items-center text-[#7B7B7B] cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='ml-[10px]'>최근 전송 내역</p>

                        </li>
                    </ul>

                </div> 
    </>
  )
}
