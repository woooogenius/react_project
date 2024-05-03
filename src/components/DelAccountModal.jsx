import React, { useState } from 'react'

export default function DelAccountModal({onClose}) {


  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full relative'>
                <div className='mobile:w-[90%] w-[403px] h-[593px]  border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute t-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 overflow-y-scroll'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>계정탈퇴</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px]'>
                        <div className='w-full'>
                            
                           <div className='w-[62px] h-[62px] rounded-full m-auto'>
                            <img src={process.env.PUBLIC_URL+'assets/img/warning.png'} alt="img" className='w-full h-full rounded-full' />
                           </div>

                           <div className='text-[20px] font-semibold text-center mt-[22px]'>
                            <p>탈퇴하시면 보유하고 계신 크레딧과</p>
                            <p>등록한 정보들이 <span className='text-[#E02D2D]'>모두 삭제됩니다</span></p>
                           </div>
    
                           <div className='w-full border border-[#CECECE] h-[55px] flex justify-between items-center px-[16px] py-[18px] rounded-[8px] font-semibold mt-[24px]'>
                            <p>잔여 크레딧</p>                        
                            <p className='text-[#5146F0]'>32,000</p>                        
                           </div>

                           <div className='w-full border border-[#CECECE] h-[55px] flex justify-between items-center px-[16px] py-[18px] rounded-[8px] font-semibold mt-[16px]'>
                            <p>가입된 기업</p>                        
                            <p className='text-[#5146F0]'>3</p>                        
                           </div>

                           <p className='text-[#525252] mt-[24px]'>- 보유한 크레딧과 정보가 소멸되어 복구 불가능합니다</p>
                            
                        </div>
                    </div>

                   

                    <div className='flex'>
                    <button className='w-[calc(50%-8px)] mr-[16px] h-[56px] rounded-[5px] text-[20px] text-[#585858] border border-[#CECECE] mt-[20px]'>탈퇴하기</button>
                    <button className='w-[calc(50%-8px)] h-[56px] rounded-[5px] text-[20px] bg-[#5146F0] text-white mt-[20px]'>유지하기</button>
                        
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}
