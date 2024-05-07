import React, { useEffect, useState } from 'react'
import TemplateModal from '../../components/TemplateModal'
import ModalDelete from '../../components/ModalDelete'
import ModalEdit from '../../components/ModalEdit'

export default function AddNum() {

    
   const [isChecked, setIsChecked] = useState('phone')
   const handleChecked = (value)=>{
        setIsChecked(value)
   }


  return (
    <>
    <div className='w-full mt-[10px] pc:px-[124px] mobile:px-[20px] tablet:px-[30px]  widepc:pr-[120px] bg-white pb-[150px] min-h-[calc(100vh-220px)]'>
        <div className='flex flex-wrap'>
            

            <div className='w-full flex'>
                <div className='pc:w-1/2 widepc:w-1/2 tablet:w-full mobile:w-full'>
                    <div className='text-[16px] text-[#525252] mt-[40px] mobile:text-[14px]'>
                        <p>- 기본 전화번호인 경우 통신서비스 이용증명원이 필요합니다.</p>
                        <p>- 제출서류는 발급일자가 1개월 이내여야 합니다.</p>
                     </div>


                    <div className='mt-[56px]'>
                        <h4 className='text-[20px] mb-[10px]'>발신번호 종류</h4>

                        <label htmlFor="select01" className='mr-[30px]'>
                            <input type="radio" onChange={()=>handleChecked('phone')} id='select01' name='selectNum' value={'phone'} defaultChecked={isChecked === 'phone'} className='mr-[10px]'/>
                            휴대전화 번호
                        </label>                

                        <label htmlFor="select02">
                            <input type="radio" onChange={()=>handleChecked('else_phone')} id='select02' name='selectNum' value={'else_phone'} defaultChecked={isChecked === 'else_phone'} className='mr-[10px]'/>
                            기타 전화번호
                        </label>

                        <h4 className='text-[20px] mt-[50px]'>전화번호 중복확인</h4>
                        <div className='flex mt-[10px]'>
                            <input type="text" placeholder='전화번호 입력' className='w-[calc(80%-10px)] h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]'/>
                            <button className='w-[calc(20%-10px)] h-[55px] border border-[#5146F0] text-[#5146F0] mobile:text-[14px] rounded-[8px]'>중복확인</button>
                        </div>
                        

                        {
                            isChecked === 'phone' ? 
                            
                            <div>
                               <h4 className='text-[20px] mt-[50px]'>본인인증</h4>
                                <div className='flex mt-[10px]'>
                                    <input type="text" placeholder='전화번호 본인인증' className='w-[calc(80%-10px)] h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]'/>
                                    <button className='w-[calc(20%-10px)] h-[55px] border border-[#5146F0] text-[#5146F0] mobile:text-[14px] rounded-[8px]'>첨부하기</button>
                                </div> 
                            </div>
                             :
                            ''

                        }
                        {
                            isChecked === 'else_phone' ?

                            <div>
                                <h4 className='text-[20px] mt-[50px]'>통신서비스 이용증명원</h4>
                                <div className='flex mt-[10px]'>
                                    <input type="text" placeholder='통신서비스 이용증명원 첨부' className='w-[calc(80%-10px)] h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]'/>
                                    <button className='w-[calc(20%-10px)] h-[55px] border border-[#5146F0] text-[#5146F0] mobile:text-[14px] rounded-[8px]'>첨부하기</button>
                                </div> 
                            </div>
                            :
                            ''
                        }

                        <button className='w-full bg-[#4F44F0] text-white h-[55px] rounded-[8px] mt-[80px]'>추가하기</button>

                    </div>

                </div>
                




              




            </div>

           



        


        </div>
        
    </div>

  
   
    </>
  )
}
