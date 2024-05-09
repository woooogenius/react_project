import React from 'react'
import JoinHeader from '../../components/JoinHeader'
import SubmitBtn from '../../components/SubmitBtn'
import MyPageInput from '../../components/MyPageInput'

export default function FindEmail() {

  return (
    <>
        <JoinHeader/>
        <div className='pt-[80px] tablet:w-[560px] m-auto mobile:w-[full] mobile:px-[20px] min-h-[calc(100vh)] pb-[100px]'>

            <div className='w-[219px] h-[68px] mt-[173px] mobile:mt-[50px] mb-[29px] m-auto text-center text-[24px] font-bold'>
                <h4>이메일 찾기</h4>
            </div>
            
            <MyPageInput title={'이름'} placeholder={'이름 입력'} isWrite={''} />


            <h4 className='text-[16px] mt-[40px] font-semibold'>휴대폰 번호</h4>
            <div className='w-full flex'>
                <div className='w-[calc(80%-16px)] mr-[16px] mt-[10px]'>
                    <input className={` w-full h-[55px] mr-[10px] border border-[#CECECE] rounded-[8px] px-[15px]`} placeholder={"'-'없이 숫자만 입력"}  />
                </div>
                <button className='w-[calc(20%)] border border-[#5146F0] text-[#5146F0] h-[55px] rounded-[8px] mt-[10px]'>인증번호 발송</button>
            </div>

           
            <SubmitBtn btnTitle={'완료'}/>



        </div>

    </>
  )
}
