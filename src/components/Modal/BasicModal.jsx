import { render } from '@testing-library/react'
import React, { useState } from 'react'

export default function BasicModal({onClose, modalTitle, modalContent, modalContent2, imgSrc}) {

  
    const renderImg = imgSrc ? (
        <img src={imgSrc} alt="img" className='w-[50px] h-[50px] m-auto block mb-[20px]'/>
    ) : null
    

  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full h-full relative'>
                <div className=' mobile:w-[90%] w-[440px] h-[376px]  border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 overflow-y-scroll'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>{modalTitle}</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='w-full flex flex-col items-center'>

                            {renderImg}
                            <p className='text-[18px]'>{modalContent}</p>
                            <p className='text-[18px]'>{modalContent2}</p>
    
                        </div>

                       
                        
                    </div>

                   

                    <div className='flex justify-between w-full px-[15px] absolute left-1/2 bottom-[20px] transform -translate-x-1/2'>
                        <button onClick={onClose} className='w-full h-[56px] rounded-[5px] text-[20px] text-white bg-button_color'>확인</button>
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}
