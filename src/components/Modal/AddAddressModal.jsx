import React from 'react'

export default function AddAddressModal({onClose}) {
  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full relative'>
                <div className='mobile:w-[90%] tablet:w-[90%] pc:w-[442px] h-[500px]  border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute t-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 overflow-y-scroll'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>연락처 추가</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px] flex mobile:flex-wrap'>
                       

                        <div className='w-full px-[20px] mobile:pl-0 mobile:mt-[30px] mobile:w-full'>
                            <div>
                                <p className='text-[18px] font-semibold'>이름</p>
                                <input type="text" className='h-[55px] w-full rounded-[8px] border border-[#CECECE] mt-[7px] p-[10px]' placeholder='이름 입력' />
                            </div>

                            <div className='mt-[20px]'>
                                <p className='text-[18px] font-semibold'>휴대폰 번호</p>
                                <input type="text" className='h-[55px] w-full rounded-[8px] border border-[#CECECE] mt-[7px] p-[10px]' placeholder='휴대폰 번호 입력' />
                            </div>

                            <div className='mt-[20px]'>
                                <p className='text-[18px] font-semibold'>추가할 폴더</p>
                                <select name="" id="" className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px] text-[#7B7B7B]'>
                                    <option value="">폴더 선택</option>
                                    <option value="">기본폴더</option>
                                    <option value="">기본폴더2</option>
                                </select>
                            </div>

                            

                            <div className='mt-[20px]'>
                                <p className='text-[18px] font-semibold'>추가할 그룹</p>
                                <select name="" id="" className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px] text-[#7B7B7B]'>
                                    <option value="">그룹</option>
                                    <option value="">그룹1</option>
                                    <option value="">그룹2</option>
                                    <option value="">그룹3</option>
                                </select>
                            </div>

                            <div className='mt-[20px]'>
                                <p className='text-[18px] font-semibold'>변수</p>
                                <input type='text' placeholder='변수 입력' className='w-full border border-[#CECECE] h-[55px] rounded-[8px] mt-[7px] p-[10px]' />
                                    
                            </div>


                             <button className=' w-full h-[56px] rounded-[5px] text-[20px] bg-[#5146F0] text-white mt-[20px]'>추가하기</button>

                           
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </>
  )
}
