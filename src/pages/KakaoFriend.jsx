import React, { useState } from 'react'
import AddNumber from '../components/AddNumber'
import SendOption from '../components/SendOption'

export default function KakaoFriend() {

  const [isClick, setIsClick] = useState(false)
    const handleClick = ()=>{
        setIsClick(!isClick)
    }

    const [isWrite, setIsWrite] = useState('')
    const onChangeTextarea = (e)=>{
        setIsWrite(e.target.value)
        if(isWrite.length > 90){
            window.alert('90byte 이하로 작성')
        }
    }
    const onClickRefresh =()=>{
        document.getElementById('sms_text').value = ''
        document.getElementById('length').innerText = '0'
    }
  return (
    <>
      <div className='w-full mt-[10px] pl-[124px] mobile:px-[20px] tablet:px-[30px]  bg-white pb-[150px] '>
        <div className='flex flex-wrap'>
          
          <div className='mobile:w-full tablet:w-full pc:w-1/2 widepc:w-1/2'>
            <div className='text-[16px] mobile:text-[14px] text-[#525252] mt-[40px]'>
                <p>- 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</p>
                <p>- 90byte 초과 시 장문 문자로 자동 전환되며, 최대 2000byte까지 작성 가능합니다.</p>
            </div>
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
              <h4 className='text-[18px] font-semibold mt-[30px]'>이미지 첨부</h4>
              <label htmlFor="none">
                <input type="radio" id='none' name='photo_radio' />
                첨부안함
              </label>

              <label htmlFor="basic">
                <input type="radio" id='basic' name='photo_radio' />
                기본 이미지
              </label>

              <label htmlFor="wide">
                <input type="radio" id='wide' name='photo_radio' />
                와이드 이미지
              </label>

              <button className='w-full h-[60px] border border-[#5146F0] rounded-[8px]'>이미지 첨부</button>
            </div>

            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>
            <div className='mt-[30px]'>
                    <h4 className='text-[18px] font-semibold mb-[16px]'>메세지 입력</h4>

                    <form className='p-[24px] bg-[#F6F6F6] border border-[#E1E3E5] rounded-[8px]'>
                        <input type="text" placeholder='제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)' className='p-[20px] mobile:text-[14px] h-[60px] w-full border border-[#E0E0E0] rounded-[8px]'/>
                        <div className='flex justify-between mt-[15px]'>
                            <p className='px-[15px] py-[5px] bg-[#5E2BFF] mobile:text-[14px] text-white rounded-[30px]'>친구톡</p>
                            <div className='flex h-[35px] items-center'>
                                <p><span id='length'>{ isWrite.length}</span> / 90byte</p>
                                <p onClick={onClickRefresh} className='ml-[15px] w-[35px] h-[35px] border border-[#E1E3E5] rounded-[8px]  bg-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <div className='mt-[16px] relative'>
                            <textarea onChange={onChangeTextarea} name="sms_text" id="sms_text" cols="30" rows="10" className='w-full mobile:text-[14px] text-[18px] rounded-[8px] p-[20px] border border-[#E1E3E5] h-[295px] resize-none' placeholder='내용을 입력해 주세요. 90byte 초과 시 장문 문자로 이미지 추가시 포토 문자로 자동 전환 됩니다.'></textarea>
                            <ul className='absolute bottom-[20px] right-[15px] flex'>
                                <li className='px-[20px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px] mr-[8px]'>특수문자</li>
                                <li className='px-[20px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px] mr-[8px]'>특수문자</li>
                                <li className='px-[20px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px]'>특수문자</li>
                            </ul>
                        </div>

                        <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                        <div className='mt-[25px] flex justify-between'>
                            <h4 className='text-[18px] font-semibold'>광고성 문자(080 수신거부 포함)</h4>
                            <div className={`w-[52px] h-[33px] rounded-full focus:outline-none ${isClick ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={handleClick}>
                                <span className={`inline-block overflow-hidden w-[33px] h-[33px]  bg-white rounded-full shadow-md transform transition ${isClick ? 'translate-x-5' : '-translate-x-2'}`}></span>
                            </div>
                        </div>

                        <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>

                        <div className='mt-[16px]'>
                            <h4 className='text-[18px] font-semibold'>이미지 추가</h4>
                            <label className='w-[100px] h-[100px] flex justify-center items-center border border-[#CECECE] bg-white mt-[16px] cursor-pointer'>
                                <input type="file"  hidden/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </label>

                            <div className='mt-[16px] text-[#797979]'>
                                <p>- 이미지는 최대 3장까지 첨부 가능합니다.</p>
                                <p>- 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</p>
                            </div>
                        </div>



                    </form>
                </div>
            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

            <SendOption/>

          </div>

          <div className='w-1/2 mobile:hidden tablet:hidden pc:block widepc:block'>
            <div className='border-[5px] border-black w-[400px] h-[758px] rounded-[22px] bg-[#B5D3F2] px-[20px] py-[40px] sticky top-[100px] mt-[100px] ml-[100px]' > 
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

      </div>
    </>
  )
}
