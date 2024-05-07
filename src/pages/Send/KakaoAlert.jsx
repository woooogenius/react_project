import React from 'react'
import AddNumber from '../../components/AddNumber'
import Phone from '../../components/Phone'
import SendOption from '../../components/SendOption'
import PageDesc from '../../components/PageDesc'

export default function KakaoAlert() {
  return (
    <>
      <div className='w-full mt-[10px] pc:px-[100px] mobile:px-[20px] tablet:px-[30px] widepc:pl-[124px] bg-white pb-[150px]'>

      <PageDesc desc01={'- 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.'} desc02={'- 90byte 초과 시 장문 문자로 자동 전환되며, 최대 2000byte까지 작성 가능합니다.'}/>

        <div className='widepc:flex pc:flex-none'>
          <div className='flex flex-wrap'>
            
            <div className='widepc:w-[600px] mobile:w-full tablet:w-full pc:w-1/2'>
              
              <AddNumber/>

              <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>
              
              <div>
                <h4 className='text-[18px] font-semibold mt-[30px]'>채널 ID</h4>

                <select name="select_id" id="select_id" className='w-full p-[20px] border border-[#E0E0E0] rounded-[8px] mt-[16px] text-[#7B7B7B]'>
                  <option value="">전송할 채녈 ID 선택</option>
                  <option value="id-1">id-1</option>
                  <option value="id-2">id-2</option>
                </select>

              </div>

              <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

              <div>
                <h4 className='text-[18px] font-semibold mt-[30px]'>템플릿</h4>
                <button className='flex justify-between w-full h-[60px] border border-[#CECECE] px-[20px] items-center rounded-[8px] mt-[16px]'>
                  <p className='text-[#7B7B7B]'>전송할 템플릿 선택</p>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </p>
                </button>
              </div>

              <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

              <SendOption/>

            </div>

            <div className='widepc:w-[calc(50%-600px)] pc:w-1/2 relative mobile:hidden tablet:hidden pc:block'>
              <div className='widepc:w-[400px] pc:w-[350px] widepc:h-[775px] pc:h-[700px] border-[5px] border-[#4D4D4D] px-[20px] py-[40px] bg-[#B5D3F2] rounded-[22px] sticky top-[100px] mt-[100px] pc:ml-[80px] widepc:ml-[116px] overflow-y-scroll' > 
                <div className='flex text-center'>
                    <div className='w-[15%] text-[20px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className='w-[70%] text-[20px]'>카카오 채널명</div>

                    <div className='w-[15%]'></div>
                </div>

                <div>
                  <p className='mt-[50px] font-semibold'>카카오 채널명</p>
                  <div className='w-[300px] mt-[16px] relative'>
                    <div className='w-[40px] h-[40px] bg-[#2B201F] text-white rounded-full text-[11px] flex justify-center items-center absolute right-[-15px] top-[-15px]'>kakao</div>
                    <div className='bg-[#FBE54C] h-[50px] rounded-t-[16px] p-[16px]'>알림톡 도착</div>
                    <div className='bg-white h-[50px] rounded-b-[16px] p-[16px]'>발신프로필 및 템플릿을 선택해 주세요</div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

            <button className='w-full h-[61px] bg-[#4F44F0] rounded-[8px] text-white text-[18px] mt-[50px]'>발송하기</button>
            

          </div>
          <div className='widepc:w-[360px] widepc:block tablet:hidden mobile:hidden pc:hidden'></div>
        </div>

      </div>
    </>
  )
}
