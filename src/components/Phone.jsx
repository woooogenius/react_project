import React from 'react'

export default function Phone({isWrite, title, images, sendMessage, kakaoChannel, kakaoFriend}) {
  return (
    <>
        <div className='widepc:w-[400px] pc:w-[350px] widepc:h-[775px] pc:h-[700px] border-[5px] border-[#4D4D4D] px-[20px] py-[40px] bg-[#B5D3F2] rounded-[22px] sticky top-[100px] mt-[100px] pc:ml-[80px] widepc:ml-[116px] overflow-y-scroll'>

            <div className='flex text-center'>
                <div className='w-[15%] text-[20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className='w-[70%] text-[20px]'>{title}</div>

                <div className='w-[15%]'></div>
            </div>

            {
                kakaoChannel ? 
                <div>
                    <p className='mt-[50px] font-semibold'>카카오 채널명</p>
                    <div className='w-[300px] mt-[16px] relative'>
                        <div className='w-[40px] h-[40px] bg-[#2B201F] text-white rounded-full text-[11px] flex justify-center items-center absolute right-[-15px] top-[-15px]'>kakao</div>
                        <div className='bg-[#FBE54C] h-[50px] rounded-t-[16px] p-[16px]'>알림톡 도착</div>
                        <div className='bg-white h-[50px] rounded-b-[16px] p-[16px]'>발신프로필 및 템플릿을 선택해 주세요</div>
                    </div>
                </div> : ''
            }
            
            {
                sendMessage ? 
                <div className='mt-[50px]'>
                    <p className='text-[18px]'>userId</p>
                    <div className='bg-white p-[20px] rounded-[16px] mt-[16px] '>

                        <div className='overflow-auto break-words '>
                            {
                                isWrite.length === 0 ? '이 영역은 미리보기 화면입니다.' : isWrite
                            }

                            
                        </div>
                    
                    </div>

                    {
                        images.length !== 0 ?  
                        <div className=''>
                            {
                                images.length === 0 ? null : 
                                images.map((img, index) => (
                                    <div className='w-full h-full  bg-white border border-[#CECECE] rounded-[16px] mt-[10px]'key={index}>
                                        <img key={index} src={img} alt='img' className='w-full h-full object-cover rounded-[16px]'/>
                                    </div>
                                    
                                ))
                            }
                        </div> : ''
                    }
                

                </div> : ''
            }
            {
                kakaoFriend ? 
                <div>
                  <p className='mt-[50px] font-semibold'>(광고)카카오톡 채널명</p>
                  <div className='w-[300px] mt-[16px] overflow-auto break-words'>
                    <div className='bg-white p-[15px]  rounded-[16px]'>{isWrite.length === 0 ? '이 영역은 미리보기 입니다' : isWrite}</div>
                  </div>
                </div> :''
            }

        </div>

    </>
  )
}
