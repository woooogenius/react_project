import React, { useEffect, useState } from 'react'
import AddNumber from '../components/AddNumber'
import Phone from '../components/Phone'

export default function MessagePage() {

    const [isClick, setIsClick] = useState(false)
    const handleClick = ()=>{
        setIsClick(!isClick)
    }

    const [isChecked, setIsChecked] = useState('send')
    const handleChecked = (value)=>{
        setIsChecked(value)
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

    useEffect(()=>{
        setIsChecked('send')
    },[])

  return (
    <div className='w-full mt-[10px] pl-[124px] bg-white pb-[150px]'>
        <div className='flex flex-wrap'>
            

            <div className='w-1/2'>
                <div className='text-[16px] text-[#525252] mt-[40px]'>
                    <p>- 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</p>
                    <p>- 90byte 초과 시 장문 문자로 자동 전환되며, 최대 2000byte까지 작성 가능합니다.</p>
                </div>

                <AddNumber/>

                <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                <div className='w-full'>
                    <h4 className='mt-[30px] text-[18px] font-semibold mb-[16px]'>현재 발송 가능 건수</h4>

                    <ul className='w-full flex mt-[16px]'>
                        <li className='w-[calc(33.3333%-33.3333px)]  flex justify-center items-center text-center mr-[50px]'>
                            <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#E9EBFD] mr-[10px] text-[#5E2BFF]'>단문 SMS</p>
                            <p>152건</p>
                        </li> 

                        <li className='w-[calc(33.3333%-33.3333px)]  flex  justify-center items-center text-center  mr-[50px]'>
                            <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#f4e3df] mr-[10px] text-[#FA593B]'>장문 LMS</p>
                            <p>152건</p>
                        </li> 

                        <li className='w-[calc(33.3333%-33.3333px)]  flex  justify-center items-center text-center'>
                            <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#d1f0dc] mr-[10px] text-[#08AA40]'>포토 MMS</p>
                            <p>152건</p>
                        </li> 

                        
                    </ul>
                </div>

                <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                <div className='mt-[30px]'>
                    <h4 className='text-[18px] font-semibold mb-[16px]'>발신번호</h4>

                    <select name="select_num" id='select_num' className='w-full p-[20px] rounded-[8px] border border-[#CECECE] text-[#7B7B7B]'>
                        <option value="">전송할 발신번호 선택</option>
                        <option value="010-1234-1234">010-1234-1234</option>
                        <option value="010-1111-2222">010-1111-2222</option>
                    </select>
                </div>

                <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                <div className='mt-[30px]'>
                    <h4 className='text-[18px] font-semibold mb-[16px]'>메세지 입력</h4>

                    <form className='p-[24px] bg-[#F6F6F6] border border-[#E1E3E5] rounded-[8px]'>
                        <input type="text" placeholder='제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)' className='p-[20px] h-[60px] w-full border border-[#E0E0E0] rounded-[8px]'/>
                        <div className='flex justify-between mt-[15px]'>
                            <p className='px-[15px] py-[5px] bg-[#5E2BFF] text-white rounded-[30px]'>단문 SMS</p>
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
                            <textarea onChange={onChangeTextarea} name="sms_text" id="sms_text" cols="30" rows="10" className='w-full text-[18px] rounded-[8px] p-[20px] border border-[#E1E3E5] h-[295px] resize-none' placeholder='내용을 입력해 주세요. 90byte 초과 시 장문 문자로 이미지 추가시 포토 문자로 자동 전환 됩니다.'></textarea>
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

                <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>

                <div>
                    <h4 className='text-[18px] font-semibold mt-[20px]'>발송설정</h4>
                    <div className='flex justify-center items-center mt-[16px]'>
                        <label className={`w-[calc(50%-15px)] h-[66px] leading-[66px] rounded-[8px] text-[18px] mr-[30px] transition ${isChecked === 'send' ? 'bg-white border border-[#4F44F0] text-[#4F44F0]':'bg-[#F2F5F9] text-[#747B84]'}`}>
                            <input type="radio" name='send_btn' value='now' hidden defaultChecked={isChecked === 'send'} onChange={()=>handleChecked('send')}/>
                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                즉시발송   
                            </div>
                        </label>

                        <label className={`w-[calc(50%-15px)] h-[66px] leading-[66px] rounded-[8px] text-[18px] transition ${isChecked === 'later' ? 'bg-white border border-[#4F44F0] text-[#4F44F0]':'bg-[#F2F5F9] text-[#747B84]'}`}>
                            <input type="radio" name='send_btn' value='later' hidden defaultChecked={isChecked === 'later'} onChange={()=>handleChecked('later')}/>
                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                예약발송   
                            </div>
                        </label>

                       
                    </div>
                </div>

                <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>







            </div>

            <div className='w-1/2 relative'>

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
                {/* <Phone isWrite={isWrite} /> */}


            </div>

            <div className='w-full mt-[40px]'>
                <button className='bg-button_color w-full h-[61px] rounded-[8px] text-[18px] text-white'>발송하기</button>
            </div>


        </div>
        
    </div>
  )
}
