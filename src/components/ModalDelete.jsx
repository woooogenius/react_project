import React, { useState } from 'react'

export default function ModalBasic({onClose, modalTitle, modalContent, modalContent2}) {

  

    

  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full h-full relative'>
                <div className='mobile:w-[90%] w-[440px] h-[306px]  border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 overflow-y-scroll'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>{modalTitle}</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px]'>
                        <div className='w-full flex flex-col items-center'>
                            
                            <p className='text-[18px]'>{modalContent}</p>
                            <p className='text-[18px]'>{modalContent2}</p>
                           
                            
                        </div>

                       
                        
                    </div>

                   

                    <div className='flex justify-between mt-[30px]'>
                        <button onClick={onClose} className='w-[calc(50%-15px)] h-[56px] rounded-[5px] text-[20px] border border-[#5146F0] text-button_color'>닫기</button>
                        <button className='w-[calc(50%-15px)] h-[56px] rounded-[5px] text-[20px] bg-[#5146F0] text-white '>삭제</button>
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}
