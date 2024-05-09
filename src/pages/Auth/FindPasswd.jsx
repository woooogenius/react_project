import React, { useState } from 'react'
import JoinHeader from '../../components/JoinHeader'
import SubmitBtn from '../../components/SubmitBtn'
import MyPageInput from '../../components/MyPageInput'
import InputWithButton from '../../components/InputWithButton'

export default function FindPasswd() {
    const [isAuth, setIsAuth] = useState(false)
    const onClickAuth = ()=>{
        setIsAuth(true)
    }

  return (
    <>
        <JoinHeader/>
        <div className='pt-[80px] tablet:w-[560px] m-auto mobile:w-[full] mobile:px-[20px] min-h-[calc(100vh)] pb-[100px]'>

            <div className='w-[219px] h-[68px] mt-[173px] mobile:mt-[50px] mb-[29px] m-auto text-center text-[24px] font-bold'>
                <h4>비밀번호 찾기</h4>
            </div>
            
            <MyPageInput title={'이메일'} placeholder={'이메일 입력'} isWrite={''} />
            <MyPageInput title={'이름'} placeholder={'이름 입력'} isWrite={''} />


            <h4 className='text-[16px] mt-[40px] font-semibold'>휴대폰 번호</h4>
            
            <InputWithButton placeholder={"'-'없이 숫자만 입력"} btnTit={'인증번호 발송'} onClick={onClickAuth}/>


            {
                isAuth ? <InputWithButton placeholder={'인증번호 입력'} btnTit={'확인'}/> : ''
            }
            

           
            <SubmitBtn btnTitle={'완료'}/>



        </div>

    </>
  )
}
