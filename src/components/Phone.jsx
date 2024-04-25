import React from 'react'

export default function Phone({isWrite}) {
  return (
    <>
        <div className='w-[400px] h-[775px] border-[5px] border-[#4D4D4D] px-[20px] py-[40px] bg-[#B5D3F2] rounded-[22px]  sticky top-[100px] mt-[100px] ml-[100px]'>

            <div className='flex text-center'>
                <div className='w-[15%] text-[20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className='w-[70%] text-[20px]'>단문 SMS</div>

                <div className='w-[15%]'></div>
            </div>

            <div className='mt-[50px]'>
                <p className='text-[18px]'>userId</p>
                <div className='bg-white p-[20px] rounded-[16px] mt-[16px] overflow-auto break-words'>
                    {
                        isWrite.length === 0 ? '이 영역은 미리보기 화면입니다.' : isWrite
                    }
                </div>
            </div>

        </div>

    </>
  )
}
