import React, { useState } from 'react'

export default function TemplateModal({onClose}) {

    const [isFavorite, setIsFavorite] = useState(false)
    const onClickFavorite = ()=>{
        setIsFavorite(!isFavorite)
    }

    const [isWrite, setIsWrite] = useState('')
    const onChangeWrite = (e)=>{
        setIsWrite(e.target.value)
    }

  return (
    <>
        <div className='w-screen h-screen bg-black fixed top-0 left-0 z-50 bg-opacity-50'>
            <div className='w-full relative'>
                <div className='mobile:w-[90%] w-[574px] h-[593px]  border border-[#CECECE] bg-white rounded-[10px] px-[16px] py-[24px] absolute t-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 overflow-y-scroll'>
                    
                    <div className='flex justify-between  border-b border-[#CECECE] text-[18px]'>
                        <p className='pb-[24px]'>등록하기</p>
                        <p onClick={onClose} className='cursor-pointer text-[20px]'>X</p>
                    </div>

                    <div className='py-[24px]'>
                        <div className='w-full'>
                            <div>
                                <p className='text-[18px]'>제목</p>
                                <input type="text" placeholder='제목을 입력해 주세요' className='w-full h-[56px] p-[10px] border border-[#CECECE] rounded-[8px] mt-[10px]'/>
                            </div>

                            <div className='mt-[20px]'>
                                <p className='text-[18px]'>내용</p>
                                <textarea onChange={onChangeWrite} type="text" placeholder='제목을 입력해 주세요' className='w-full h-[151px] p-[10px] border border-[#CECECE] rounded-[8px] mt-[10px]'/>
                            </div>
                           
                            
                        </div>

                       
                        <div className='flex justify-between'>
                            <p className='text-[18px]'><span className='text-button_color'>{isWrite.length === 0 ? '0' : isWrite.length}</span>byte <span className='text-button_color'>단문</span></p>
                            <div className='flex text-[18px]'>
                                <p className='mr-[10px]'>즐겨찾기</p>
                                <div className={`${isFavorite ? 'text-button_color' : 'text-black'}  `} onClick={onClickFavorite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>

                   

                    <div className='w-full border-b border-[#CECECE]'></div>

                    <button className='w-full h-[56px] rounded-[5px] text-[20px] bg-[#5146F0] text-white mt-[20px]'>저장하기</button>


                </div>
            </div>
        </div>
    </>
  )
}
