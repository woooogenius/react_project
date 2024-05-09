import React, { useState } from 'react'
import JoinHeader from '../../components/JoinHeader'
import LoginInput from '../../components/LoginInput'
import { Link } from 'react-router-dom'
import SubmitBtn from '../../components/SubmitBtn'

export default function LogInPage({}) {

  return (
    <>
        <JoinHeader/>
        <div className='pt-[80px] tablet:w-[560px] m-auto mobile:w-[full] mobile:px-[20px] min-h-[calc(100vh)] pb-[100px]'>

            <div className='w-[219px] h-[68px] mobile:mt-[50px] mt-[173px] mb-[29px] m-auto'>
                <img src={process.env.PUBLIC_URL+'assets/img/google.png'} alt="img"/>
            </div>

            <LoginInput placeholder={'이메일 입력'}/>
            <LoginInput placeholder={'비밀번호(영문, 숫자, 특수문자 포함 8~30자'}/>

            <div className='w-full mt-[40px] flex justify-between'>
                <label htmlFor="saveId" className='flex justify-center text-[18px] text-[#1C1C1C]'>
                    <input type="checkbox" id='saveId' className='w-[28px] h-[28px] rounded-[8px] border-[#CECECE] mr-[12px]'/>
                    아이디 저장
                </label>

                <ul className='flex'>
                   <li className=''><Link className='text-[#1C1C1C] text-[18px] border-r border-[#CECECE] px-[14px]'>아이디 찾기</Link></li> 
                   <li className=''><Link className='text-[#1C1C1C] text-[18px]  px-[14px]'>비밀번호 찾기</Link></li> 
                </ul>


            </div>
            <SubmitBtn btnTitle={'로그인'}/>

            <p className='text-[18px] text-center mt-[47px]'>계정이 없으신가요? <span className='text-[#5146F0] underline'>회원가입하기</span></p>


        </div>

    </>
  )
}
