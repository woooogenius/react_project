import React from 'react'
import JoinHeader from '../../components/JoinHeader'
import SubmitBtn from '../../components/SubmitBtn'
import MyPageInput from '../../components/MyPageInput'

export default function PasswdReset() {
  

  return (
    <>
        <JoinHeader/>
        <div className='pt-[80px] tablet:w-[560px] m-auto mobile:w-[full] mobile:px-[20px] min-h-[calc(100vh)] pb-[100px]'>

            <div className='w-[219px] h-[68px] mt-[173px] mobile:mt-[50px] mb-[29px] m-auto text-center text-[24px] font-bold'>
                <h4>비밀번호 재설정</h4>
            </div>
            
            <MyPageInput title={'현재 비밀번호'} placeholder={'현재 비밀번호 입력'} isWrite={''} />
            <MyPageInput title={'새 비밀번호'} placeholder={'8자 이상, 영문 혹은 영문과 숫자조합'} isWrite={''} />
            <MyPageInput title={'새 비밀번호 확인'} placeholder={'8자 이상, 영문 혹은 영문과 숫자조합'} isWrite={''} />            


            

           
            <SubmitBtn btnTitle={'완료'}/>



        </div>

    </>
  )
}
