import React from 'react'

export default function CreditModal({amount, onClose}) {
  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full relative'>
                <div className='w-[825px] h-[530px] border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute t-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>크레딧 구매</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px] flex'>
                        <div className='w-1/2 '>
                            <p className='text-[18px]'>결제할 금액</p>
                            <p className='text-[32px] font-semibold'>{amount}원</p>

                            <div className='bg-[#F5F5F5] mt-[16px] p-[20px] rounded-[10px]'>
                                <div className='flex justify-between'>
                                    <p className='text-[#363636] text-[18px]'>기본 크레딧</p>
                                    <p>300,000</p>
                                </div>

                                <div className='flex justify-between mt-[15px]'>
                                    <p className='text-[#363636] text-[18px]'>추가 크레딧</p>
                                    <p>30,000</p>
                                </div>

                                <div className='flex justify-between mt-[15px]'>
                                    <p className='text-[#363636] text-[18px]'>SMS 건당</p>
                                    <p>15원</p>
                                </div>

                                <div className='flex justify-between mt-[15px]'>
                                    <p className='text-[#363636] text-[18px]'>결제 후 보유 크레딧</p>
                                    <p>330,000</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 pl-[16px] '>
                            <div className=''>
                                <p className='text-[18px] font-semibold'>결제수단</p>
                                <select name="" id="" className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px] text-[#7B7B7B]'>
                                    <option value="">결제수단 선택</option>
                                    <option value="">신용카드</option>
                                    <option value="">계좌이체</option>
                                    <option value="">간편결제</option>
                                </select>
                            </div>

                            <div className='mt-[10px]'>
                                <p className='text-[18px] font-semibold'>입금자명</p>
                                <input type='text' placeholder='입금자명 입력' className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px]' />
                                    
                            </div>

                            <div className='mt-[10px]'>
                                <p className='text-[18px] font-semibold'>입금은행</p>
                                <select name="" id="" className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px] text-[#7B7B7B]'>
                                    <option value="">부산은행</option>
                                    <option value="">농협은행</option>
                                    <option value="">기업은행</option>
                                    <option value="">우리은행</option>
                                </select>
                            </div>
                           
                        </div>

                    </div>
                    <button className='w-full h-[56px] rounded-[5px] text-[20px] bg-[#5146F0] text-white mt-[20px]'>구매하기</button>


                </div>
            </div>
        </div>
    </>
  )
}
