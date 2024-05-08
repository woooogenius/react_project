import React, { useEffect, useState } from 'react'
import AddNumber from '../../components/AddNumber'
import SendOption from '../../components/SendOption'
import PageDesc from '../../components/PageDesc'
import ToggleButton from 'react-toggle-button'
import CustomToggleButton from '../../components/CustomToggleButton'

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


    // 이미지업로드
    const [uploadImg, setUploadImg] = useState([]);
    const [previewImg, setPreviewImg] = useState([])

    const onChangeImg = (e)=>{

        let fileArr = e.target.files
        let fileUrl = []
        let filesLength = fileArr.length > 3 ? 3 : fileArr.length;
    
        setUploadImg(Array.from(fileArr))

        for(let i =0; i < filesLength; i++){
            let fileRead = new FileReader()
            let file = fileArr[i];


            fileRead.onload = function(){
                
                fileUrl[i]=fileRead.result
                setPreviewImg([...fileUrl]);

            }
            fileRead.readAsDataURL(file);

        }
    }

  return (
    <div className='w-full mt-[10px] pc:px-[100px] mobile:px-[20px] tablet:px-[30px] widepc:pl-[124px] bg-white pb-[150px]'>
        
        <PageDesc desc01={'- 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.'} desc02={'- 90byte 초과 시 장문 문자로 자동 전환되며, 최대 2000byte까지 작성 가능합니다.'}/>

        <div className='widepc:flex pc:flex-none'>

       
            <div className='flex flex-wrap'>

                <div className='widepc:w-[600px] mobile:w-full tablet:w-full pc:w-1/2'>

                    <AddNumber/>

                    <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                    <div className='w-full'>
                        <h4 className='mt-[30px] text-[18px] font-semibold mb-[16px]'>현재 발송 가능 건수</h4>

                        <ul className='w-full flex justify-around mt-[16px]'>
                            <li className='widepc:w-[calc(33.3333%-33.3333px)] pc:w-[calc(33.3333%-20px)]  flex mobile:flex-col pc:flex-col widepc:flex-row justify-center items-center text-center widepc:mr-[50px] pc:mr-[20px]'>
                                <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#E9EBFD] mr-[10px] text-[#5E2BFF]'>단문 SMS</p>
                                <p className='mobile:mt-[10px] pc:mt-[10px] widepc:mt-0'>152건</p>
                            </li> 

                            <li className='widepc:w-[calc(33.3333%-33.3333px)] pc:w-[calc(33.3333%-20px)]  flex mobile:flex-col pc:flex-col widepc:flex-row  justify-center items-center text-center  widepc:mr-[50px] pc:mr-[20px]'>
                                <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#f4e3df] mr-[10px] text-[#FA593B]'>장문 LMS</p>
                                <p className='mobile:mt-[10px] pc:mt-[10px] widepc:mt-0'>152건</p>
                            </li> 

                            <li className='widepc:w-[calc(33.3333%-33.3333px)] pc:w-[calc(33.3333%-20px)]  flex mobile:flex-col pc:flex-col widepc:flex-row  justify-center items-center text-center'>
                                <p className='w-[100px] h-[35px] leading-[35px] rounded-[30px] bg-[#d1f0dc] mr-[10px] text-[#08AA40]'>포토 MMS</p>
                                <p className='mobile:mt-[10px] pc:mt-[10px] widepc:mt-0'>152건</p>
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
                            <input type="text" placeholder='제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)' className='p-[20px] mobile:text-[14px] h-[60px] w-full border border-[#E0E0E0] rounded-[8px]'/>
                            <div className='flex justify-between mt-[15px]'>
                                <p className='px-[15px] py-[5px] bg-[#5E2BFF] mobile:text-[14px] text-white rounded-[30px]'>단문 SMS</p>
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
                                    <li className='px-[20px] mobile:px-[10px] mobile:text-[14px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px] mr-[8px]'>특수문자</li>
                                    <li className='px-[20px] mobile:px-[10px] mobile:text-[14px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px] mr-[8px]'>특수문자</li>
                                    <li className='px-[20px] mobile:px-[10px] mobile:text-[14px] py-[5px] bg-[#F5F5F5] text-[#646464] rounded-[30px]'>특수문자</li>
                                </ul>
                            </div>

                            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[40px]'></div>

                            <div className='mt-[25px] flex justify-between'>
                                <h4 className='text-[18px] mobile:text-[16px] font-semibold'>광고성 문자(080 수신거부 포함)</h4>
                                <CustomToggleButton/>
                                {/* <ToggleButton
                                    value={ isClick }
                                    onToggle={(value) =>setIsClick(!value)} 
                                /> */}
                            </div>

                            <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>

                            <div className='mt-[16px]'>
                                <h4 className='text-[18px] font-semibold'>이미지 추가</h4>
                            
                                <div className='flex flex-row'>

                                    <label className='w-[100px] h-[100px] flex justify-center items-center border border-[#CECECE] bg-white mt-[16px] cursor-pointer'>
                                        <input type="file" accept='image/*' onChange={onChangeImg} hidden multiple/>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </label>

                                    
                            

                                    
                                        <div className='w-[calc(100%-100px)] mt-[16px] flex items-center'>

                                            {previewImg.map((img, index) => (
                                                <div className='w-[100px] h-[100px] mobile:w-[50px] mobile:h-[50px] mx-[10px] 'key={index}>
                                                    <img key={index} src={img} alt='img' className='w-full h-full object-fit'/>
                                                </div>
                                                
                                            ))}
                                        </div>
                                        
                                </div>

                                
                                

                                <div className='mt-[16px] text-[#797979] mobile:text-[14px]'>
                                    <p>- 이미지는 최대 3장까지 첨부 가능합니다.</p>
                                    <p>- 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</p>
                                </div>
                            </div>



                        </form>
                    </div>

                    <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>


                    <SendOption/>

                    <div className='w-full h-[1px] border-t border-[#CECECE] mt-[25px]'></div>







                </div>

                <div className='widepc:w-[calc(50%-600px)] pc:w-1/2 relative mobile:hidden tablet:hidden pc:block'>

                    <div className='widepc:w-[400px] pc:w-[350px] widepc:h-[775px] pc:h-[700px] border-[5px] border-[#4D4D4D] px-[20px] py-[40px] bg-[#B5D3F2] rounded-[22px] sticky top-[100px] mt-[100px] pc:ml-[80px] widepc:ml-[116px] overflow-y-scroll'>

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
                            <div className='bg-white p-[20px] rounded-[16px] mt-[16px] '>

                                <div className='overflow-auto break-words '>
                                    {
                                        isWrite.length === 0 ? '이 영역은 미리보기 화면입니다.' : isWrite
                                    }
                        
                                    
                                </div>
                            
                            </div>
                            <div className=''>
                                    {
                                        previewImg.length === 0 ? null : 
                                        previewImg.map((img, index) => (
                                            <div className='w-full h-full  bg-white border border-[#CECECE] rounded-[16px] mt-[10px]'key={index}>
                                                <img key={index} src={img} alt='img' className='w-full h-full object-cover rounded-[16px]'/>
                                            </div>
                                            
                                        ))
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
            <div className='widepc:w-[360px] widepc:block tablet:hidden mobile:hidden pc:hidden'></div>
        </div>
        
    </div>
  )
}
